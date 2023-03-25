import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScFormComponent } from './sc-form.component';

describe('ScFormComponent', () => {
  let component: ScFormComponent;
  let fixture: ComponentFixture<ScFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
