import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {

  // Since, Angular is responsible for instantiating the componets 
  // hence it will construct them correctly and will provide Service object using DI
  // constructor(private loggingService: LoggingService, private accountService: AccountService) { }
  constructor(private accountService: AccountService) {
    // For Cross-Component Communication
    accountService.emitStatusUpdate.subscribe(
      (statusData: string) => {
        // The == operator will compare for equality after doing any necessary type conversions.
        // The === operator will not do the conversion, so if two values are not the same type === will simply return false. 
        // Both are equally quick and optimized. 
        if (statusData === 'unknown') {
          alert("New Status :: " + statusData)
        }
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}