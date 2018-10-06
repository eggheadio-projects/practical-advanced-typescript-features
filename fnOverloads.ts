interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

let itemService: IItemService;

const book = itemService.getItem("10");
const tv = itemService.getItem(10);