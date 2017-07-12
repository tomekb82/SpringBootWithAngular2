import { PhotoAppPage } from './app.po';

describe('photo-app App', () => {
  let page: PhotoAppPage;

  beforeEach(() => {
    page = new PhotoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
