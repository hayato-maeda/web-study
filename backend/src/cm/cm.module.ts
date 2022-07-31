import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { UserInfoResolver } from './resolver/user.resolver';
import { UserInfoService } from './service/user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserInfoResolver, UserInfoService],
})
export class CmModule {}
