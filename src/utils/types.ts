export interface IDataProps {
  _id: string;
  name: string;
  type: 'bun' | 'main' | 'sauce';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uuid?: string;
}

export interface IOrders {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string
  updatedAt: string;
  _id: string;

}