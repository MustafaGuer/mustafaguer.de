import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAngularComponent } from './projects-angular.component';

describe('ProjectsAngularComponent', () => {
  let component: ProjectsAngularComponent;
  let fixture: ComponentFixture<ProjectsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
