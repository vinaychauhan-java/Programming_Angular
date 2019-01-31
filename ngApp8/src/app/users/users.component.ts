import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Vipin Chauhan'
    },
    {
      id: 2,
      name: 'Ananya Chauhan'
    },
    {
      id: 3,
      name: 'Vinay Chauhan'
    }
  ];
}
