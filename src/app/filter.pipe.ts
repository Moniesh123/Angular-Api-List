import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true 
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterString: string): any[] {
    if (!items || !filterString) {
      return items;
    }
    return items.filter(item =>
      item.title.toLowerCase().includes(filterString.toLowerCase())
    );
  }
}