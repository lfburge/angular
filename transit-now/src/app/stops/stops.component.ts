import { Component, OnInit } from '@angular/core';
import { Stop } from '../model/stop';
import { StopService } from '../services/stop.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})

export class StopsComponent implements OnInit {

  stops: Stop[];
  showSpinner: boolean;
  displayedColumns = ['stopCode', 'name', 'lat', 'lon'];
  dataSource: MatTableDataSource<Stop>;

  constructor(private stopService: StopService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getStops();
  }

  getStops(): void {
    this.stopService.getStops()
    .subscribe(stops => {this.stops = stops; this.dataSource = new MatTableDataSource(this.stops); this.showSpinner = false; });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

