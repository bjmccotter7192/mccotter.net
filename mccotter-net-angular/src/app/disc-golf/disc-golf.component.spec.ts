import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscGolfComponent } from './disc-golf.component';

describe('DiscGolfComponent', () => {
  let component: DiscGolfComponent;
  let fixture: ComponentFixture<DiscGolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscGolfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscGolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
