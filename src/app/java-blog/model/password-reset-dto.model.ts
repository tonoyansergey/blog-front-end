export class PasswordResetDtoModel {

  private password: string;
  private token: string;


  constructor(password: string, token: string) {
    this.password = password;
    this.token = token;
  }
}
