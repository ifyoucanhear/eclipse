# eclipse

sleek and easy to use social media downloader built on javascript.

## what's eclipse?

eclipse aims to be the ultimate social media downloader, that is sleek, easy to use, and doesn't bother you with ads or privacy invasion agreement popups. it also doesn't remux anything, so you get media in best quality possible (unless you change that in settings).

## supported services

### video

- bilibili.com
- douyin
- reddit
- tiktok
- tumblr
- twitter
- youtube
- youtube music
- vk

### audio

- youtube
- youtube music

## translations

- spanish
- french
- indonesian

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
- be nice

## todo

### services

- [x] tumblr support
- [ ] niconico support
- [ ] instagram support
- [ ] soundcloud support
- [ ] add an option to save twitter gifs as `.gif` instead of `.mp4`
- [ ] quality switching for bilibili

### other

- [ ] language picker in settings
- [ ] make switch buttons in settings selectable with keyboard
- [ ] option to save audios in formats other than original
- [ ] make eclipse fully pwa compatible (add a service worker)
- [ ] make page rendering module more versatile

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

## license

eclipse is under [agpl-3.0 license](https://github.com/ifyoucanhear/eclipse/LICENSE)
