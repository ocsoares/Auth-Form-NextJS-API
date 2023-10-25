import { Test, TestingModule } from '@nestjs/testing';
import { CheckIfUserJwtExpiredService } from './check-if-user-jwt-expired.service';

describe('CheckIfUserJwtExpiredService', () => {
  let service: CheckIfUserJwtExpiredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckIfUserJwtExpiredService],
    }).compile();

    service = module.get<CheckIfUserJwtExpiredService>(CheckIfUserJwtExpiredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
