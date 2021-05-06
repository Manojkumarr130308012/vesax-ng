import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
  MicrosoftLoginProvider
} from 'angularx-social-login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from "../../../services/request.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  user: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;
  loginForm: FormGroup;

  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  editForm: FormGroup;
  register: FormGroup;
 

  error2='';
  error1='';
  constructor(private authService: SocialAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private request: RequestService
    ) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // signInWithAmazon(): void {
  //   this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  // }

  // signInWithVK(): void {
  //   this.authService.signIn(VKLoginProvider.PROVIDER_ID);
  // }

  // signInWithMicrosoft(): void {
  //   this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  onSubmit() {
    this.submitted = true;
    this.error2 = '';

    if (this.loginForm.invalid) {
      this.error2 = 'Username and Password not valid !';
      return;
    } else {
      const credentials = {
        phone: this.f.username.value,
        password: this.f.password.value
      };

      this.request.adminlogin(credentials).subscribe((response: any) => {
        if (response.msg == "username or password invalid") {
          console.log("something went wrong");
          this.router.navigate(["/login"]);
          // Swal.fire("Invalid Username And Password")
          return;
        }

        if (response.status === "0") {
          this.router.navigate(["/login"]);
         
          return;
        }
        console.log("response", response);
       
        this.router.navigate(["/pricing"]);
   
      });
    }
  }
}
