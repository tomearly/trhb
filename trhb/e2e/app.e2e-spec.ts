import { TrhbPage } from './app.po';

describe('trhb App', () => {
  let page: TrhbPage;

  beforeEach(() => {
    page = new TrhbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
