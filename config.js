const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'VAJIRA-MD=tn9UCKhB#mfGhigIu9dtBm4c9r3RP-6dHmUDvJSbxQz0553cRbws',
LANG: 'EN'
};
