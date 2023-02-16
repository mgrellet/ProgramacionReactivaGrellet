import {Injectable} from '@angular/core';
import {Student} from "../model/student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      firstName: 'Martin',
      lastName: 'Grellet',
      course: 'Angular',
      email: 'martin@test.com',
      startDate: new Date(2023, 0, 1),
    },
    {
      id: 2,
      firstName: 'Enzo',
      lastName: 'Fernandez',
      course: 'Angular',
      email: 'enzo@test.com',
      startDate: new Date(2023, 2, 2),
    },
    {
      id: 3,
      firstName: 'Julian',
      lastName: 'Alvarez',
      course: 'ReactJS',
      email: 'julian@test.com',
      startDate: new Date(),
    }
  ]

  constructor() {
  }

  getStudentsPromise(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      if (this.students.length > 0) {
        resolve(this.students);
      } else {
        reject([{
          error: "Student list is empty"
        }]);
      }
    });
  }

  getStudentsObservable(): Observable<Student[]> {
    return new Observable<Student[]>((subscriber) => {
      setTimeout(() => {
        console.log("Simulating Fetching student list...")
        subscriber.next(this.students);
      }, 1000);

    })
  }
}
