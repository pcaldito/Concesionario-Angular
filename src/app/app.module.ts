import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheListComponent } from './components/coche-list/coche-list.component';
import { AppCocheDirective } from './directives/app-coche.directive';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { CocheRoutingComponent } from './components/coche-routing/coche-routing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CocheListComponent,
    AppCocheDirective,
    MiPipePipe,
    CocheRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
