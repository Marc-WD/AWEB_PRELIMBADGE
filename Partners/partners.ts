import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-partners',
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css']
})
export class Partners {

  partners = [
    {
      company: 'Microsoft',
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Microsoft-Logo-Transparent-Background.png',
      level: 'Platinum',
      website: 'https://www.microsoft.com'
    },
    {
      company: 'Apple, Inc.',
      logo: 'https://www.svgrepo.com/show/511330/apple-173.svg',
      level: 'Gold',
      website: 'https://www.apple.com'
    },
    {
      company: 'Amazon',
      logo: 'https://www.svgrepo.com/show/475634/amazon-color.svg',
      level: 'Silver',
      website: 'https://www.amazon.com'
    },
    {
      company: 'Google, Inc.',
      logo: 'https://www.svgrepo.com/show/380993/google-logo-search-new.svg',
      level: 'Bronze',
      website: 'https://www.google.com'
    }
  ];

  isSponsorOpen = false;

  toggleSponsor() {
    this.isSponsorOpen = !this.isSponsorOpen;
  }
}
