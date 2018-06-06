import { Component } from '@angular/core';

@Component({
    selector: 'first-view',
    templateUrl: './first-view.component.html',
    styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent {
    button1 = 'Я кнопка номер 1';
    button2 = 'Я кнопка номер 2';

    personList = [
        {name: 'Андрей Гулин', age: 21},
        {name: 'Андрей Гулин2', age: 22},
        {name: 'Андрей Гулин3', age: 23},
        {name: 'Андрей Гулин4', age: 24},
    ];

    changeButtonName(){
        this.button1 = 'Моё название поменяли :с';
    }
}
