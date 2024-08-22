import { Directive, inject, Input, TemplateRef, ViewContainerRef, effect, computed } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';

@Directive({
  standalone: true,
  selector: '[jhiHasNotAuthority]',
})
export default class HasNotAuthorityDirective {
  @Input('jhiHasNotAuthority') authorities: string | string[] = [];

  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    const accountService = inject(AccountService);
    const currentAccount = accountService.trackCurrentAccount();
    const hasNoPermission = computed(() => {
      const accountAuthorities = currentAccount()?.authorities || [];
      const requiredAuthorities = Array.isArray(this.authorities) ? this.authorities : [this.authorities];
      return !requiredAuthorities.some(authority => accountAuthorities.includes(authority));
    });

    effect(
      () => {
        if (hasNoPermission()) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      },
      { allowSignalWrites: true },
    );
  }
}
