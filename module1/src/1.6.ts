//Normalfunction
//Typescript function

function AddFunction(num1: number, num2: number) {
  return num1 + num2;
}
const result = AddFunction(5, 6);
console.log(result);

const addArrow = (num3: number, num4: number): number => num3 + num4;

//Object function Methods

const poorUser = {
  name: "sabbir",
  balance: 0,
  addbalance(balance: number): string {
    return `My New balance is :${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 10];
const newarry: number[] = arr.map((elem: number): number => elem * elem);
