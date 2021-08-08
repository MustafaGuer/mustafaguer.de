import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsJavascriptComponent } from './projects-javascript.component';

describe('ProjectsJavascriptComponent', () => {
  let component: ProjectsJavascriptComponent;
  let fixture: ComponentFixture<ProjectsJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
