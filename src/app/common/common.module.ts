import { DashBoardService } from './services/dashBoard.service';
import { UserService } from './services/user.service';
import { NoteService } from './services/notes.service';
import { BingWebSearchServices } from './services/bingWebSearch.service';
import { SaveYourSearch } from './services/saveYourSearch.service';
import { NgModule } from '@angular/core';
import { CognitiveServices } from './services/cognitive.service';
import { AzureHttpClient } from './services/azureHttpClient';


import { SocialLoginModule, AuthServiceConfig ,AuthService} from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

export function socialConfigs() {  
const config = new AuthServiceConfig(  
  [  
    {  
      id: FacebookLoginProvider.PROVIDER_ID,  
      provider: new FacebookLoginProvider('1675560082594025')  
    },  
    {  
      id: GoogleLoginProvider.PROVIDER_ID,  
      provider: new GoogleLoginProvider('1005968250740-8pg5p1t3bietuj5jugo20gv51hcsfjts.apps.googleusercontent.com')  
    }  
  ]  
);  
return config;  
}

// import { CommonModule } from '@angular/common';

@NgModule({
  providers: [AzureHttpClient, CognitiveServices, SaveYourSearch,BingWebSearchServices,NoteService,UserService,DashBoardService,
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  
  ]
})
export class CommonModule { }
