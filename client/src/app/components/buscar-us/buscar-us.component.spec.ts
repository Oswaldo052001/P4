import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUsComponent } from './buscar-us.component';

describe('BuscarUsComponent', () => {
  let component: BuscarUsComponent;
  let fixture: ComponentFixture<BuscarUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
