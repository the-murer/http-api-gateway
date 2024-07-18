import { UserService } from './user.service';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserService()).toBeDefined();
  });
});
