import { By } from '@angular/platform-browser';

export class Selectors {
  static byId = (id: string) => By.css(`#${id}`);
}
