import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { prodIdValidateGuard } from './prod-id-validate.guard';
import { SpecificationComponent } from './specification/specification.component';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [
    { path:'about',component:AboutComponent,title:'About'},
    { path:'contact',component:ContactComponent,title:'Contact'},
    { path:'galary',component:GalaryComponent,title:'Galary'},
    { path:'',redirectTo:'/about',pathMatch:'full'},
    {
        path:'pdetail/:id',
        component:ProdDetailComponent,
        title:'product_detail',
        canActivate :[
            prodIdValidateGuard
        ],
        children:[
            {path:'specification',component:SpecificationComponent},
            {path:'review',component:ReviewComponent},
            {path:'',component:SpecificationComponent}
        ]
    },
    {path:'**',component:PageNotFoundComponent,title:'Error'}
];
 