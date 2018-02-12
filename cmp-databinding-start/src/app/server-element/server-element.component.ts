import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, /Native
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@Input('srvElement')  element: {type: string, name: string, content: string}
@Input() name: string;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called!');
     console.log(changes);
   }


  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDocheck() {
    content.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    content.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
      content.log('ngAfterContentChecked called!');
    }
  ngAfterViewInit() {
        content.log('ngAfterViewInit called!');
    }
  ngAfterViewChecked() {
          content.log('ngAfterViewChecked called!');
    }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
