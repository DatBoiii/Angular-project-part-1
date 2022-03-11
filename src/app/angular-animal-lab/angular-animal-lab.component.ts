import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal'

import { ANIMALS } from '../mock-animals'

@Component({
  selector: 'app-angular-animal-lab',
  templateUrl: './angular-animal-lab.component.html',
  styleUrls: ['./angular-animal-lab.component.css']
})
export class AngularAnimalLabComponent implements OnInit {

  animals = ANIMALS;

  selectedAnimal?: Animal;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
    alert(animal.name);
  }
}
