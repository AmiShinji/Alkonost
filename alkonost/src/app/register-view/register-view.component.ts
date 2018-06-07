import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'register-view',
    templateUrl: './register-view.component.html',
    styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
    title = 'app';
    registerForm: FormGroup;

    constructor(private router: Router){}

    ngOnInit(){
        this.registerForm = new FormGroup ({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    doRegister(){
        if (this.registerForm.valid) {
            this.router.navigate(['additional']);
        }
    }
}
