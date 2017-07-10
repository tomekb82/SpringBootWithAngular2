import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundledComponent } from './bundled.component';

describe('BundledComponent', () => {
  let component: BundledComponent;
  let fixture: ComponentFixture<BundledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
