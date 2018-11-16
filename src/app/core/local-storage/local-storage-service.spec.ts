import { LocalStorage } from 'src/app/core/local-storage/local-storage.service';

describe ('localStorage', () => {

  let localStorageService: LocalStorage;
  beforeEach(() => {
    localStorageService =  new LocalStorage('browser');

    localStorageService.clear();
  });

it('should store the objectg and get the same object', () => {

  const index = 'test';
  const value = { test: 'value' };

  localStorageService.setItem(index, value);

  const result = localStorageService.getItem(index);
  expect(result).toEqual(value);
});
})
