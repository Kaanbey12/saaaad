const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message, args, member) => {
  const yardım = new Discord.MessageEmbed()
    .setAuthor(`Hypex Yardım Menusü`, client.user.avatarURL())
    .setColor("0x36393F")
    .setThumbnail(client.user.avatarURL())
    .setDescription(
      `• Hey! <@${
        message.author.id
      }> beni kullandığın için teşekkür ederim!\n •  Prefixim: **!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${
        db.has(`üyelikk_${message.author.id}`, "üyelik")
          ? `**Gold üye!**`
          : `**Normal üye!**`
      }`
    )
    .addField(
      " • Kategoriler:",
      `> • !kullanıcı : **Kullanıcı yardım menüsünü gösterir.**\n > • !moderasyon : **Moderasyon yardım menüsünü gösterir.**\n > • !kayıtsistemi : ** Kayıt sistemi yardım menüsünü gösterir.**\n > • !korumasistemi : Koruma sistemi yardım menüsünü gösterir.**\n > • !logosistemi : ** Logo sistemi yardım menüsünü gösterir.**\n > • !çekilişsistemi : **Çekiliş sistemi yardım menüsünü gösterir.** Geliştiricim Program Değişti Bu Yüz den Hatalar Vardır!`
    )
    .addField(
      " • Güncelleme Notları:",
      "**Güncelleme v0.4:** Çekiliş sistemi eklendi!"
    )

    .addField(
      " • Linkler:",
      "• [Davet Et](https://discord.com/oauth2/authorize?client_id=849214555052834827&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/g7dWfHD6) • [Web Site](https://dcbotlar.xyz) •"`Geçersizdir!`
    )
    .setImage("")
    .setFooter("Asreaper", message.author.avatarURL())
    .setTimestamp();
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "westra",
  usage: "westra"
};
