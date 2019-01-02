import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {
  // Tip (1) @Output with parentheses because we're passing something out of the Component
  // Tip (2) @Output is acting as a binding to custom event
  // Tip (3) @Output('bpCreated') is referring to an alias that is bind to custom event
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';

  // Usage of local reference through @ViewChild Decorator
  @ViewChild('serverContentInputRef') serverContentInputReference: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInputReference: HTMLInputElement) {
    //console.log("Server Name : "+ serverNameInputReference.value)
    this.serverCreated.emit({ serverName: serverNameInputReference.value, serverContent: this.serverContentInputReference.nativeElement.value });
  }

  onAddBluePrint(serverNameInputReference: HTMLInputElement) {
    //console.log("Server Name : "+ serverNameInputReference.value)
    this.bluePrintCreated.emit({ serverName: serverNameInputReference.value, serverContent: this.serverContentInputReference.nativeElement.value });
  }

}
