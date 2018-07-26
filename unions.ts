type PetType = IDog | ICat;

interface IPet extends PetType {} // error

class Pet implements PetType {} // error

interface IDog {}
interface ICat {}
