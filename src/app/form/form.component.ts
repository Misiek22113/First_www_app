import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  studenci: Student[] = [
    // {id: 1, numerIndeksu: 1231456, imie: 'Jan', nazwisko: 'Kowalski', bieg: 'Łódź coś tam coś tam'},
    //itd.
  ]
  
  dodajStudenta(event: any){
    event.preventDefault();
    const daneStudenta = {
      id: this.studenci.length + 1,
      numerIndeksu: event.target.numerIndeksu.value,
      imie: event.target.imie.value,
      nazwisko: event.target.nazwisko.value,
      bieg: event.target.bieg.value
    }
    this.studenci.push(daneStudenta);
  }

  ngOnInit(): void {
  }

}
