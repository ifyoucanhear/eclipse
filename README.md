# eclipse

sleek and easy to use social media downloader built on javascript.

## what is eclipse?

eclipse aims to be the ultimate social media downloader, that is sleek, easy to use, and doesn't bother you with ads or privacy invasion agreement popups.

eclipse doesn't remux any videos, so videos you get are max quality available (unless you change that in settings).

## support

- twitter
- tiktok
- youtube and youtube music
- bilibili.com
- reddit
- vk

## todo

- [ ] instagram support
- [ ] quality switching for bilibli and twitter
- [ ] language picker in settings
- [ ] use esmbuild to minify frontend css and js
- [ ] make switch buttons in settings selectable with keyboard
- [ ] remake page rendering module to be more versatile
- [ ] matching could be redone, i'll see what i can do

## requirements

- node.js v14.16 or newer
- git

## npm modules

- cors
- dotenv
- express
- express-rate-limit
- ffmpeg-static
- got
- node-cache
- xml-js
- ytdl-core

setup script installs all needed **npm** dependencies, but you have to install node.js and git yourself, if you don't have those already.

1. clone the repo: `git clone https://github.com/ifyoucanhear/eclipse`
2. run setup script and follow instructions: `npm run setup`
3. run eclipse via `npm start`
4. done

## license

eclipse is under [agpl-3.0 license](https://github.com/ifyoucanhear/eclipse/LICENSE), keep that in mind when doing something with it.
