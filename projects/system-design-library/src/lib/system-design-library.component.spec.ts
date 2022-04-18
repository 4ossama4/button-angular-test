import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDesignLibraryComponent } from './system-design-library.component';

describe('SystemDesignLibraryComponent', () => {
  let component: SystemDesignLibraryComponent;
  let fixture: ComponentFixture<SystemDesignLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDesignLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDesignLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
