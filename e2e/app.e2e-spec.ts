import { SchemaFormsPage } from './app.po';

describe('schema-forms App', () => {
  let page: SchemaFormsPage;

  beforeEach(() => {
    page = new SchemaFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
