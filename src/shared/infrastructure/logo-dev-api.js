const logoApiUrl="https://img.logo.dev";
const apiKey="pk_IdGrHo4cQCyE1YsLIsDQnQ";
//sk_KLnGrhbmRoaHO4I5rUeIrw

export class LogoDevApi {
    getUrlToLogo = source => `${logoApiUrl}/${new URL(source.url.toString()).host}?token=${apiKey}`;
}