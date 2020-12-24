import Client, { sendMessage, delay } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name:'profile',
    execute: async (message, guild) => {

        const memberID = message.author.id
        const memberName = message.author.username
        const avatarHash = message.author.avatar
        const avatarUrl = `https://cdn.discordapp.com/avatars/${memberID}/${avatarHash}.png`
        const url = `https://www.battleofcastles.com/api/player-from-discord-id/${memberID}`
        const result = await fetch(url).then((res) => res.json())
    
            const embed = new Embed()
                .setAuthor(memberName, avatarUrl)
                .setColor('random')
                .addField('Pseudo BoC', `${result['pseudo']}`)
                .addField('Classement', `${result['ranking']}`, true)
                .addField('Nombre de points', `${result['points']}`, true)
                .setFooter(`Si le classement et les points sont en undefined c'est que vous n'êtes pas classé.\nPublicID : ${result['publicId']}`)
            return sendMessage(message.channelID, { embed })
        }
})