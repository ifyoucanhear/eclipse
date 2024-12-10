import NodeCache from "node-cache";

import { UUID, encrypt } from "../../src/modules/sub/crypto.js";
import { streamLifespan } from "../config.js";

const streamCache = new NodeCache({ stdTTL: streamLifespan, checkperiod: 120 });

export function createStream(obj) {
    let streamUUID = UUID(),
        exp = Math.floor(new Date().getTime()) + streamLifespan,
        ghmac = encrypt(`${streamUUID},${obj.url},${obj.ip},${exp}`, obj.salt),
        iphmac = encrypt(`${obj.ip}`, obj.salt);

    streamCache.set(streamUUID, {
        id: streamUUID,
        service: obj.service,
        type: obj.type,
        urls: obj.urls,
        filename: obj.filename,
        hmac: ghmac,
        ip: iphmac,
        exp: exp,
        isAudioOnly: obj.isAudioOnly ? true : false,
        time: obj.time
    });

    return `${process.env.selfURL}api/stream?t=${streamUUID}&e=${exp}&h=${ghmac}`;
}

export function verifyStream(ip, id, hmac, exp, salt) {
    try {
        let streamInfo = streamCache.get(id);

        if (streamInfo) {
            let ghmac = encrypt(`${id},${streamInfo.url},${ip},${exp}`, salt);

            if (hmac == ghmac && encrypt(`${ip}`, salt) == streamInfo.ip && ghmac == streamInfo.hmac && exp > Math.floor(new Date().getTime()) && exp == streamInfo.exp) {
                return streamInfo;
            } else {
                return { error: 'não autorizado', status: 401 };
            }
        } else {
            return { error: 'este token de fluxo não existe', status: 400 };
        }
    } catch (e) {
        return { status: 500, body: { status: "error", text: "erro do servidor interno" } };
    }
}