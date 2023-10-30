import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateUserGitHubTokenDTO {
    @ApiProperty({
        type: 'string',
        example: 'uho_gPjXmNZziM8kAl2FRhWYGLLC0Pq1dk3TVnDX',
    })
    @IsNotEmpty()
    @IsString()
    readonly githubToken: string;
}
