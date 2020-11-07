module.exports = {
    name: 'food',
    description: "this is the food command",
    execute(message, args){
        var foods_list = ["gimme food", ":fork_and_knife:", ":eyes:", "DID SOMEONE SAY FOOD? MEOW", "i wan foo"];
        var foods_message = foods_list[Math.floor(Math.random() * foods_list.length)];
        message.channel.send(foods_message);
    }
}