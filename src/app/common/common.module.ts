import { UserService } from './services/user.service';
import { NoteService } from './services/notes.service';
import { BingWebSearchServices } from './services/bingWebSearch.service';
import { SaveYourSearch } from './services/saveYourSearch.service';
import { NgModule } from '@angular/core';
import { CognitiveServices } from './services/cognitive.service';
import { AzureHttpClient } from './services/azureHttpClient';



// import { CommonModule } from '@angular/common';

@NgModule({
  providers: [AzureHttpClient, CognitiveServices, SaveYourSearch,BingWebSearchServices,NoteService,UserService]
})
export class CommonModule { }
