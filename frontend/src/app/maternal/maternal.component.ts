import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Maternal } from './maternal';
import { MaternalService } from './maternalservice';

@Component({
    templateUrl: './maternal.component.html',
    providers: [MessageService, ConfirmationService],
})
export class MaternalComponent implements OnInit {

    public maternal: Maternal = new Maternal();
    public showResults = false;

    public samples = [
        {PredictedMaternalRisk: "high risk", Age: 25, SystolicBP: 130, DiastolicBP: 80, BS: 15.0, BodyTemp: 98, HeartRate:86},
        {PredictedMaternalRisk: "mid risk", Age: 23, SystolicBP: 130, DiastolicBP: 70, BS: 15.0, BodyTemp: 98, HeartRate:78},
        {PredictedMaternalRisk: "low risk", Age: 23, SystolicBP: 90, DiastolicBP: 60, BS: 15.0, BodyTemp: 98, HeartRate:76},
    ]

    constructor(private maternalService: MaternalService, 
                private messageService: MessageService) {}

    ngOnInit() {

    }

    selectValues(sample: Maternal) {
        this.maternal = sample;
        this.showResults = false;
    }

    predict() {
        this.maternalService.predict(this.maternal).subscribe(
            response => {
                this.maternal = response;
                this.showResults = true;
            },
            error => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error on load the predictions.' });
            }
        );
    }

    
}
