module.exports = {
    name: 'king',
    description: "this is for only kings command",
    execute(message, args){
        if(message.member.roles.cache.has('774092599022583821')){
            message.channel.send('i meow for my king, MEOW');
        } else {
            message.channel.send('MEOW, YOU ARE NOT KING WORTHY, MEOW :angry:')
            //THIS ADDS THEM TO THE ROLE:
            //message.member.roles.add(774092599022583821').catch(console.error);
        }
    }
}