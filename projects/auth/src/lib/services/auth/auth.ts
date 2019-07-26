export abstract class Auth {

  protected authenticated = false;
  protected accessToken = '';

  public abstract isAuthenticated(): boolean;

  public abstract getAccessToken(): string;

  public abstract loginWithRedirect();

  public abstract async handleRedirectCallback(): Promise<void>;

  public abstract logout(returnUrl: string);

}