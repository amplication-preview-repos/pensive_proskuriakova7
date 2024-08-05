import { FriendshipWhereInput } from "./FriendshipWhereInput";
import { FriendshipOrderByInput } from "./FriendshipOrderByInput";

export type FriendshipFindManyArgs = {
  where?: FriendshipWhereInput;
  orderBy?: Array<FriendshipOrderByInput>;
  skip?: number;
  take?: number;
};
