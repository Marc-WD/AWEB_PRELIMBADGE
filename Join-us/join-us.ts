import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-join-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.html',
  styleUrls: ['./join-us.css']
})
export class JoinUs {

  firstName = '';
  lastName = '';
  email = '';
  institution = '';

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
