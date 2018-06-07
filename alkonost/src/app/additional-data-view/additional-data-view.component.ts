import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'additional-data-view',
    templateUrl: './additional-data-view.component.html',
    styleUrls: ['./additional-data-view.component.css']
})
export class AdditionalDataViewComponent implements OnInit{
    title = 'app';
    additionalForm: FormGroup;

    options = [
        'Рыбинск',
        'Москва',
        'Санкт-Петербург',
        'Ярославль'
    ];

    filteredOptions: Observable<string[]>;

    constructor(private router: Router){}

    ngOnInit(){
        this.additionalForm = new FormGroup ({
            FIO: new FormControl('', [Validators.required]),
            sex: new FormControl('', [Validators.required]),
            dateOfBirth: new FormControl('', [Validators.required]),
            location: new FormControl('', [Validators.required]),
        });
        this.filteredOptions = this.additionalForm.controls['location'].valueChanges
            .pipe(
                startWith(''),
                map(val => this.filter(val))
            );
    }

    filter(val: string): string[] {
        return this.options.filter(option =>
            option.toLowerCase().includes(val.toLowerCase()));
    }

    doRegister(){
        this.router.navigate(['/main']);
    }
}
