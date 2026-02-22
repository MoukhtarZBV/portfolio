import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Stack } from './features/stack/stack';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Stack },
            { path: 'experience', component: Stack },
            { path: 'projects', component: Stack },
            { path: 'stack', component: Stack },
            { path: '**', redirectTo: 'home' }
        ]
    }
];
