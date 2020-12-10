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

        for (var i = 0; i < result.length; i++){
            if (result[1].data[i].pseudo == player){
                console.log('Oui')
            } 
        }
    }



})




interface JoueurArgs {
    joueur: string;
}