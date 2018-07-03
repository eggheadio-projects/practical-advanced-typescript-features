class Library {
  titles!: string[];
  address: string = "1 Duck Lane";
  isPublic: boolean;

  constructor() {
    this.isPublic = true;
  }
}

const library = new Library();

// sometime later & elsewhere in our codebase..
const shortTitles = library.titles.filter(
  book => book.length < 5
);