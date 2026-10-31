import { Routes } from '@angular/router';
import { ReactiveForm } from '../components/reactive-form/reactive-form';
import { TemplateForm } from '../components/template-form/template-form';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Privacy } from '../components/privacy/privacy';
import { NotFound } from '../components/not-found/not-found';
import { LiveStock } from '../components/live-stock/live-stock';
import { Service } from '../components/service/service';
import { Iform } from '../components/iform/iform';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
        path:'R_Form',
        component:ReactiveForm
    },
    {
        path:'T_Form',
        component:TemplateForm
    },
    {
        path:'home',
        component:Home
    },
     {
        path:'about',
        component:About
    },
     {
        path:'contact',
        component:Contact
    },
    {
       path:'service',
       component:Service

    },
    {
       path:'live_Stock',
       component:LiveStock
    },
     {
        path:"privacy",
        component:Privacy
    },

    {
        path:"test",
        component:Iform
    
    },
    {
        path:'**',
        component: NotFound
    }

];
