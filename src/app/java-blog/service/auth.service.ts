import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {AuthResponseModel} from '../model/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = '/api/authenticate';

  constructor(private http: HttpClient) {

  }

  authenticate(form: FormGroup) {
    this.http.post<AuthResponseModel>(this.authUrl, form.value).subscribe(
      authResponse => {
        const token = 'Bearer ' + authResponse.token;
        window.localStorage.setItem('token', token);
        console.log(token);
        location.reload();
      },
      (error: HttpErrorResponse) => {
        form.setErrors({badCredentials: true});
    }
    );
  }
}
