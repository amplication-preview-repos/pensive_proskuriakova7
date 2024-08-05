import { Module } from "@nestjs/common";
import { FriendshipModuleBase } from "./base/friendship.module.base";
import { FriendshipService } from "./friendship.service";
import { FriendshipController } from "./friendship.controller";
import { FriendshipResolver } from "./friendship.resolver";

@Module({
  imports: [FriendshipModuleBase],
  controllers: [FriendshipController],
  providers: [FriendshipService, FriendshipResolver],
  exports: [FriendshipService],
})
export class FriendshipModule {}
