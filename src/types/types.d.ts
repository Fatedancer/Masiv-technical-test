export interface Comic {
  title: string;
  img: string;
  alt: string;
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  day: string;
  rating?: number;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
