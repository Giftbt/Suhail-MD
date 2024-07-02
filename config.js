const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_12_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUwLFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrVWpBaDBudHVqenJLSmoza0RrWi9xTGRnT28wRFg3RUd3UElzdjdFMCs4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaSkxFdms2SFRLS3VSWUtESWpoSml3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmZDE2YmExLTg3MzAtNDVlZS1iNTA0LTIxZDIwZjJlN2JlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMjgsXG4gICAgICA0OCxcbiAgICAgIDU3LFxuICAgICAgODksXG4gICAgICA1OCxcbiAgICAgIDI2LFxuICAgICAgMTE3LFxuICAgICAgMTE4LFxuICAgICAgMTU3LFxuICAgICAgMTQ5LFxuICAgICAgMjQ0LFxuICAgICAgNTMsXG4gICAgICAyMzMsXG4gICAgICA2NSxcbiAgICAgIDE0LFxuICAgICAgNTksXG4gICAgICAxMTUsXG4gICAgICAxOTMsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyLFxuICAgICAgMixcbiAgICAgIDIzNixcbiAgICAgIDE5NCxcbiAgICAgIDExOCxcbiAgICAgIDYxLFxuICAgICAgMTA3LFxuICAgICAgODMsXG4gICAgICAyNCxcbiAgICAgIDE0LFxuICAgICAgMixcbiAgICAgIDIwMSxcbiAgICAgIDgsXG4gICAgICAxMDcsXG4gICAgICA3MCxcbiAgICAgIDIxOCxcbiAgICAgIDIzMSxcbiAgICAgIDE1OCxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhMVjhQQ1AxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDQ4MjUxMTg6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgvJLgvJLwnZC+8J2RlvCdkZvwnZGU8J2RnfCdkZbwnZGbIOC8kiDwnZGH8J2RnPCdkZ/wnZGf8J2RkvCdkaHwnZGh8J2RnFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTEyMzk5NTI4MTc1Ojc3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TeG5ab0dFSnY1ajdRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnRMTzAzWUJNVUwxcUtBQld1Y1k0elU4WTJwbEZpanZEYW54WUc3QWxrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyTlpYV01SeVdRZ0xYVDdiNC93dEgyOEJHSmloMGtrVXAzZ2lOdExKY3NNWDJ1V1N0NHFYcG9zSGpYME5Way9CTDU0YkFQbU1lR05HODV5ektxd3BDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3MU1jWkkrazhrQVBiSWFQYXYrOEl2Nkw2UmF2T01qUHhoN214UUprR3ZaeWJWUThMUmczeGR1WEpvbUNKWUtDM2VXQkF5RHp1RHY3NmY2YlYzNzJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQ4MjUxMTg6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkyNTkxOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
