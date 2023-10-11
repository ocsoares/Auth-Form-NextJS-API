import { ConflictException } from '@nestjs/common';

export class UserAlreadyExistsByEmailException extends ConflictException {
    constructor() {
        super('Already exists a user registered with this email !');
    }
}
