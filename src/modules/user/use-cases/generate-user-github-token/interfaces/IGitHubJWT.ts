export interface IGitHubJWT {
    readonly login: string;
    readonly id: string;
    readonly html_url: string;
    readonly name: string;
    readonly location: string;
    readonly email: string;
    readonly bio: string;
    readonly iat?: string;
    readonly exp?: number;
}
