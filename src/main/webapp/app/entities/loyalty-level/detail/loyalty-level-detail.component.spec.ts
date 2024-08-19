import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { LoyaltyLevelDetailComponent } from './loyalty-level-detail.component';

describe('LoyaltyLevel Management Detail Component', () => {
  let comp: LoyaltyLevelDetailComponent;
  let fixture: ComponentFixture<LoyaltyLevelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyLevelDetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: LoyaltyLevelDetailComponent,
              resolve: { loyaltyLevel: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(LoyaltyLevelDetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyLevelDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load loyaltyLevel on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', LoyaltyLevelDetailComponent);

      // THEN
      expect(instance.loyaltyLevel()).toEqual(expect.objectContaining({ id: 123 }));
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
