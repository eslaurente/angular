import { RecipeManagerAppPage } from './app.po';

describe('recipe-manager-app App', () => {
  let page: RecipeManagerAppPage;

  beforeEach(() => {
    page = new RecipeManagerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
