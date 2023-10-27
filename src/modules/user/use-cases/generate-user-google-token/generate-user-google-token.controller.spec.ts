import { Test, TestingModule } from '@nestjs/testing';
import { GenerateUserGoogleTokenController } from './generate-user-google-token.controller';

describe('GenerateUserGoogleTokenController', () => {
  let controller: GenerateUserGoogleTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateUserGoogleTokenController],
    }).compile();

    controller = module.get<GenerateUserGoogleTokenController>(GenerateUserGoogleTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
