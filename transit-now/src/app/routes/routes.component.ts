import { Component, OnInit } from '@angular/core';
import { Route } from '../model/route';
import { RouteService } from '../services/route.service';
import { ApiConst } from '../services/apiconst';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})

export class RoutesComponent implements OnInit {
  routes: Route[];
  showSpinner: boolean;
  displayedColumns = ['routeId', 'name', 'description'];
  dataSource: MatTableDataSource<Route>;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getRoutes();
  }

  getRoutes(): void {
    this.routeService.getRoutes()
    .subscribe(routes => {this.routes = routes; this.dataSource = new MatTableDataSource(this.routes); this.showSpinner = false; });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
