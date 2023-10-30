import { IsJWT, IsNotEmpty } from 'class-validator';

export class GenerateUserGoogleTokenDTO {
    @IsNotEmpty()
    @IsJWT()
    readonly googleJWT: string;
}