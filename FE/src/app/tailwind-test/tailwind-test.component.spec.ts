import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindTestComponent } from './tailwind-test.component';

describe('TailwindTestComponent', () => {
  let component: TailwindTestComponent;
  let fixture: ComponentFixture<TailwindTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
