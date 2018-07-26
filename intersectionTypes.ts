type Cat = IPet & IFeline;

interface ICat extends IPet, IFeline {}

interface IPet {
  pose(): void;
}
interface IFeline {
  nightvision: boolean;
}
