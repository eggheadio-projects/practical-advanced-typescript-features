const halloweenCostumeIdeas: any = ['😱', '👹 ', '🤖', '👻', '👽'];

halloweenCostumeIdeas.indexOf('👽');
halloweenCostumeIdeas.a.b.c.d;
halloweenCostumeIdeas();


function randomCostume(ideas: string[]) {
    return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);

