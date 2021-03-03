import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdComponent } from './curd/curd.component';
import { CurdsService } from './curds.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CurdComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule ,HttpClientModule
  ],
  providers: [CurdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
