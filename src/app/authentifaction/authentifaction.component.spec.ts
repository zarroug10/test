import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifactionComponent } from './authentifaction.component';

describe('AuthentifactionComponent', () => {
  let component: AuthentifactionComponent;
  let fixture: ComponentFixture<AuthentifactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentifactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentifactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
