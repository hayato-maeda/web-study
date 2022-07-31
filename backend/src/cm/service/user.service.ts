import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserInfoService {
  constructor(private prisma: PrismaService) {}

  async findUnique(args: Prisma.userinfoFindUniqueArgs) {
    return this.prisma.userinfo.findUnique(args);
  }
}
