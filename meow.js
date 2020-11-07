module.exports = {
    name: 'meow',
    description: "this is a meow command",
    execute(message, args){
        var meows_list = ["meow :eyes:", "MEOW :angry:", "meOW :wink:", "HUNGRY i mean MEOW :fork_and_knife:", "m e o w"];
        var meow_message = meows_list[Math.floor(Math.random() * meows_list.length)];
        message.channel.send(meow_message);
    }
}