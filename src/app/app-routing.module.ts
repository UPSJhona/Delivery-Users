import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren:() => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home', canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',canActivate:[NoLoginGuard],
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',canActivate:[NoLoginGuard],
    loadChildren: () => import('./components/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio-empresa',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/inicio-empresa/inicio-empresa.module').then( m => m.InicioEmpresaPageModule)
  },
  {
    path: 'categoria-emp',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/categoria-emp/categoria-emp.module').then( m => m.CategoriaEmpPageModule)
  },
  {
    path: 'productos',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'descripcion',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'mapa',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'carrito',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)

  },
  {

    path: 'vision',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'contactos',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'modifusuario',canActivate:[AuthGuard],
    loadChildren: () => import('./modifusuario/modifusuario.module').then( m => m.ModifusuarioPageModule)

  },
  {
    path: 'resumenpedido',canActivate:[AuthGuard],
    loadChildren: () => import('./resumenpedido/resumenpedido.module').then( m => m.ResumenpedidoPageModule)
  },
  {
    path: 'pedidodet',canActivate:[AuthGuard],
    loadChildren: () => import('./pedidodet/pedidodet.module').then( m => m.PedidodetPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
