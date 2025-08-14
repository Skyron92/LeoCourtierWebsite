import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPanel } from './project-panel';

describe('ProjectPanel', () => {
  let component: ProjectPanel;
  let fixture: ComponentFixture<ProjectPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
