import { SeaManagerPage } from './app.po';

describe('sea-manager App', () => {
  let page: SeaManagerPage;

  beforeEach(() => {
    page = new SeaManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
