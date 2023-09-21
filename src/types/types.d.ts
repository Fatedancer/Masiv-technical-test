export interface Comic {
  title: string;
  img: string;
  alt: string;
  year: string;
  month: string;
  day: string;
  num: number;
  rating: number;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
