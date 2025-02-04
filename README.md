# eclipse

best way to save content you love.

## what's eclipse?

eclipse is social media downloader with zero bullshit. It's efficient, easy to use, and doesn't bother you with ads or privacy invasion "consent" popups.

it preserves original media quality so you get best downloads possible (unless you change that in settings).

## supported services

### video

- bilibili.com
- douyin
- reddit
- tiktok
- tumblr
- twitter
- youtube (with hdr support)
- vk

### audio

- youtube
- youtube music

## translations

- spanish
- french
- indonesian
- polish

## speak your language

english and russian localization in [that directory](https://github.com/ifyoucanhear/eclipse/tree/current/src/localization/languages) and use it as a base for your translation. then simply make a pull request and it'll be out for everyone upon review.

### keep in mind

- use informal language on all occasions
- strings are always lowercase unless it's an internal value
- keep translations as friendly and fun as possible
- word-for-word translations from original language are not valid
- you can rephrase sentences as long as they keep the same sense
- you can add wordplays or puns if it feels natural to do so
- even though i love cursing, keep that away from translations
- always check if there are issues in UI with your localization
- there's no need to translate `changelogcontenttitle` and `changelogcontent`, because those are very often changed
- add "(in english)" to `changeloglastcommit` and `changeloglastmajor`, because those are almost always kept exclusively in english. remove that phrase if you do translate major update changelog
- be nice

## todo

### services

- [ ] niconico support
- [ ] instagram support
- [ ] soundcloud support
- [ ] add an option to save twitter gifs as `.gif` instead of `.mp4`
- [ ] quality switching for bilibili
- [ ] find a way to get tiktok videos without a watermark
- [ ] add an option to keep watermark on tiktok videos

### other

- [ ] add support for emoji in localization
- [ ] language picker in settings
- [ ] make eclipse fully pwa compatible (add a service worker)

## requirements

- node.js v14.16 or newer
- git

## npm modules

- cors
- dotenv
- esbuild
- express
- express-rate-limit
- ffmpeg-static
- got
- node-cache
- xml-js
- ytdl-core

setup script installs all needed npm dependencies, but you have to install node.js and git yourself.

setup script installs all needed `npm` dependencies, but you have to install `node.js` and `git` yourself.

1. clone the repo: `git clone https://github.com/ifyoucanhear/eclipse`
2. run setup script and follow instructions: `npm run setup`
3. run eclipse via `npm start`
4. done

## disclaimer

don't expect any consistency in that

## third party stuff

[fluent emoji](https://github.com/microsoft/fluentui-emoji) by microsoft.

## license

eclipse is under [agpl-3.0 license](https://github.com/ifyoucanhear/eclipse/LICENSE)
