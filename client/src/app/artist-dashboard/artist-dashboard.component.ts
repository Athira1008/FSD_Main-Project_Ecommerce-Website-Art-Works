import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-artist-dashboard',
  templateUrl: './artist-dashboard.component.html',
  styleUrls: ['./artist-dashboard.component.css']
})
export class ArtistDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
