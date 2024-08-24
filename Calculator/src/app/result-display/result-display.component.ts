import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [],
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.css'
})
export class ResultDisplayComponent {
  @Input() resultado: number | null = null;
}
