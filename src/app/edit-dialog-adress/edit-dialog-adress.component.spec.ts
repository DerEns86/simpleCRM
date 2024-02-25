import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogAdressComponent } from './edit-dialog-adress.component';

describe('EditDialogAdressComponent', () => {
  let component: EditDialogAdressComponent;
  let fixture: ComponentFixture<EditDialogAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDialogAdressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDialogAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
