import { Component, Input } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // Since, Angular is responsible for instantiating the componets 
  // hence it will construct them correctly and will provide Service object using DI
  // constructor(private loggingService: LoggingService, private accountService: AccountService) { }
  constructor(private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateAccountStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.emitStatusUpdate.emit(status); // For Cross-Component Communication 
  }
}
