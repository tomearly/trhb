import { TrhbPage } from './app.po';

describe('trhb App', () => {
  let page: TrhbPage;

  beforeEach(() => {
    page = new TrhbPage();
  });

  it('Can load trhb ltd', () => {
    expect(page.navigateTo());
  });

  it('Get footer text', () => {
    page.navigateTo();
    expect(page.getFooterText()).toContain("Copyright TRHB Ltd");
  })
});
