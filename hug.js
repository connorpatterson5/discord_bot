module.exports = {
    name: 'hug',
    description: "this is the hug command",
    execute(message, args){
        let targetMember = message.mentions.members.first();
        if(!targetMember) return message.reply('you need to tag a user in order to hug them!!');
        let str = `<@${targetMember.user.id}> you just got a hug  https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134`;
       
        message.channel.send(str).then(sentEmbed => {
           sentEmbed.react("❤️");
           sentEmbed.react("😻");
           sentEmbed.react("🥰");
       });
    }
}