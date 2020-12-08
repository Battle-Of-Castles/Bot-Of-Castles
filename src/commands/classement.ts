import Client, { sendMessage, delay } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name: `classement`,
    guildOnly: true,
    arguments: [
        {
            name: "type",
            type: "string",
            required: false
        }
    ],
    botChannelPermissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    execute: async (message, args, guild) => {
        const url = `https://www.battleofcastles.com/api/ranking`
        const result = await fetch(url).then((res) => res.json());
        const memberID = message.mentions[0] || message.author.id;
        const member = guild?.members.get(memberID);
        const iconURL = 'https://cdn.discordapp.com/attachments/740957978152140901/785707502654324766/a7cb1ea4de4f89cb6f3e5492fc67e14d.png'

        if (!args.type) {
            const embed = new Embed()
                .setColor("random")
                .setAuthor('Classement général', iconURL)
                .setTitle('Voici le top 3 dans les 3 catégories')
                .addField("1 vs 1 : ", '🥇 ' + result[1].data[0].pseudo + " **" + result[1].data[0].points1 +"** pts " + '🥈 ' + result[1].data[1].pseudo + " **" + result[1].data[1].points1 +"** pts " + "🥉 " + result[1].data[2].pseudo + " **" + result[1].data[2].points1 + "** pts " )
                .addField("2 vs 2 : ", '🥇 ' + result[2].data[0].pseudo + " **" + result[2].data[0].points2 +"** pts " + '🥈 ' + result[2].data[1].pseudo + " **" + result[2].data[1].points2 +"** pts " + "🥉 " + result[2].data[2].pseudo + " **" + result[2].data[2].points2 + "** pts " )
                .addField("3 vs 3 : ", '🥇 ' + result[3].data[0].pseudo + " **" + result[3].data[0].points3 +"** pts " + '🥈 ' + result[3].data[1].pseudo + " **" + result[3].data[1].points3 +"** pts " + "🥉 " + result[3].data[2].pseudo + " **" + result[3].data[2].points3 + "** pts " )
                .setFooter(`Classement créé avec : ${url}`)
                .setTimestamp();
            return sendMessage(message.channelID, { embed });
        } 
        if (args.type === '1v1'){
            const embed = new Embed()
            .setColor("random")
            .setTitle('Voici le top 5 actuel en 1v1')
            .addField("🥇 Premier :", result[1].data[0].pseudo + " **" + result[1].data[0].points1 + "** pts")
            .addField("🥈 Deuxième :", result[1].data[1].pseudo + " **" + result[1].data[1].points1 + "** pts")
            .addField("🥉 Troisième :", result[1].data[2].pseudo + " **" + result[1].data[2].points1 + "** pts")
            .addField("Quatrième :", result[1].data[3].pseudo + " **" + result[1].data[3].points1 + "** pts")
            .addField("Cinquième :", result[1].data[4].pseudo + " **" +  result[1].data[4].points1 + "** pts")
            .setFooter(`Classement créé avec : ${url}`)
            .setTimestamp();
        return sendMessage(message.channelID, { embed });
        } else if (args.type === '2v2'){
            const embed = new Embed()
            .setColor("random")
            .setTitle('Voici le top 5 actuel en 2v2')
            .addField("🥇 Premier :", result[2].data[0].pseudo + " **" + result[2].data[0].points2 + "** pts")
            .addField("🥈 Deuxième :", result[2].data[1].pseudo + " **" + result[2].data[1].points2 + "** pts")
            .addField("🥉 Troisième :", result[2].data[2].pseudo + " **" + result[2].data[2].points2 + "** pts")
            .addField("Quatrième :", result[2].data[3].pseudo + " **" + result[2].data[3].points2 + "** pts")
            .addField("Cinquième :", result[2].data[4].pseudo + " **" +  result[2].data[4].points2 + "** pts")
            .setFooter(`Classement créé avec : ${url}`)
            .setTimestamp();
        return sendMessage(message.channelID, { embed });
        } else if (args.type === '3v3') {
            const embed = new Embed()
            .setColor("random")
            .setTitle('Voici le top 5 actuel en 3v3')
            .addField("🥇 Premier :", result[3].data[0].pseudo + " **" + result[3].data[0].points3 + "** pts")
            .addField("🥈 Deuxième :", result[3].data[1].pseudo + " **" + result[3].data[1].points3 + "** pts")
            .addField("🥉 Troisième :", result[3].data[2].pseudo + " **" + result[3].data[2].points3 + "** pts")
            .addField("Quatrième :", result[3].data[3].pseudo + " **" + result[3].data[3].points3 + "** pts")
            .addField("Cinquième :", result[3].data[4].pseudo + " **" + result[3].data[4].points3 + "** pts")
            .setFooter(`Classement créé avec : ${url}`)
            .setTimestamp();
        return sendMessage(message.channelID, { embed });
        } else {
            sendMessage(message.channelID,'Merci de préciser un argument valide : **1v1** | **2v2** | **3v3**')
        }
    },
});
interface ClassArgs {
    type: string;
}