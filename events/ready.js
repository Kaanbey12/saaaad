const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"Hypexle Sonsuza Dek",
"Hazır Ve El YapımııAltyapılarımızı Size Sunuyoruz!",
"Prefix -!-"z "
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/mbasreaper' })
}, 5000);
    console.log(`Asreaper başarıyla giriş yaptı.`);
}