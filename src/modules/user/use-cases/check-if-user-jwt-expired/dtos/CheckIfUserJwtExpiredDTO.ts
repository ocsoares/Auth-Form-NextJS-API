import { IsJWT, IsNotEmpty } from 'class-validator';

export class CheckIfUserJwtExpiredDTO {
    @IsNotEmpty()
    @IsJWT()
    readonly jwt: string;
}
