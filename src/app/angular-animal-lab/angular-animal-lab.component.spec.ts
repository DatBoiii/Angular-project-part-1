import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimalLabComponent } from './angular-animal-lab.component';

describe('AngularAnimalLabComponent', () => {
  let component: AngularAnimalLabComponent;
  let fixture: ComponentFixture<AngularAnimalLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAnimalLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimalLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
