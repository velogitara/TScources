const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

//2nd 

let age: number; 
age = 50;
let theName: string; 
theName = 'Max';
let toggle: boolean; 
toggle = true;
let empty: null
  empty = null;
let notInitialize: undefined
  notInitialize = undefined;
let callback = (a: number) => a;
callback = (a)=>{return 100 + a}

let anything: any; 
anything = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === "string") {
str = some;
  
}

let person1: [string, number];
person1 = ["Max", 21]

enum Status { LOADING, READY }

const page = {
  load: Status.READY
}
if (page.load === Status.LOADING) {
console.log("status: LOADING")
}
if (page.load === Status.READY){
console.log('status: READY')
}
  
let union: string | number

let literal: "enable" | "disable"

function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}


type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
  createAt: Date;
  updateAt: Date;
}
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}


const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
console.log(page1)
console.log(page2)
console.log("first")

class House {
  
  private tenants: string[] = [];
  constructor(private type: string,public street: string) {
    
  }
  public showAddress(): void { 
    console.log("Address: " + this.street)
  }

    public showType(): void { 
    console.log("Type: " + this.type)
  }
  public addTenants(name: string) {
    this.tenants.push(name);
  }
  public showTenants() {
console.log(this.tenants)
   }
}

const house = new House("wood","middle-earth")

house.addTenants("Max")
house.addTenants("Alex")
house.showTenants()


class Zhiguli_8 {
  private needRepair = false;
  private maxEngineLoad = 3;

  /**
   * Заводит двигатель машины если это возможно
   */
  private checkEngine () {
    // Проверяем не сломан ли двигатель
    if (this.needRepair) {
      throw new Error('Engine not work');
    }

    // Пробуем его завести
    const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
    if (this.maxEngineLoad === engineLoad) {
      this.needRepair = true;
      throw new Error('Engine broken again');
    }
  }

  /**
   * Завести двигатель
   */
  public startEngine () {
    this.checkEngine();

    console.log('Ta-ta-ta-ta');
  }

  /**
   * Ремонт двигателя
   */
  public repairEngine () {
    this.needRepair = false;

    console.log('Engine rebuilt');
  }
}

const auto = new Zhiguli_8();

try {
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
  auto.startEngine();
} catch (e) {
  console.log(e);
  auto.repairEngine();
  auto.startEngine();
}


type PersonInformation = {
  firstName?: string;
  lastName?:  string;
}

class Person {
  private personInfo: PersonInformation = {};

  set firstName (value: string) {
    console.log('firstName added');
    this.personInfo.firstName = value;
  }

  set lastName (value: string) {
    console.log('lastName added');
    this.personInfo.lastName = value;
  }

  get info () {
    const { personInfo } = this;
    return `${personInfo.lastName} ${personInfo.firstName}`;
  }
}

const person = new Person();

person.lastName = 'Pupkin';
person.firstName = 'Petha';

console.log(person.info);