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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './notes/notes.component';
import { AddnewnotesComponent } from './addnewnotes/addnewnotes.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'bingwebsearch', component: BingwebsearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path:'savedbingsearch',component:SavedbingsearchComponent},
  { path:'notes',component:NotesComponent},
  { path:'addnewnotes',component:AddnewnotesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    BingwebsearchComponent,
    SavedbingsearchComponent,
    NotesComponent,
    AddnewnotesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
