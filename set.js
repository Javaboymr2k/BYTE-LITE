 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID |Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEp3YWpmYTlrc0w2eHBIRXdQVXAvZTRHb3QzQnlpZUEyMlhtVlBZZkZWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiby9IVWtZbGJYaU1JMFE3WnJpN2tEYkw1U1hLcm1pWUJmR2hFTTV6SU1Dbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTklaUEZCMzVXU2JZVzAvdHI2VWIrS2YxcE9IS1lGU0RWUE9CS3QwaTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvU04zeG1ScVpFMFBKbmN3YzEvQVFkK2Myb3crUElZNmxzaFRRT1dqRWlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLTkZvclFUK01GdnZuZG1DL3FQVHoyKzJwUUVpWlord0tDMGRoNHkrMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB5akZ1bFRGUWhhU1h3anpRYTVMSEpOT2RjWWJ3ZnJSS0lTYTQ1OFRjbU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUgxbkJWS1R2UExOUS9zNEhpWU5tU2kxOTRSS0dtZXg5M01RN1Q2K2ptVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFJRcDJBc2hEcTFRK3ZwaktDbUUxZ0sySVBiUEhLTFYxK2NtN2FrL0dpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRhWFU3VWVTY1B1NWZqVVlOU2V0ZTNqOTgvdXhSQVZqbksyQWxoOFhwN24zYjhwT1kxTW5UQXZpVTg3YnNrQjBhN2M1TzVlYVlUUkgvREhLalErQkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJ3U0xKaXQxdzlpVnNWKzJsNW1zTmEzYVloMEo1aEkvVVpEeTJXckdMY0dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MDk2NzgzODE0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNjVGNkNGNUMxMTMwMjIzNTZCRUFENkE4NDE1OTNBQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MTY2MTcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZNmNmUGJkaFFlS2d1QWl3WEZxU25BIiwicGhvbmVJZCI6Ijg1NDk2NDE3LWU4OWQtNGE1Ni04ZTdhLWM0NmUzZmZmMWFjMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5by9ySTZIZnpLeFBUQjlPbWhrTUxybWtjdDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3VScVVVOFJQd0c4QkVyalFjMUZmWEErb3VNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdaRVdUV1hGIiwibWUiOnsiaWQiOiIyNjA5Njc4MzgxNDQ6NTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIQTdwZ0JFUHp4aHJnR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind5UWVURjJTSE16b2NUVXBDTmMzOGJoYkxlbjU1SnFEaHpLT01VRDdaeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBzRDIrRzdVUWpRMHVraTFwL1VRWmZUYm12MVk4em1GL2cyRWV4T0F0VnFRVFMxL0dYUHZKRG9EckdMOVl1SmxneFZRUGNnOWtqWms1TEoveEhqL0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnekJUOXJuVDJvelFYUUFaemRqMllaK05QN1VzZkdIb0Y0LytRVWd2ZjVQUU40Nk1IdVloVnFQSDJwZlhuOER4U1U5bHp0MDgzdFI1QnpmVU93MFJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDk2NzgzODE0NDo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWtIa3hka2h6TTZIRTFLUWpYTi9HNFd5M3ArZVNhZzRjeWpqRkErMmNnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MTY2MTUzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlONyJ9| 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "on",
    OWNER_NAME: process.env.OWNER_NAME || "JAVA BOY MR2K",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "260967838144",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
