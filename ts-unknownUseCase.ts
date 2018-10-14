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
} else if(isComment(response)) {
    response.date;
} else {
    const numbers = <number[]>response;
    numbers.indexOf(1);
}

function isComment(type: any): type is IComment {
    return (<IComment>type).message !== undefined;
}