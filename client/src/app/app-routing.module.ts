/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5d35f8d6d011cc097f0543fe
*
* You will get 10% discount for each one of your friends
* 
*/
// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { UserEditComponent} from './pages/user-edit/user-edit.component';
import { UserListComponent} from './pages/user-list/user-list.component';
import { ClienteEditComponent} from './pages/cliente-edit/cliente-edit.component';
import { ClienteListComponent} from './pages/cliente-list/cliente-list.component';
import { PedidosEditComponent} from './pages/pedidos-edit/pedidos-edit.component';
import { PedidosListComponent} from './pages/pedidos-list/pedidos-list.component';
import { ProductosEditComponent} from './pages/productos-edit/productos-edit.component';
import { ProductosListComponent} from './pages/productos-list/productos-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'users/:id',  loadChildren: './pages/user-edit/user-edit.module#UserEditModule' , canActivate: [AuthGuard] },
    { path: 'users',  loadChildren: './pages/user-list/user-list.module#UserListModule' , canActivate: [AuthGuard] },
    { path: 'clientes/:id',  loadChildren: './pages/cliente-edit/cliente-edit.module#ClienteEditModule' , canActivate: [AuthGuard] },
    { path: 'clientes',  loadChildren: './pages/cliente-list/cliente-list.module#ClienteListModule' , canActivate: [AuthGuard] },
    { path: 'pedidoses/:id',  loadChildren: './pages/pedidos-edit/pedidos-edit.module#PedidosEditModule' , canActivate: [AuthGuard] },
    { path: 'pedidoses',  loadChildren: './pages/pedidos-list/pedidos-list.module#PedidosListModule' , canActivate: [AuthGuard] },
    { path: 'productoses/:id',  loadChildren: './pages/productos-edit/productos-edit.module#ProductosEditModule' , canActivate: [AuthGuard] },
    { path: 'productoses',  loadChildren: './pages/productos-list/productos-list.module#ProductosListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
