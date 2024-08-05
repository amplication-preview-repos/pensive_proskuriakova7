import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FriendshipService } from "./friendship.service";
import { FriendshipControllerBase } from "./base/friendship.controller.base";

@swagger.ApiTags("friendships")
@common.Controller("friendships")
export class FriendshipController extends FriendshipControllerBase {
  constructor(protected readonly service: FriendshipService) {
    super(service);
  }
}
