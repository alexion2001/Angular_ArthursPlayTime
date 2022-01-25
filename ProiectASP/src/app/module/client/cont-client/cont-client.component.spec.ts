import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContClientComponent } from './cont-client.component';

describe('ContClientComponent', () => {
  let component: ContClientComponent;
  let fixture: ComponentFixture<ContClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
