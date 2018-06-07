import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'first-view',
    templateUrl: './first-view.component.html',
    styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

    value: any;

    constructor(private router: Router){ }

    ngOnInit() {
        this.value = 0;
        this.counter();
    }


    counter(){
        setTimeout(() => {
            if (this.value++ < 100) {
                this.counter();
            } else {
                this.router.navigate(['/login']);
            }
        }, 50);
    }
}
