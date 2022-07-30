import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { userinfo } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async signupUser(@Body() userData: { userid: string }): Promise<userinfo> {
    const test = this.userService.findUnique(userData);
    return test;
  }
}
