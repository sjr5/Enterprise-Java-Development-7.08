import { Component } from '@angular/core';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
  @Input() character: any;

  constructor(private characterService: CharacterService) {}

  deleteCharacter() {
    if (confirm('Are you sure you want to delete this character?')) {
      this.characterService.deleteCharacter(this.character._id).subscribe(() => {
        // Handle deletion in the UI (remove from the list or update the list)
      });
    }
  }

}
