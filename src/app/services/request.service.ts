import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private http: HttpClient,private request: RequestService) {
   
  }
  url: string;
  endPoint = 'https://tamilrise.herokuapp.com';

 
  public adminlogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint}/user/login`;
    return this.http.post(this.url, credentials);
  }

  }






