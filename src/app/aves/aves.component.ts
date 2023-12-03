import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-aves',
  templateUrl: './aves.component.html',
  styleUrls: ['./aves.component.css'],
})
export class AvesComponent implements OnInit {
  avesData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala').subscribe(
      (data: any) => {
        this.avesData = data.recordings;
      },
      (error) => {
        console.error('Error fetching aves data:', error);
      }
    );
  }
}
