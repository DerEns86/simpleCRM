import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogUserComponent } from './add-dialog-user.component';

describe('AddDialogUserComponent', () => {
  let component: AddDialogUserComponent;
  let fixture: ComponentFixture<AddDialogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDialogUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
