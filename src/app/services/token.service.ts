import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NOMBRES_COMPLETOS_KEY = 'AuthNombresCompletos';
const ID_KEY = 'AuthId';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor() {}

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY)!;
  }

  public setId(id: string): void {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.setItem(ID_KEY, id);
  }

  public getId(): string {
    return localStorage.getItem(ID_KEY)!;
  }

  public setUserName(userName: string): void {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return localStorage.getItem(USERNAME_KEY)!;
  }

  public setNombresCompletos(nomCompleto: string): void {
    window.localStorage.removeItem(NOMBRES_COMPLETOS_KEY);
    window.localStorage.setItem(NOMBRES_COMPLETOS_KEY, nomCompleto);
  }

  public getNombresCompletos(): string {
    return localStorage.getItem(NOMBRES_COMPLETOS_KEY)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (localStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)!).forEach(
        (authority: any) => {
          this.roles.push(authority.authority);
        }
      );
    }
    return this.roles;
  }

  public logOut(): void {
    window.localStorage.clear();
  }
}
