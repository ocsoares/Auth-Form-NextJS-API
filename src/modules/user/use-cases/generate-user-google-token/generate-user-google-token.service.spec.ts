import { Test, TestingModule } from '@nestjs/testing';
import { GenerateUserGoogleTokenService } from './generate-user-google-token.service';

describe('GenerateUserGoogleTokenService', () => {
  let service: GenerateUserGoogleTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateUserGoogleTokenService],
    }).compile();

    service = module.get<GenerateUserGoogleTokenService>(GenerateUserGoogleTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
