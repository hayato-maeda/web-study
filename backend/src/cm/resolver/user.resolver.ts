import {
  userinfo,
  DeleteOneuserinfoArgs,
  FindUniqueuserinfoArgs,
  UpdateOneuserinfoArgs,
} from 'src/@generated/prisma-nestjs-graphql';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { UserInfoService } from '../service/user.service';

@Resolver()
export class UserInfoResolver {
  constructor(private readonly service: UserInfoService) {}

  @Query(() => userinfo, { name: 'GetUserInfo' })
  async getUserInfo(@Args() args: FindUniqueuserinfoArgs) {
    return this.service.findUnique(args);
  }

  @Mutation(() => userinfo, { name: 'UpdateUserInfo' })
  async updateUserInfo(@Args() args: UpdateOneuserinfoArgs) {
    return this.service.update(args);
  }

  @Mutation(() => userinfo, { name: 'DeleteUserInfo' })
  async deleteUserInfo(@Args() args: DeleteOneuserinfoArgs) {
    return this.service.delete(args);
  }
}
