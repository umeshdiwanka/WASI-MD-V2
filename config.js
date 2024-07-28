//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNHM0hXTzMvQ0ZZWWhIZlA0dk4rN3F2dTdBRlpxODJBcUxMa3laUVVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmFRc0I5SHRrZGlpamVMRy9FaWxSRk83YmVpNHViSjkvSTJVbmx1NXBXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TW9xWFBrRXRra1QxZWttcm15RnB2TGhWMUtlc0VvSmkwWWdpL0NSc0Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVmlhL0g2Uk0vM0pJZ1NOYkttb0V2SlJvbllWUzlqZlBtU3g0Y1NqVmt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCUjVRaWFMSXErTnl4OUxPUTBjZks3eThmbUdxd0JGaEk4WEQrU1ZOVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4xbmJ6eHhQdjU0UCtVWXZXYTliWjE0bWt6RHNFR0s3VEljVGFzSjFyMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkx5L0FmL092RjEyRW5wR2Zxb2ZWeGlTVmVDOG12ZXRRNFpFVThVQm5tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5XL0g3L0p4R3g4MDZqTnRzaGMvRjl0bTVGZXRYdmMwQjlGaHdGUWpRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM1YVJFUUh2ZnNZekU0KzNUM3NCUDBEVmpleElyT3hOMENtRGZaZFlEbHpoaW5qME82eHJTMU1BcDFLUmZuZHdqS0xydVR5YTVLSmlnZ3ZyZktWNGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6InRQT0FyaE5LbGpPalFZdmRJVUhaODR5N0IvL3lZaFQ1VDV6SWl0QS80NkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklybmU4cnRHUUxhZjZoa21ZZHYxeXciLCJwaG9uZUlkIjoiZGY0N2RlMzQtNmUzZS00OTNiLTkzNjAtMGEyYzNiN2NiNTRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNQbkxvdTFPYU4rYm5wNlFzYWh4RS9ZYlk3az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmcFRMWEJiMVBzNWFsS0JOK05WbS9sc0JtU0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzdMV0dXM0UiLCJtZSI6eyJpZCI6Ijk0NzE1NzI3MzU2OjMyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaUt0NGtIRVBuZW1iVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4dVhSckJxcmZzUE0ySFNUZ3pqMGNsbFV3dUR3ajhJRnV2UG1tTHJxaFRRPSIsImFjY291bnRTaWduYXR1cmUiOiJZUGhvTi8vNUp2Q0NiR0RLQnYwVFZUaTNwL3pjQmFHMldiaHlaZGpOUVViTjh0MjZ1c1hMNFIrcGZUOG9ObWRIWm9pQXFpa3BFT2dHRDBkckdwUi9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0xZWndPREV1djJybUJVUXpoZXg0cVRhbWQxRFBzU2x3dlJ0MHVGUW85VHU2ZE40ZzJBTiszcVpURTkwNW9KMlIxeVlzSXpBODEwdnVVNHVxdDlTaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNTcyNzM1NjozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjYmwwYXdhcTM3RHpOaDBrNE00OUhKWlZNTGc4SS9DQmJyejVwaTY2b1UwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTgzNTU4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI0aSJ9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZQMjBWTVFrYzFFSHNzL3cvWitkQmtGMFc0MUJqWDY3Sk1QMGRFK0lrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3RtS2FjeEZldUdVcktqR0tUeHVjUU1WK0hVN3g2MXlGVGN4QUJ2UGpSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS0E5U3VSUFF1ZlVRVStTOE9TTEVoZWh2SGFBTUFJY1A3a21XcGU0YjFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ak5mMytFQWxvQlNhbTk1VlJZbHVVVUhSQTFQTG5Lc3Rwb05rMjVnbkJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPN01FMHBUS1lKQ3B6UC85eFk1Sko3UHZxNDdZMzRScHBQWVI0Z2pNVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikgxek5oeFZoMXM5Qkw0c29DSmJQNVl3a1RLWjdsUUdjc1dLcTRXQzNNRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdld3g0N1hGVENWQmEvTjRLNVd1eTlPRk16TE5WT3l1d0lJWjd2TFAxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTi8zdlZ0UjF0VEN6cERzVS9DL0J4UzU0M0YxcXBBalFNcDlEQW9wMTAxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp3ZkQ3VXcyTUczb0JvZjBzenFjM3laem4vUi8vS3NrMHpTc3JSeTFyQVdHNlBNM0s5dldDVml5MW85MFdSSE9JK2J4cUdLWlVJaHg5cTJoQ3hXNGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJoRG13U2UwMFdxVkFzZS8wc0tOUStXL3VxWmJIZU5NSGQ4WHJIbWdDWW1JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJid0NkVG9HNFFGNkZiQWl5RzUyeXNnIiwicGhvbmVJZCI6IjBhMTMyZWQxLWM1ODAtNDBhNy05OGRiLThkYTAwY2VlZDc3ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNHNTS1Q2b3lxNXFnM2pMTUlOQ3lDditub1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmgwa3JNSzB1WE85QjVPaEtETTh3UDg5QVprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVDQ1pTQUdSIiwibWUiOnsiaWQiOiI5NDcxNTcyNzM1NjozNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3FLdDRrSEVKZnJtYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieHVYUnJCcXJmc1BNMkhTVGd6ajBjbGxVd3VEd2o4SUZ1dlBtbUxycWhUUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiejVPWVgyVnRVNE82VlUyZnJ2Q3k2dkhDSzNLS1VrV0g0WmJYUmZQeUpDd3VKanBMdjgxT1N4b1ZhNTVkVnF1SGJqMTM1MjhaNDdnQ0o0UVdqZVovRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InBKbmJSbHhLMDVCd083clprLzg0ZE5STHhJWTZEVmc0aDNsa0d1VHB3ek9CdW82ditxNUNUeU5BckV2L1VwVUMvOWpraTA2MHAzTS9PTjFqZkJ3U2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTU3MjczNTY6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2JsMGF3YXEzN0R6TmgwazRNNDlISlpWTUxnOEkvQ0Jicno1cGk2Nm9VMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjE4NTEyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCNG0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
