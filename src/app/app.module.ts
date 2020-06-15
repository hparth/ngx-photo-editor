import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxPhotoEditorModule} from '../../projects/ngx-photo-editor/src/lib/ngx-photo-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPhotoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
