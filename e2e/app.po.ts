import { browser, element, by } from 'protractor';

export class DhanaiFruitsCompanyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yo-root h1')).getText();
  }
}
