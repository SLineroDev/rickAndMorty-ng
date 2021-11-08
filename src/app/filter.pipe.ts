import { Pipe, PipeTransform } from '@angular/core'
import { Character } from 'src/models/Character'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Character[], filter: string): Character[] {
    return value.filter((v: Character) => v.name.toLowerCase().includes(filter.toLowerCase()))
  }

}
