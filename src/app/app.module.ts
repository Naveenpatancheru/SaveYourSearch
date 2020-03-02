import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
