import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'configs', loadComponent: () => import('./pages/configs/configs.component').then(mod => mod.ConfigsComponent)},
    {path: 'links', loadComponent: () => import('./pages/links/links.component').then(mod => mod.LinksComponent)},
    {path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(mod => mod.ProfileComponent)},
    {path: 'share/qrcode', loadComponent: () => import('./pages/share/qr-code/qr-code.component').then(mod => mod.QrCodeComponent)},
    {path: 'share/nfc', loadComponent: () => import('./pages/share/nfc/nfc.component').then(mod => mod.NfcComponent)},
    {path: '**', redirectTo: 'configs'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
