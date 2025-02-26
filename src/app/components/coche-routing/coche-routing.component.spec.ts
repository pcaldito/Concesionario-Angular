import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheRoutingComponent } from './coche-routing.component';

describe('CocheRoutingComponent', () => {
  let component: CocheRoutingComponent;
  let fixture: ComponentFixture<CocheRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocheRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
