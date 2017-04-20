import { DhanaiFruitsCompanyPage } from './app.po';

describe('dhanai-fruits-company App', () => {
  let page: DhanaiFruitsCompanyPage;

  beforeEach(() => {
    page = new DhanaiFruitsCompanyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yo works!');
  });
});
