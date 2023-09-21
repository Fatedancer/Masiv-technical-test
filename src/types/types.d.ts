export interface Comic {
  title: string;
  img: string;
  alt: string;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
