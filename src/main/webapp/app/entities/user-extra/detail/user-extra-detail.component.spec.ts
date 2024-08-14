import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { UserExtraDetailComponent } from './user-extra-detail.component';

describe('UserExtra Management Detail Component', () => {
  let comp: UserExtraDetailComponent;
  let fixture: ComponentFixture<UserExtraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExtraDetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: UserExtraDetailComponent,
              resolve: { userExtra: () => of({ id: 'ABC' }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(UserExtraDetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExtraDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load userExtra on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', UserExtraDetailComponent);

      // THEN
      expect(instance.userExtra()).toEqual(expect.objectContaining({ id: 'ABC' }));
    });
  });

  describe('PreviousState', () => {
    it('Should navigate to previous state', () => {
      jest.spyOn(window.history, 'back');
      comp.previousState();
      expect(window.history.back).toHaveBeenCalled();
    });
  });
});
