import { Test, TestingModule } from '@nestjs/testing';
import { CheckIfUserJwtExpiredController } from './check-if-user-jwt-expired.controller';

describe('CheckIfUserJwtExpiredController', () => {
  let controller: CheckIfUserJwtExpiredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckIfUserJwtExpiredController],
    }).compile();

    controller = module.get<CheckIfUserJwtExpiredController>(CheckIfUserJwtExpiredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
