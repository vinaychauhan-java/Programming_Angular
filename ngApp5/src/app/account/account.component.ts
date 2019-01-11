import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  // Since, Angular is responsible for instantiating the componets 
  // hence it will construct them correctly
  constructor(private loggingService: LoggingService) { }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    //console.log('A server status changed, new status: ' + status);

    this.loggingService.logStatusChange(status);
  }
}
