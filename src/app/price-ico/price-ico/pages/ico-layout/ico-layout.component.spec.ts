import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoLayoutComponent } from './ico-layout.component';

describe('IcoLayoutComponent', () => {
  let component: IcoLayoutComponent;
  let fixture: ComponentFixture<IcoLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcoLayoutComponent]
    });
    fixture = TestBed.createComponent(IcoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
