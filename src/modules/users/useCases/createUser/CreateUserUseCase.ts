import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const registeredEmail = this.usersRepository.findByEmail(email);

    if (registeredEmail) {
      throw new Error("Email already Registered");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
