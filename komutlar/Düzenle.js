const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**BİR BOT OLARAK @eFe.#7012  Nin Amına Koyayım**")
        .setColor("RANDOM")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'efeninamk',
  description: 'Serverin iconunu gösterir',
  usage: 'Efeninamk'
};
