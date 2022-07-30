import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { userinfo, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    userWhereUniqueInput: Prisma.userinfoWhereUniqueInput,
  ): Promise<userinfo | null> {
    return this.prisma.userinfo.findUnique({
      where: userWhereUniqueInput,
    });
  }
}
