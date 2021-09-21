import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MediaItemListComponent } from './media-item-list.component';
import {AppComponent} from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations:[
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule {}