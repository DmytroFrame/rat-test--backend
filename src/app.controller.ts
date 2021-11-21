import { Body, Controller, Get, Post } from '@nestjs/common';
import { retry } from 'rxjs';
import { AppService } from './app.service';


let a = {}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body) {
    // console.log(body)
    a = body
    return {message: "thx for you resole"}
  }

  @Get()
  back() {
    return a
  }
}
