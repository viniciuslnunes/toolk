import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user = {
    name: 'Vinícius Lopes Nunes',
    age: '25',
    address: 'Parque São Jorge',
  };
}
