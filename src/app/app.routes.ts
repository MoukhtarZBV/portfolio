import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Stack } from './features/stack/stack';
import { HeroComponent } from '@features/hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HeroComponent },
            { path: 'experience', component: Stack },
            { path: 'projects', component: Stack },
            { path: 'stack', component: Stack },
            { path: '**', redirectTo: 'home' }
        ]
    }
];
