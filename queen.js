module.exports = {
    name: 'queen',
    description: "this is for only queens command",
    execute(message, args){
        if(message.member.roles.cache.has('774330720775831593')){
            message.channel.send('HI MOM, MEOW :heart:');
        } else {
            message.channel.send('MEOW, YOU ARE NOT MY MOM, MEOW :angry:');
        }
    }
}