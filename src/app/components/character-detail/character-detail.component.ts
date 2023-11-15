import { Component, Input } from '@angular/core';
import { MovieCharacterService } from './movie-character.service';

@Component({
  selector: 'app-character-detail',
  template: `
    <div *ngIf="character">
      <h2>{{ character.name }} Details</h2>
      <p>Occupation: {{ character.occupation }}</p>
      <p>Weapon: {{ character.weapon }}</p>
      <p>Debt: {{ character.debt ? 'Yes' : 'No' }}</p>
      <button (click)="deleteCharacter()">Delete Character</button>
    </div>
  `,
})
export class CharacterDetailComponent {
  @Input() character: any;

  constructor(private characterService: MovieCharacterService) { }

  deleteCharacter() {
    if (confirm('Are you sure you want to delete this character?')) {
      this.characterService.deleteCharacter(this.character._id).subscribe(() => {
        // Implement a method to refresh the character list after deletion
      });
    }
  }
}