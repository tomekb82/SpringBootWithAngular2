
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'albumType',
    pure: false
})
export class AlbumTypePipe implements PipeTransform {

    transform(items: any[], type: string): any {
        if (!items || !type || type=='ALL') {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => {
        if(item.type == null){
           return false;
        }else{
            return item.type.indexOf(type) !== -1;
        }
        });
        
    }
}