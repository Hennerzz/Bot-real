const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Leaves the voice channel of the commander'
        });
    }
    async run(message, args)
    {
       if(message.guild.voiceConnection)
       {
           message.guild.voiceConnection.disconnect();
       }
       else
       {
           message.reply("I must be in the voice channel to be banished!")
       }
            
    }
}

module.exports = LeaveChannelCommand;