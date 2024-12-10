import UrlPattern from "url-pattern";

import { services as patterns } from "./config.js";

import { cleanURL, apiJSON } from "./sub/api-helper.js";
import { errorUnsupported } from "./sub/errors.js";
import loc from "./sub/loc.js";
import match from "./sub/match.js";

export async function getJSON(originalURL, ip, lang, format, quality) {
    try {
        let url = decodeURI(originalURL);

        if (!url.includes('http://')) {
            let hostname = url.replace("https://", "").replace(' ', '').split('&')[0].split("/")[0].split("."),
                host = hostname[hostname.length - 2],
                patternMatch;

            if (host == "youtu") {
                host = "youtube";
                url = `https://youtube.com/watch?v=${url.replace("youtu.be/", "").replace("https://", "")}`;
            }

            if (host && host.length < 20 && host in patterns && patterns[host]["enabled"]) {
                for (let i in patterns[host]["patterns"]) {
                    patternMatch = new UrlPattern(patterns[host]["patterns"][i]).match(cleanURL(url, host).split(".com/")[1]);
                }

                if (patternMatch) {
                    return await match(host, patternMatch, url, ip, lang, format, quality);
                } else throw Error()
            } else throw Error()
        } else {
            return apiJSON(0, { t: errorUnsupported(lang) })
        }
    } catch (e) {
        return apiJSON(0, { t: loc(lang, 'apiError', 'generic') + loc(lang, 'apiError', 'letMeKnow') });
    }
}