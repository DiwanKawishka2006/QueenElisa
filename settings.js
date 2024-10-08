const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: '',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

𝐃𝚰𝐖𝚫𝚫 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋 𝚮𝚵𝐋𝚸 𝐃𝚵𝐒𝐊`,
  ALIVE_MEDIA: 'https://imgur.com/a/Co9ykaq',
  MONGODB_URL: '', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐃𝚰𝐖𝚫𝚫 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋 𝚮𝚵𝐋𝚸 𝐃𝚵𝐒𝐊',
  OWNER_NAME: '𝐃𝚰𝐖𝚫𝚫',
  OWNER_NUMBER: '94767190792',
  SUDO: '94767190792',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '𝐃𝚰𝐖𝚫𝚫 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋 𝚮𝚵𝐋𝚸 𝐃𝚵𝐒𝐊',
  STICKER_AUTHOR: '𝐃𝚰𝐖𝚫𝚫 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋',
  STICKER_PACK: '𝚮𝚵𝐋𝚸 𝐃𝚵𝐒𝐊',
  REMOVE_BG_APIKEY: '2cK9syxqaPiiFLuQpue9Ari4',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝐃𝚰𝐖𝚫𝚫 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋 𝚮𝚵𝐋𝚸 𝐃𝚵𝐒𝐊 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
