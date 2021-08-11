import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css'] /* style urls recebe um array, por isso o uso do [] */
})

export class StarComponent implements OnChanges {
    
   /* para criar uma variável e torná-la disponível para uso externo */
    @Input()
    rating: number = 0;
    
    starWidth: number;

    ngOnChanges(): void { /* criação da hook para implementar o método */
        this.starWidth = this.rating * 74 / 5; /* caso não funcione, usar 74 */
    }
}