import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctotDetailsUpdateComponent } from './doctot-details-update.component';

describe('DoctotDetailsUpdateComponent', () => {
  let component: DoctotDetailsUpdateComponent;
  let fixture: ComponentFixture<DoctotDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctotDetailsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctotDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
