import { BadRequestException } from '@nestjs/common';

export class UserPasswordDoNotMatchException extends BadRequestException {
    constructor() {
        super('The passwords do not match !');
    }
}
