import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class CheckIfUserJwtExpiredDTO {
    @ApiProperty({
        type: 'string',
        example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJlbWFpbCI6Indxc3pwMTJAZ21haWwu.J8vBBVp4D4NO96il-2NuX9RAowuK61Cw-H2VFUhHNrQ',
    })
    @IsNotEmpty()
    @IsJWT()
    readonly jwt: string;
}
