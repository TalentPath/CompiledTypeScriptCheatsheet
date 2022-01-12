import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basics/basic/basic.component';
import { PlanetExampleComponent } from './classes/planet-example/planet-example.component';
import { TutorialComponent } from './classes/tutorial/tutorial.component';
import { FuncOverloadComponent } from './functions/func-overload/func-overload.component';
import { FunctionsComponent } from './functions/functions/functions.component';
import { ModulesComponent } from './functions/modules/modules.component';
import { MainComponent } from './main/main.component';
import { GenericsComponent } from './ts-types/generics/generics.component';
import { InterfacesComponent } from './ts-types/interfaces/interfaces.component';
import { KeyofComponent } from './ts-types/keyof/keyof.component';
import { PartialComponent } from './ts-types/partial/partial.component';
import { TypesComponent } from './ts-types/types/types.component';
import { UnionsComponent } from './ts-types/unions/unions.component';

const routes: Routes = [
  {path:"home", component:MainComponent},
  {path:"classes-tutorial", component:TutorialComponent},
  {path:"planet-example",component:PlanetExampleComponent},
  {path:"interfaces", component:InterfacesComponent},
  {path:"partials", component:PartialComponent},
  {path:"types", component:TypesComponent},
  {path:"generics", component:GenericsComponent},
  {path:"unions", component:UnionsComponent},
  {path:"keyof", component:KeyofComponent},
  {path:"basics", component:BasicComponent},
  {path:"functions", component:FunctionsComponent},
  {path:"function-overload", component:FuncOverloadComponent},
  {path:"modules", component:ModulesComponent},
  {path:"", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
