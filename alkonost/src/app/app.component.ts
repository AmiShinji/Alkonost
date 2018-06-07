import { Component } from '@angular/core';
import {RootScopeService} from './root-scope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private rootScope: RootScopeService){}
}
