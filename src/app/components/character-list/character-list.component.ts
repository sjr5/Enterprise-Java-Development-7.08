import { Component, OnInit } from '@angular/core';
import { MovieCharacterService } from './movie-character.service';

@Component({
  selector: 'app-character-list',
  template: `
    <h2>Character List</h2>
    <ul>
      <li *ngFor="let character of characters" (click)="showDetails(character._id)">
        {{ character.name }}
      </li>
    </ul>
  `,
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private characterService: MovieCharacterService) { }

  ngOnInit() {
    this.characterService.getAllCharacters().subscribe((data: any[]) => {
      this.characters = data;
    });
  }

  showDetails(characterId: string) {
    // Implement navigation to the detail component using Angular Router
  }
}