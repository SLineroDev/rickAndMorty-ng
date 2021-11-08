import { Component } from '@angular/core'
import { Character } from 'src/models/Character'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'rickAndMorty-ng';
  characterList: Character[] = [];
  filterValue: string = '';

  constructor(apiService: ApiService) {
    apiService.getJsonData().subscribe(data => {
      this.characterList = data.results
    })
  }
}
