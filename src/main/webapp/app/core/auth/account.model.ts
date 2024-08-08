export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string | null,
    public langKey: string,
    public lastName: string | null,
    public login: string,
    public imageUrl: string | null,
    public cardNumber: string | null, // New attribute
    public totalBalance: number | null, // New attribute
    public actualBalance: number | null, // New attribute
    public phone: string | null, // New attribute
  ) {}
}
