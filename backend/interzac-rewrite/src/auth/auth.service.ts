import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UserRepository } from './users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
  async signIn(AuthCredentialsDto: AuthCredentialsDto): Promise<any> {
    const { username, password } = AuthCredentialsDto;
    const user = await this.usersRepository.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accesstoken = await this.jwtService.sign(payload);
      console.log(accesstoken);
      return { accesstoken };
    } else {
      throw new UnauthorizedException('please check your login credentials');
    }
  }
}
