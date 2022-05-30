import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Diabetes } from './diabetes';
import { DiabetesService } from './diabetesservice';

@Component({
    templateUrl: './diabetes.component.html',
    providers: [MessageService, ConfirmationService],
})
export class DiabetesComponent implements OnInit {

    public diabetes = new Diabetes();

    constructor(private diabetesService: DiabetesService, 
                private messageService: MessageService) {}

    ngOnInit() {

    }

    predict() {
        this.diabetesService.predict(this.diabetes).subscribe(
            response => {
                this.diabetes = response;
            },
            error => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error on load the predictions.' });
            }
        );
    }

    
}
