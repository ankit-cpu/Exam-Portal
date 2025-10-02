import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { SignupComponent } from './app/pages/signup/signup.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/pages/login/login.component';
import { HomeComponent } from './app/pages/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent},
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent}
    ]),
  ],
}).catch(err => console.error(err));