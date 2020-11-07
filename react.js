module.exports = {
    name: 'react',
    description: "this is a react command",
    execute(message, args){
        var cat_reacts = ['🐱', '🍴', '😠', '😼', '💯'];
        var reaction = cat_reacts[Math.floor(Math.random() * cat_reacts.length)];
        message.react(reaction);
    }
}