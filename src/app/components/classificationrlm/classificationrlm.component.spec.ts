import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationrlmComponent } from './classificationrlm.component';

describe('ClassificationrlmComponent', () => {
  let component: ClassificationrlmComponent;
  let fixture: ComponentFixture<ClassificationrlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassificationrlmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassificationrlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
