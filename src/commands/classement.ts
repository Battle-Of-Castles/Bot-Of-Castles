import Client, { sendMessage, delay } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name: `classement`,
    guildOnly: true,
    botChannelPermissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    execute: async (message, guild) => {
        const url = `https://www.battleofcastles.com/api/ranking`
        const result = await fetch(url).then((res) => res.json());
        const iconURL = 'https://cdn.discordapp.com/attachments/740957978152140901/785707502654324766/a7cb1ea4de4f89cb6f3e5492fc67e14d.png'
            const embed = new Embed()
            .setColor("random")
            .setAuthor('Top 5', iconURL)
            .addField("🥇 Premier :", result['solo']['data'][0].pseudo + " **" + result['solo']['data'][0].points + "** pts")
            .addField("🥈 Deuxième :", result['solo']['data'][1].pseudo + " **" + result['solo']['data'][1].points + "** pts")
            .addField("🥉 Troisième :", result['solo']['data'][2].pseudo + " **" + result['solo']['data'][2].points + "** pts")
            .addField("Quatrième :", result['solo']['data'][3].pseudo + " **" + result['solo']['data'][3].points + "** pts")
            .addField("Cinquième :", result['solo']['data'][4].pseudo + " **" + result['solo']['data'][4].points + "** pts")
            .setFooter(`Classement créé avec : ${url}`)
            .setTimestamp();
        return sendMessage(message.channelID, { embed });
        }
    })