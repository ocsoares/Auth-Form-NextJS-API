import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class GenerateUserGoogleTokenDTO {
    @ApiProperty({
        type: 'string',
        example:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwNmFmMGI2OGEyMTE5ZDY5MmNhYzRhYmY0MTVmZjM3ODgxMzZmNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MzI1OTI4OTc4MTItZ251bjh1dHFvbm9y.NAStbHoKaGTPzY1bqmmZfSOcqdACgjNGDxXdtsck_9jPrFl_fWWQr7we_Gsq2sinyDYqyuEzvaAO9NZnJfR01ZcDLJrAe1juiEKyZ7trF-',
    })
    @IsNotEmpty()
    @IsJWT()
    readonly googleJWT: string;
}
