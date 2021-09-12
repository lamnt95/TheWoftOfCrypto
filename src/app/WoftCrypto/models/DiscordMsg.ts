import { DiscordAuthor } from "./DiscordAuthor";

export interface DiscordMsg {
  id: any,
  content: any,
  channel_id: any,
  author: DiscordAuthor,
  timestamp: any,
  referenced_message: DiscordMsg
}