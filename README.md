# eclipse

sleek and easy to use social media downloader built on javascript.

## what is eclipse?

everyone is annoyed by the mess video downloaders are on the web, and eclipse aims to be the ultimate social media downloader, that is sleek, easy to use, and doesn't bother you with ads or privacy invasion agreement popups.

eclipse doesn't remux any videos, so videos you get are max quality available (unless you change that in settings).

## support

- twitter
- youtube and youtube music
- bilibili.com
- reddit
- vk

## todo

- [ ] quality switching for bilibli and twitter
- [ ] clean up the mess that localisation is right now
  - [ ] sort contents of .json files
  - [ ] rename each entry key to be less linked to specific service
- [ ] add support for more languages when localisation clean up is done
- [ ] clean up css
- [ ] use esmbuild to minify frontend css and js
- [ ] make switch buttons in settings selectable with keyboard
- [ ] do something about changelog because the way it is right now is not really great
- [ ] remake page rendering module to be more versatile
- [ ] clean up code to be more consistent across modules
- [ ] matching could be redone, i'll see what i can do
- [ ] facebook and instagram support
- [ ] tiktok support (?)
- [ ] support for bilibili.tv (?)

## requirements

- node.js v14.16 or newer
- git

## npm modules

- express
- got
- url-pattern
- xml-js
- dotenv
- express-rate-limit
- ffmpeg-static
- node-cache
- ytdl-core

setup script installs all needed **npm** dependencies, but you have to install node.js and git yourself, if you don't have those already.

1. clone the repo: `git clone https://github.com/ifyoucanhear/eclipse`
2. run setup script and follow instructions: `npm run setup`
3. run eclipse via `npm start` or `node eclipse`
4. done

## license

eclipse is under [gpl-3.0 license](https://github.com/ifyoucanhear/eclipse/LICENSE), keep that in mind when doing something with it.
