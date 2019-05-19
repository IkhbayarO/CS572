import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const ROUTES: Routes = [
  {path: 'users', loadChildren: './users/users.module#UsersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
