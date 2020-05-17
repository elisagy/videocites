import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'time'
})
export class TimePipe implements PipeTransform {
	transform(seconds: number): string {
		return `${Math.floor(seconds / (60 * 60)).toString().padStart(2, '0')}:${Math.floor(seconds % (60 * 60) / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
	}
}