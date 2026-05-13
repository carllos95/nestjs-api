import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let authController: AuthController;

  const authServiceMock = {
    register: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should create user', async () => {
    const dto = {
      name: 'Carlos',
      email: 'carlos@email.com',
      password: '123456',
    };

    const userCreated = {
      id: 1,
      name: 'Carlos',
      email: 'carlos@email.com',
    };

    authServiceMock.register.mockResolvedValue(userCreated);

    const response = await authController.create(dto);

    expect(authServiceMock.register).toHaveBeenCalledWith(dto);

    expect(response).toEqual({
      message: 'Usuário criado com sucesso!',
      user: userCreated,
    });
  });
});
