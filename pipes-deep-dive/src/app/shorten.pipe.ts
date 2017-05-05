import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    return limit !== undefined && value.length > limit ? `${value.substr(0, limit)}...` : value; 
  }
}
