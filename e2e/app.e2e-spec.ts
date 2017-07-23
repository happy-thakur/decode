import { DecodePage } from './app.po';

describe('decode App', () => {
  let page: DecodePage;

  beforeEach(() => {
    page = new DecodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
