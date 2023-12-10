import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopoNavbarComponent } from './topo-navbar.component';

describe('TopoNavbarComponent', () => {
  let component: TopoNavbarComponent;
  let fixture: ComponentFixture<TopoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopoNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
