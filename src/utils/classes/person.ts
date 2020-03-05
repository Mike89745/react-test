import { sex } from "../enums/sex";

export default class person {
    public name : string;
    public age : number;
    public sex : sex;
    public date: string;
    constructor(name: string,age: number, sex : sex, date: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.date = date;
    }
}