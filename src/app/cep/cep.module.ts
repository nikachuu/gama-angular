import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  { path: '', component: CepTextoComponent },
  { path: ':num', component: CepComponent}
];

@NgModule({
  declarations: [
    CepComponent,
    CepTextoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CepModule { }
