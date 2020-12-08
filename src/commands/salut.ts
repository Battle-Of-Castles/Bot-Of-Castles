import { botCache, cache, sendMessage } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
    name: `salut`,
    description: "salut",
    botChannelPermissions: ["SEND_MESSAGES"],
    execute: function (message) {
      sendMessage(
        message.channelID,
        `Salut`
      );
    },
  });