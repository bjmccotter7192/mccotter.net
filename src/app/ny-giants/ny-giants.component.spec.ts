import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyGiantsComponent } from './ny-giants.component';

describe('NyGiantsComponent', () => {
  let component: NyGiantsComponent;
  let fixture: ComponentFixture<NyGiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyGiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyGiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
