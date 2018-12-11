import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // Added for Angular Form Module
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // No need to mention extension as it will be taken care by bundle
import { XServerComponent } from './xserver/xserver.component'; // Created Component through CLI

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    XServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
