
interface ProductData {
  _id: string,
  name: string,
  type: string,
  storage: number,
  id: string
}

interface FilterCheck {
  type: string;
  isChecked: boolean;
}


export {ProductData, FilterCheck}