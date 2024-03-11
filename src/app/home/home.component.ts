import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
      </form>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
