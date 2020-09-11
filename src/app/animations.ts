import { trigger, transition, state, style, animate } from '@angular/animations';

export let slide = trigger( 'slide', [
    transition(':enter', [
        style( { transform: 'translateX(-10px) '}),
        animate(500)
    ]),

    transition(':leave', [
        animate('0.5s 1s ease-in', style({ transform: 'translateX(-100%)'})) // 0.5s is the duration, 1s is the delay & ease-in is the easing
    ])
]);

export let fade = trigger('fade', [   
    state('void', style({ opacity: 0}))   ,
    transition('void <=> *', [ // two way arrow is for both ways or transition(':enter, :leave')
      // style({ opacity:0 }), // this is applied immediately // this can be commented as we defined state
      animate(2000) // do not need to explicity say the style as it does automaticall=y
      // animate(2000, style({ backgroundColor: 'white', opacity:1 })) // this is applied over a period of time
    ])
  ]);