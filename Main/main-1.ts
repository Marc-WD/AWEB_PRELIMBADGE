import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main {

  // Hero data
  title = 'Research Conferences';
  subtitle = 'Join our online events this 2026!';
  note = 'Early-Bird Registration';

  // Cards data
  conferences = [
    {
      city: 'France',
      image: 'https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Imported_Blog_Media/Best%20Places%20to%20Live%20in%20France-jpg.jpg?width=1600&height=1068&name=Best%20Places%20to%20Live%20in%20France-jpg.jpg',
      description: 'The largest country in Western Europe...',
      field: 'Architecture and Fine Arts'
    },
    {
      city: 'Seoul',
      image: 'https://touristjourney.com/wp-content/uploads/2025/01/Golden-Sunset-Over-Seoul-Urban-Nightscape-Seoul-Korea-1024x683.jpg',
      description: 'Korean Seoul (formerly Soul-t\'ukpyŏl)...',
      field: 'Humanities and Arts'
    },
    {
      city: 'San Francisco',
      image: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      description: 'A cultural and financial centre...',
      field: 'Science and Technology'
    },
    {
      city: 'Boston',
      image: 'https://www.travelandleisure.com/thmb/_aMbik8KZYsUKc_6_XNeAOzPi84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg',
      description: 'Best known for its famous baked beans...',
      field: 'Engineering and Tech'
    }
  ];
}
