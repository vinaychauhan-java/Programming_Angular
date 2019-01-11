import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountService]  // Used for AppComponent Level - Dependency Injection
})

export class AppComponent implements OnInit {

  accounts: { name: string, status: string }[] = []; // Initialized with empty Array

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
