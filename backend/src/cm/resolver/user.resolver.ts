import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindUniqueuserinfoArgs, userinfo } from 'src/@generated/prisma-nestjs-graphql';
import { UserInfoService } from '../service/user.service';

@Resolver()
export class UserInfoResolver {
  constructor(private readonly service: UserInfoService) {}

  @Query(() => userinfo, { name: 'GetUserInfo' })
  async getUserInfo(@Args() args: FindUniqueuserinfoArgs) {
    return this.service.findUnique(args);
  }
}
