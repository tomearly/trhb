import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcubeComponent } from './contentcube.component';

describe('ContentcubeComponent', () => {
  let component: ContentcubeComponent;
  let fixture: ComponentFixture<ContentcubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentcubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
