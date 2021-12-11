import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUsersComponent } from './contacts-users.component';

describe('ContactsUsersComponent', () => {
  let component: ContactsUsersComponent;
  let fixture: ComponentFixture<ContactsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
