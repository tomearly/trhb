import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocubeComponent } from './photocube.component';

describe('PhotocubeComponent', () => {
  let component: PhotocubeComponent;
  let fixture: ComponentFixture<PhotocubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotocubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotocubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
