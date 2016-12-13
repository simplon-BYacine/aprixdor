import { NgAprixdorPage } from './app.po';

describe('ng-aprixdor App', function() {
  let page: NgAprixdorPage;

  beforeEach(() => {
    page = new NgAprixdorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
