import { botCache, cache, sendMessage } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
    name: `ping`,
    description: "commands/ping:DESCRIPTION",
    botChannelPermissions: ["SEND_MESSAGES"],
    execute: function (message) {
      sendMessage(
        message.channelID,
        `Salut`
      );
    },
  });