import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entitys/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(userDto: UserDTO) {
    const newUser = this.userRepository.create(userDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOneBy({
      id: id,
    });

    if (user === null) {
      throw new BadRequestException('Пользователя не существует');
    }
  }
}
