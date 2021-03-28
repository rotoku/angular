import { Component } from '@angular/core';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rodrigo = {name: "Rodrigo", isActive: true, email: "rodrigo@teste.com.br"}
  laura = {name: "Laura", isActive: false, email: ""}
  sophia = {name: "Sophia", isActive: false, email: ""}
  michele = {name: "Michele", isActive: true, email: "michele@teste.com.br"}
}
