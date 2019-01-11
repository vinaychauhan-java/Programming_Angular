import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // Since, Angular is responsible for instantiating the componets 
  // hence it will construct them correctly
  constructor(private loggingService: LoggingService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // Normal way of logging the artifacts
    //console.log('A server status changed, new status: ' + accountStatus);

    // Give below approach is correct but we have hardcoded the Service usage 
    // const loggingService = new LoggingService();
    // loggingService.logStatusChange(accountStatus);

    this.loggingService.logStatusChange(accountStatus);
  }
}