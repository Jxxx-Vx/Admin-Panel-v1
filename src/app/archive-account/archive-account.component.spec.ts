import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAccountComponent } from './archive-account.component';

describe('ArchiveAccountComponent', () => {
  let component: ArchiveAccountComponent;
  let fixture: ComponentFixture<ArchiveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
