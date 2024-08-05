import * as graphql from "@nestjs/graphql";
import { FriendshipResolverBase } from "./base/friendship.resolver.base";
import { Friendship } from "./base/Friendship";
import { FriendshipService } from "./friendship.service";

@graphql.Resolver(() => Friendship)
export class FriendshipResolver extends FriendshipResolverBase {
  constructor(protected readonly service: FriendshipService) {
    super(service);
  }
}
