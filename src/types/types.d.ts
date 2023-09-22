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
export interface State {
  comics: Comic[];
  currentComic: Comic;
  isLoading: boolean;
  isError: boolean;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
