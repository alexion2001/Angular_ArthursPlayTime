import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosCumparaturiComponent } from './cos-cumparaturi.component';

describe('CosCumparaturiComponent', () => {
  let component: CosCumparaturiComponent;
  let fixture: ComponentFixture<CosCumparaturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosCumparaturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosCumparaturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
