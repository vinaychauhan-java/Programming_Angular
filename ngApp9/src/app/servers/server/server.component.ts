import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id']; // + is adeed to cast the '1' to 1 from URL parameters
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    // Above code is commented as Server is obtained from Resolver using Dynamic Data
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']
      }
    );
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    // As we are on same navigation path has relaive URL could be used.
    // Othwerwise we have to opt for above commented code approach.
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
