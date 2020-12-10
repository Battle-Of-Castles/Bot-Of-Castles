import Client, { sendMessage, delay, addReaction } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name: `nav`,
    guildOnly: true,

    execute: async (message, args, guild) => {

            const embed = new Embed()
                .setDescription('page1')
        
            return sendMessage(message.channelID, { embed })

            await addReaction(message.channelID, message.id, '\u23ee')
            await addReaction(message.channelID, message.id, '\u25c0')
            await addReaction(message.channelID, message.id, '\u25b6')
            await addReaction(message.channelID, message.id, '\u23ed')

    }
})