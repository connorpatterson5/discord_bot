const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Cat Bot is online');
    client.user.setStatus('online');
    client.user.setActivity('birds', { type: 'WATCHING' });
});

client.on('message', message => {
   if(!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   var commandsList = ['ping', 'unus', 'meow', 'hug', 'react', 'food'];

   if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
   } else if(command == 'unus'){
       client.commands.get('unus').execute(message, args);
   } else if(command == 'meow'){
       client.commands.get('meow').execute(message, args);
   } else if(command == 'hug'){
       client.commands.get('hug').execute(message, args);
   } else if(command == 'king'){
       client.commands.get('king').execute(message, args);
   } else if(command == 'react'){
       client.commands.get('react').execute(message, args);
   } else if(command == 'queen'){
       client.commands.get('queen').execute(message, args);
   } else if(command == 'food'){
       client.commands.get('food').execute(message, args);
   } else if(command == 'come'){
       message.channel.send('no');
   } else if(command == 'help'){
       client.commands.get('help').execute(message, args, commandsList);
   }
});















client.login('Nzc0MDgzMzg4ODk4Mjc5NDQ0.X6SnVQ.FnpdUXw3fK_3uONhAQfflQh8NIQ');