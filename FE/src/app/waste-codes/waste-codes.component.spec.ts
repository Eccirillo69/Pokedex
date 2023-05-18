import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteCodesComponent } from './waste-codes.component';

describe('WasteCodesComponent', () => {
  let component: WasteCodesComponent;
  let fixture: ComponentFixture<WasteCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
