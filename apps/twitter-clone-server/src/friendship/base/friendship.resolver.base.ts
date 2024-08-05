/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Friendship } from "./Friendship";
import { FriendshipCountArgs } from "./FriendshipCountArgs";
import { FriendshipFindManyArgs } from "./FriendshipFindManyArgs";
import { FriendshipFindUniqueArgs } from "./FriendshipFindUniqueArgs";
import { DeleteFriendshipArgs } from "./DeleteFriendshipArgs";
import { FriendshipService } from "../friendship.service";
@graphql.Resolver(() => Friendship)
export class FriendshipResolverBase {
  constructor(protected readonly service: FriendshipService) {}

  async _friendshipsMeta(
    @graphql.Args() args: FriendshipCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Friendship])
  async friendships(
    @graphql.Args() args: FriendshipFindManyArgs
  ): Promise<Friendship[]> {
    return this.service.friendships(args);
  }

  @graphql.Query(() => Friendship, { nullable: true })
  async friendship(
    @graphql.Args() args: FriendshipFindUniqueArgs
  ): Promise<Friendship | null> {
    const result = await this.service.friendship(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Friendship)
  async deleteFriendship(
    @graphql.Args() args: DeleteFriendshipArgs
  ): Promise<Friendship | null> {
    try {
      return await this.service.deleteFriendship(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}