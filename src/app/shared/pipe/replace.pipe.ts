import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }

} //implemente Pipe como hook para ser utlizad0