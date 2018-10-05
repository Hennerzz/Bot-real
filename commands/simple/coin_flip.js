const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
     constructor(client)
     {
         super(client,{
             name: 'flip',
             group: 'simple',
             memberName: ' flip',
             description: 'Flips a coin, landing on either Heads or Tails'
         });
     }

     async run(message, args)
     {
         var chance = Math.floor(Math.random() * 2);
         if(chance == 1)
         {
             message.reply("Heads!");
         }
         else
         {
             message.reply("Tails!");
         }
     }
}

module.exports = CoinFlipCommand;