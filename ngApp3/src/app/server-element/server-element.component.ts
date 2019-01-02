import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Will Overridee the CSS not for only single component but as a whole application
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  // @Input is treating as a Decorator that binds the value to be exposed to Outside World
  // Tip (1) @Input('srvElement') is referring to an alias that is bind to custom properties
  // Tip (2) @Input('srvElement') is acting as a binding to custom property
  @Input('srvElement') element: { type: string, name: string, content: string };

  @ViewChild('headerName') headerNameRef: ElementRef;
  @ContentChild('paragraphContent') paragraphContentRef: ElementRef;

  constructor() {
    console.log("Method Called :: constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Method Called :: ngOnChanges");
    console.log(changes)
  }

  ngOnInit() {
    console.log("Method Called :: ngOnInit");
    console.log("ngOnInit >> Header Contents :: " + this.headerNameRef.nativeElement.textContent);
    console.log("ngOnInit >> Paragraph Contents :: " + this.paragraphContentRef.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log("Method Called :: ngAfterContentInit");
    console.log("ngAfterContentInit >> Paragraph Contents :: " + this.paragraphContentRef.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log("Method Called :: ngAfterViewInit");
    console.log("ngAfterViewInit >> Header Contents :: " + this.headerNameRef.nativeElement.textContent);
  }

}
