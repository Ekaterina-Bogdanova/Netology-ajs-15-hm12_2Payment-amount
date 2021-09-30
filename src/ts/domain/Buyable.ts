import { StringTypeAnnotation } from "@babel/types";

export default interface Buyable {
  readonly id: number,
  readonly nameOrigin: string,
  readonly yearRelease: number,
  readonly country: string,
  readonly genre: string[],
  readonly time: string,
  readonly price: number,
}
