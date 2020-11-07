module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, commands){
        System.out.println(Arrays.toString(commands));
    }
}