// starting out...

const human = { name: "John", age: 25 };

function printAge(human: any) {
    console.log(human.age);
}

printAge(human);

// some time later...

(function () {


    interface IHuman {
        name: string;
        age: number;
    }

    const human: IHuman = { name: "John", age: 25 };

    function printAge(human: IHuman) {
        console.log(human.age);
    }

    printAge(human);

})();

