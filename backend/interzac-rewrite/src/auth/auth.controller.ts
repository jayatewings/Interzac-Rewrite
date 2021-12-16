import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authservice.signup(authCredentialsDto);
  }
  @Post('/signin')
  signin(@Body() authCredentialsDto:AuthCredentialsDto):Promise<void>
  {
   return this.authservice.signIn(authCredentialsDto)   
  }
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req)
  {
  console.log(req)
  }
}
