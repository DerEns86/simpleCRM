import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogUserComponent } from './edit-dialog-user.component';

describe('EditDialogUserComponent', () => {
  let component: EditDialogUserComponent;
  let fixture: ComponentFixture<EditDialogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDialogUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
