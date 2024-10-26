import { IFaqCategory } from "./faq-category";

export interface IFaq {
  answer: string;
  category: IFaqCategory;
  question: string;
  id: string;
}
