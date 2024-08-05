import { Friendship as TFriendship } from "../api/friendship/Friendship";

export const FRIENDSHIP_TITLE_FIELD = "id";

export const FriendshipTitle = (record: TFriendship): string => {
  return record.id?.toString() || String(record.id);
};
