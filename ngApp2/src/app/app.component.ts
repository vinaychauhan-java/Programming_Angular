import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serversArr = [];

  onAddServer() {
    this.serversArr.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.serversArr.splice(position, 1);
  }
}
