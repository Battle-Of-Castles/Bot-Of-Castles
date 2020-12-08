import { sendMessage, delay } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name: `top5`,
    guildOnly: true,
    botChannelPermissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    execute: async (message, args: ClassArgs) => {
        const url = `https://www.battleofcastles.com/api/ranking`
        const result = await fetch(url).then((res) => res.json());

        console.log(result[1].data[0].pseudo)
        
        const embed = new Embed()
            .setColor("random")
            .setDescription('Voici le top 5 actuel (1v1)')
            .addField("Top 1 :", result[1].data[0].pseudo)
            .addField("Top 2 :", result[1].data[1].pseudo)
            .addField("Top 3 :", result[1].data[2].pseudo)
            .addField("Top 4 :", result[1].data[3].pseudo)
            .addField("Top 5 :", result[1].data[4].pseudo)
            .setFooter(`Classement créé avec : ${url}`)
            .setTimestamp();

        return sendMessage(message.channelID, { embed });
    },

});

interface ClassArgs {
    type: string;
}