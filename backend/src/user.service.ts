import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUnique(args: Prisma.userinfoWhereUniqueInput) {
    return this.prisma.userinfo.findUnique({
      where: args,
    });
  }
}
