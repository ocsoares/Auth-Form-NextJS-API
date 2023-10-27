import { Test, TestingModule } from '@nestjs/testing';
import { GenerateUserGithubTokenService } from './generate-user-github-token.service';

describe('GenerateUserGithubTokenService', () => {
  let service: GenerateUserGithubTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateUserGithubTokenService],
    }).compile();

    service = module.get<GenerateUserGithubTokenService>(GenerateUserGithubTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
