var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			case 'compile_rocks':
				bot.sendMessage({
					to: channelID,
					message: 'Dido!'
				});
			break;
			case 'hello':
				bot.sendMessage({
					to: channelID,
					message:"<@!" + userID + "> " + "Hello!"
				});
			break;
			case 'date':
				bot.sendMessage({
					to: channelID,
					message: (new Date().getUTCMonth() + 1) + '/' + new Date().getUTCDate() + '/' + new Date().getUTCFullYear()
				});
			break;
			case 'time':
				bot.sendMessage({
					to: channelID,
					message: (new Date().getUTCHours() - 5) % 24 + ":" + new Date().getUTCMinutes() + ":" + new Date().getUTCSeconds()
				})
			break;
			case 'timendate':
				bot.sendMessage({
					to: channelID,
					message: (new Date().getUTCHours() - 5) % 24 + ":" + new Date().getUTCMinutes() + ":" + new Date().getUTCSeconds() + " "
					+ (new Date().getUTCMonth() + 1) + '/' + new Date().getUTCDate() + '/' + new Date().getUTCFullYear() 
					
				});
			break;
			case 'datentime':
			bot.sendMessage({
					to: channelID,
					message: (new Date().getUTCMonth() + 1) + '/' + new Date().getUTCDate() + '/' + new Date().getUTCFullYear() + " " 
					+ (new Date().getUTCHours() - 5) % 24 + ":" + new Date().getUTCMinutes() + ":" + new Date().getUTCSeconds()
				});
			break;
			case 'commands':
			bot.sendMessage({
				to: channelID,
				message: "List of commands: "
				+ "\nping\tpong"
				+ "\nhello\t@yourName"
				+ "\ndate\tgives date"
				+"\ntime\tgives time"
				+ "\ndatentime\tgives date/time"
				+ "\ntimendate\t gives time/date"
				+ "\ncommands\tgives a list of commands"
			})
			break;
            // Just add any case commands if you want to..
         }
     }
});