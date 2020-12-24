import Client, { sendMessage, delay } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
    name: `joueur`,
    guildOnly: true,
    arguments: [
        {
            name: "joueur",
            type: "string",
            missing: (message) => {
                sendMessage(message.channelID, "Merci de préciser un joueur");            }
        },
    ],

    execute: async (message, args: JoueurArgs, guild) => {
        const url = `https://www.battleofcastles.com/api/ranking`
        const result = await fetch(url).then((res) => res.json());

        var player = args.joueur;
        const iconURL = 'https://cdn.discordapp.com/attachments/740957978152140901/785707502654324766/a7cb1ea4de4f89cb6f3e5492fc67e14d.png'
        const embed = new Embed()
            .setAuthor("Informations d'un joueur", iconURL)
            .setTitle(player)
            .setColor('random')

            var classement = 'N/A'
            var points = 'N/A'

            const found = result['solo']['data'].find(e => e.pseudo === player)
            if (found) {
                classement = found['ranking']
                points = found['points']
            }

            embed.addField('Classement', `${classement}`)
            embed.addField('Points', `${points}`)
        

        return sendMessage(message.channelID, { embed })
    }
})

interface JoueurArgs {
    joueur: string;
}

        /*const modes = [1, 2, 3]

        modes.forEach((type) => {
            const elem = result[type]
            if (elem.data.length === 0) {
                return
            }
            var classement = 'N/A'
            var points = 'N/A'

            const found = elem.data.find(e => e.pseudo === player)
            if (found) {
                classement = elem.data.indexOf(found) + 1
                points = found['points' + type]
            }
            
            embed.addField(`${type}v${type}`, `Classement : **${classement}**\n Points : **${points}**`)
        })*/