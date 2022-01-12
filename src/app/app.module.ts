import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './classes/tutorial/tutorial.component';
import { PlanetExampleComponent } from './classes/planet-example/planet-example.component';
import { MainComponent } from './main/main.component';
import { GenericsComponent } from './ts-types/generics/generics.component';
import { InterfacesComponent } from './ts-types/interfaces/interfaces.component';
import { KeyofComponent } from './ts-types/keyof/keyof.component';
import { PartialComponent } from './ts-types/partial/partial.component';
import { TypesComponent } from './ts-types/types/types.component';
import { UnionsComponent } from './ts-types/unions/unions.component';
import { BasicComponent } from './basics/basic/basic.component';
import { FunctionsComponent } from './functions/functions/functions.component';
import { FuncOverloadComponent } from './functions/func-overload/func-overload.component';
import { ModulesComponent } from './functions/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    PlanetExampleComponent,
    MainComponent,
    GenericsComponent,
    InterfacesComponent,
    KeyofComponent,
    PartialComponent,
    TypesComponent,
    UnionsComponent,
    BasicComponent,
    FunctionsComponent,
    FuncOverloadComponent,
    ModulesComponent
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
