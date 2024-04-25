import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontchangerComponent } from './fontchanger.component';

describe('FontchangerComponent', () => {
  let component: FontchangerComponent;
  let fixture: ComponentFixture<FontchangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontchangerComponent]
    });
    fixture = TestBed.createComponent(FontchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
