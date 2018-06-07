import {Component, OnInit} from '@angular/core';
import {RootScopeService} from '../root-scope.service';

@Component({
    selector: 'main-page-view',
    templateUrl: './main-page-view.component.html',
    styleUrls: ['./main-page-view.component.css']
})
export class MainPageViewComponent implements OnInit {
    title = 'app';

    constructor(private rootScope: RootScopeService){}

    ngOnInit(){

    }

    toggleSidenav(){
        this.rootScope.isToolbarOpened = !this.rootScope.isToolbarOpened;
    }
}
