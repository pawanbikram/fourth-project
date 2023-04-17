export class Patient {
    name:string = "";
    code:string = "";
    age:number = 0;
    type:Array<string> = new Array<string>();
    problem:Array<PatientProblem> = new Array<PatientProblem>();
}

export class PatientProblem {
    name:string = "";
    description:string = "";
}