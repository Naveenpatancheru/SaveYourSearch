// import { DashBoardService } from './common/services/dashBoard.service';
import { AuthService } from './auth/auth.service';
import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { BingwebsearchComponent } from './bingwebsearch/bingwebsearch/bingwebsearch.component';
import { SavedbingsearchComponent } from './bingwebsearch/savedbingsearch/savedbingsearch.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './notes/notes.component';
import { AddnewnotesComponent } from './addnewnotes/addnewnotes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './auth/auth.guard';

import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

// import { SocialLoginModule, AuthServiceConfig} from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

 import {ChartsModule } from "ng2-charts";

// export function socialConfigs() {  
//   const config = new AuthServiceConfig(  
//     [  
//       {  
//         id: FacebookLoginProvider.PROVIDER_ID,  
//         provider: new FacebookLoginProvider('1675560082594025')  
//       },  
//       {  
//         id: GoogleLoginProvider.PROVIDER_ID,  
//         provider: new GoogleLoginProvider('1005968250740-8pg5p1t3bietuj5jugo20gv51hcsfjts.apps.googleusercontent.com')  
//       }  
//     ]  
//   );  
//   return config;  
//   }


const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'gallery', component: GalleryComponent },
  // { path: 'bingwebsearch', component: BingwebsearchComponent, canActivate:[AuthGuard] },
  { path: 'bingwebsearch', component: BingwebsearchComponent},
  // { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path:'savedbingsearch',component:SavedbingsearchComponent, canActivate:[AuthGuard]},
  { path:'notes',component:NotesComponent, canActivate:[AuthGuard]},
  { path:'addnewnotes',component:AddnewnotesComponent},
  { path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path : '', redirectTo:'/login', pathMatch : 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    BingwebsearchComponent,
    SavedbingsearchComponent,
    NotesComponent,
    AddnewnotesComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LoginregisterComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
     ChartsModule,
     HttpClientModule,
    // AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' }, AuthGuard,AuthService]
  // {  
  //   provide: AuthServiceConfig,  
  //   useFactory: socialConfigs  
  // }  
,
  bootstrap: [AppComponent]
})
export class AppModule { }
