import { Routes } from '@angular/router';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './component/transaction/transaction-image.module#TransactionImageModule',
    }
];
