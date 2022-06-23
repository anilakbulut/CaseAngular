import { Component, OnInit } from '@angular/core';
import { Activities } from '../models/activities';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.css']
})
export class ActiviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activities: Activities[] = [
    {id: 1, title: "Konser 1", description: "Konser 1 Açıklama",imgUrl: "konser1.jpg",actDate: 2023},
    {id: 1, title: "Konser 2", description: "Konser 2 Açıklama",imgUrl: "konser2.jpg",actDate: 2022},
    {id: 1, title: "Tiyatro 1", description: "Tiyatro 1 Açıklama",imgUrl: "tiyatro1.jpg",actDate: 2024},
    {id: 1, title: "Tiyatro 2", description: "Tiyatro 1 Açıklama",imgUrl: "tiyatro2.jpg",actDate: 2025}
  ]
}
