import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FriendshipServiceBase } from "./base/friendship.service.base";

@Injectable()
export class FriendshipService extends FriendshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
