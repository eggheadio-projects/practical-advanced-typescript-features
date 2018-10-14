interface IComment {
    date: Date;
    message: string;
}

interface IDataService {
    getData(): unknown;
}

let service: IDataService;

const response = service.getData();
response.a.b.c.d;

if(typeof response === "string") {
    console.log(response.toUpperCase());
}
