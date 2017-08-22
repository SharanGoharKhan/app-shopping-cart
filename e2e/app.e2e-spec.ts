import { AppShoppingCartPage } from './app.po';

describe('app-shopping-cart App', () => {
  let page: AppShoppingCartPage;

  beforeEach(() => {
    page = new AppShoppingCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
