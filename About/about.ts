import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  giftMessage = '';
  showGift = false;

  getFreeGift() {
    this.showGift = true;
    this.giftMessage = '🎁 Thank you! Your FREE gift will be sent to your email.';
  }

  learnMore() {
    alert('Learn more about our mission and global conferences.');
  }
}
