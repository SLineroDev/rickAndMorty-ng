import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CharacterResp } from 'src/models/Character'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getJsonData(): Observable<CharacterResp> {
    return this.http.get<CharacterResp>('assets/data.json')
  }

  getApiData(): Observable<CharacterResp> {
    return this.http.get<CharacterResp>('https://rickandmortyapi.com/api/character/')
  }

}
