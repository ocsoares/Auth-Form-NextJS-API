import { Test, TestingModule } from '@nestjs/testing';
import { GenerateUserGithubTokenController } from './generate-user-github-token.controller';

describe('GenerateUserGithubTokenController', () => {
  let controller: GenerateUserGithubTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateUserGithubTokenController],
    }).compile();

    controller = module.get<GenerateUserGithubTokenController>(GenerateUserGithubTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
