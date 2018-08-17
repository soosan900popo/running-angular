import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "censor" /*, Pure:tre */ })
export class CensorPipe implements PipeTransform {
  transform(input: string, replacement: string): string {
    let cWords: string[] = ["bad", "rotten", "terrible"];
    let out: string = input;
    for (let i = 0; i < cWords.length; i++) {
      out = out.replace(cWords[i], replacement);
    }
    return out;
  }
}
