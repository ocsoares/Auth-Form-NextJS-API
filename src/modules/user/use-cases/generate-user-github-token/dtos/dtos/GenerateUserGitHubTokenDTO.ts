import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateUserGitHubTokenDTO {
    @IsNotEmpty()
    @IsString()
    readonly githubToken: string;
}
