const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = "NDk3NDYwNTA4ODgyODk0ODY4.Dpf-Ow.a6TanVQDTs-IMQYod8tHt64OAtI"

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
    if(message.content == 'Join')
    {
        message.member.send(message.author + " Welcome to the Hennerz Hangout");
        let memberRole = message.member.guild.roles.find("name", "Member");
        message.member.addRole(memberRole);     
    }
});

bot.on('ready',function(){
    console.log("Ready");
    bot.user.setGame("wassup")

});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the Server");
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
})


bot.login(TOKEN);