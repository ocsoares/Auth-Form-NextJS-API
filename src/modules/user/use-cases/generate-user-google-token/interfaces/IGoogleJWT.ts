export interface IGoogleJWT {
    readonly iss: string;
    readonly email: string;
    readonly email_verified: boolean;
    readonly name: string;
    readonly picture: string;
    readonly given_name: string;
    readonly locale: string;
    readonly iat?: string;
    readonly exp?: number;
}
