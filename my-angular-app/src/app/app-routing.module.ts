import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './navbar/navbar.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ContactForm', component: ContactFormComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'services' , component : ServicesComponent},
  {path: 'Navbar' , component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
