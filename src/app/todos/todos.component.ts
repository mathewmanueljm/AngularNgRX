import { fade, slide } from './../animations';
import { Component } from '@angular/core';


@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[ 
    fade,
    slide
    // moving to trigger class
    // trigger('fade', [   
     // state('void', style({ opacity: 0}))   ,
     // transition('void <=> *', [ // two way arrow is for both ways or transition(':enter, :leave')
     //   // style({ opacity:0 }), // this is applied immediately // this can be commented as we defined state
      //  animate(2000) // do not need to explicity say the style as it does automaticall=y
        // animate(2000, style({ backgroundColor: 'white', opacity:1 })) // this is applied over a period of time
     // ])
   // ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item:any) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
