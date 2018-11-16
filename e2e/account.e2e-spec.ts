import  {browser, ExpectedConditions, $} from 'protractor';

describe ('account', () => {

  it('should register and login succesfully', async () => {

    const email = '${Date.now()}@test.com';
    const password = 'test';

    await browser.get('/account/register');

    await $('input[type="email"]').sendKeys(email);
    await $('input[type="password"]').sendKeys(password);
    await $('input[type="submit"]').submit();

    await browser.wait(ExpectedConditions.urlContains('/account/login'), 10000);

    await $('input[type="email"]').sendKeys(email);
    await $('input[type="password"]').sendKeys(password);
    await $('input[type="submit"]').submit();

    await browser.wait(ExpectedConditions.urlContains('/account/profile'), 10000);
  })})
