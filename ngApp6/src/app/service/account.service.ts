import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    // For Cross-Component Communication
    emitStatusUpdate = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }

    addAccount(pName: string, pStatus: string) {
        this.accounts.push({ name: pName, status: pStatus });
        this.loggingService.logStatusChange(pStatus);
    }

    updateAccountStatus(pId: number, pStatus: string) {
        this.accounts[pId].status = pStatus
        this.loggingService.logStatusChange(pStatus);
    }
}