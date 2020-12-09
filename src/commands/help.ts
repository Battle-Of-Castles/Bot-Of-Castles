import { botCache, sendMessage } from "../../deps.ts";
import { translate } from "../utils/i18next.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendResponse } from "../utils/helpers.ts";
import { configs } from "../../configs.ts";

createCommand({
  name: `help`,
  arguments: [
    {
      name: "command",
      type: "string",
      lowercase: true,
      required: false
    },
  ],
  execute: function (message, args: HelpArgs) {
    if (!args.command) {
      const embed = new Embed()
        .setAuthor('Liste des commandes disponibles', `https://cdn.discordapp.com/attachments/740957978152140901/785707600917823528/unknown.png`)
        .addField(`${configs.prefix}ping`, `Envoie un ping au serveur et donne sa latence`)
        .addField(`${configs.prefix}help <commande>`, `Affiche l'aide`)
        .addField(`${configs.prefix}classement <1v1 | 2v2 | 3v3>`, `Affiche le classement compétitif de BoC en fonction de la catégorie`)
        .addField(`${configs.prefix}salut`, `Répond un gentil message`)
        .addField(`${configs.prefix}stats`, `Affiche les statistiques du bot`)
        .setFooter(`Bot créé par Ben'#6226 | En cas de problème, merci d'envoyer un message sur le discord officiel de BoC.`, 'https://cdn.discordapp.com/avatars/340308017297883138/a4e32aa07dbe905e5f99230680d33c4e.png?size=128');
      return sendResponse(message, { embed });
    }

    const command = botCache.commands.get(args.command);
    if (!command) {
      return sendResponse(
        message,
        `Command ${args.command} not found.`,
      );
    }

    const description = translate(
      message.guildID!,
      `commands/${args.command}:DESCRIPTION`,
    );

    const embed = new Embed()
      .setAuthor(
        translate(
          message.guildID!,
          `commands/help:AUTHOR`,
          { name: args.command },
        ),
      )
      .setDescription(
        description === "DESCRIPTION" ? command.description : description,
      );

    return sendResponse(
      message,
      { embed },
    );
  },
});

interface HelpArgs {
  command?: string;
}
