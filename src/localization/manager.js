import * as fs from "fs";

import { appName, repo } from "../modules/config.js";
import loadJson from "../modules/sub/loadJSON.js";

const locPath = './src/localization/languages';

let loc = {}

export async function loadLoc() {
    fs.readdir(locPath, (err, files) => {
        files.forEach(file => {
            loc[file.split('.')[0]] = loadJson(`${locPath}/${file}`)
        });
    })
}

await loadLoc();

export function replaceBase(s) {
    return s.replace(/\n/g, '<br/>').replace(/{appName}/g, appName).replace(/{repo}/g, repo)
}

export function replaceAll(lang, str, string, replacement) {
    let s = replaceBase(str[string])

    if (replacement)
        s = s.replace(/{s}/g, replacement);

    if (s.match('{')) {
        Object.keys(loc[lang]["substrings"]).forEach(sub => {
            s = replaceBase(s.replace(`{${sub}}`, loc[lang]["substrings"][sub]))
        });
    }

    return s
}

export default function(lang, string, replacement) {
    try {
        if (!Object.keys(loc).includes(lang))
            lang = 'en';

        let str = loc[lang]["strings"];

        if (str && str[string]) {
            return replaceAll(lang, str, string, replacement)
        } else {
            str = loc["en"]["strings"];

            return replaceAll(lang, str, string, replacement)
        }
    } catch (e) {
        return `!!${string}!!`
    }
}