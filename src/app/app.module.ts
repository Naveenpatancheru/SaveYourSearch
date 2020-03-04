import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { BingwebsearchComponent } from './bingwebsearch/bingwebsearch/bingwebsearch.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'bingwebsearch', component: BingwebsearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    BingwebsearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
