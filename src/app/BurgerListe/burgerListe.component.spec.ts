import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerListeComponent } from './burgerListe.component';

describe('BurgerListeComponent', () => {
  let component: BurgerListeComponent;
  let fixture: ComponentFixture<BurgerListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});