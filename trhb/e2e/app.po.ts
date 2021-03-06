import { browser, element, by } from 'protractor';

export class TrhbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getFooterText() {
    return element(by.id('footer-text')).getText();

    //Copyright TRHB Ltd 2017 (c)
  }
}
