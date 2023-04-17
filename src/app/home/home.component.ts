import { Component } from '@angular/core';
import { Patient, PatientProblem } from './home.patientComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'fourth-project';
  patientObj = new Patient();
  patientObjs = new Array<Patient>();
  patientProblem = new PatientProblem();
  clearProblem() {
    this.patientProblem = new PatientProblem();
  }

  addProblem() {
    this.patientObj.problem.push(this.patientProblem);
    this.patientProblem = new PatientProblem();
  }
  
  deleteProblem(index: number) {
    this.patientObj.problem.splice(index, 1);
  }

  resetRecord() {
    this.patientProblem = new PatientProblem();
    this.patientObj = new Patient();
  }

  addRecord() {
    this.patientObjs.push(this.patientObj);
    this.patientObj = new Patient();
  }
}
