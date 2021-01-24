import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyStructureComponent } from './family-structure.component';

describe('FamilyStructureComponent', () => {
  let component: FamilyStructureComponent;
  let fixture: ComponentFixture<FamilyStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
