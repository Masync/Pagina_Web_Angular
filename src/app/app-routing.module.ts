import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CatalogosComponent } from './componentes/catalogos/catalogos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalogo', component: CatalogosComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
