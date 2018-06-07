import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
    title = 'app';
    login = '';
    password = '';
    loginForm: FormGroup;

    constructor(private router: Router){}

    ngOnInit(){
        this.loginForm = new FormGroup ({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    doLogin(){
        if (this.loginForm.valid){
            this.router.navigate(['/main']);
        }
    }

    doRegister(){
        this.router.navigate(['/register']);
    }
}
