import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashNatsComponent } from './wash-nats.component';

describe('WashNatsComponent', () => {
  let component: WashNatsComponent;
  let fixture: ComponentFixture<WashNatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashNatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashNatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
