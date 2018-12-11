import { Component, NgModule } from "@angular/core";
import { FormsModule} from '@angular/forms'; // Added for Angular Form Module

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // template : '<h3>In Server Component Working (Template)...</h3>'
    styleUrls: ['server.component.css']
})

export class ServerComponent {
    allowNewServer: boolean = false;
    serverId: number = 101;
    serverStatus: string = 'OFF-LINE';
    serverCreationStatus: string = "No Server was Created";
    isServerCreated: boolean = false;
    serverName: string = 'TestServerName';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'ON-LINE' : 'OFF-LINE';

        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.isServerCreated = true;
        this.serverCreationStatus = "Server '" + this.serverName + "' is Created"
    }

    onUpdateServerName(event: Event) {
        // console.log(event);
        // Check logs in Chrome - Developer Tools
        this.serverName = (<HTMLInputElement>event.target).value; // Doing Explicit Castiing
    }

    getServerStatusColor(){
        return this.serverStatus === 'ON-LINE' ? 'green' : 'red';
    }
}