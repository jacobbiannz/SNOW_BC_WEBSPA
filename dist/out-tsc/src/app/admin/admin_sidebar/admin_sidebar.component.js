"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Admin_SidebarComponent = (function () {
    function Admin_SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    Admin_SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    Admin_SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    Admin_SidebarComponent = __decorate([
        core_1.Component({
            selector: 'admin-sidebar',
            templateUrl: './admin_sidebar.component.html',
            styleUrls: ['./admin_sidebar.component.scss']
        })
    ], Admin_SidebarComponent);
    return Admin_SidebarComponent;
}());
exports.Admin_SidebarComponent = Admin_SidebarComponent;
/*
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'fa fa-fw fa-dashboard', class: '' },
    { path: 'catalogattributes', title: 'Catalog Settings', icon: 'fa fa-fw fa-cog', class: '' },

    { path: 'user-profile', title: 'User Profile', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'table-list', title: 'Table List', icon: 'fa fa-fw fa-table', class: '' },
    { path: 'typography', title: 'Typography', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'icons', title: 'Icons', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'maps', title: 'Maps', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'fa fa-fw fa-file-o', class: 'active-pro' },
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    
    eventCalled() {
        this.isActive = !this.isActive;
        
    }

    addExpandClass(element: any) {
       
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    
}
*/
/*
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
   
    isActive: boolean = false;
    showMenu: string = '';

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
*/ 
//# sourceMappingURL=admin_sidebar.component.js.map