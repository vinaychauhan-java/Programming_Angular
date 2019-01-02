import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Creating Javascript objectwith key-value pairs for serverElements variable 
  serverElements = [
    { type: 'SERVER', name: 'TestServer-A', content: 'Test Server Contents' },
    { type: 'BLUEPRINT', name: 'TestServer-B', content: 'Test Server Contents' }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'SERVER',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'BLUEPRINT',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}
