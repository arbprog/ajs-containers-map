import ErrorRepository from '../app';

test('Создание репозитория', () => {
  const result = new Map();
  result.set('code', 'text');

  const eRepo = new ErrorRepository();
  eRepo.add('code', 'text');
  expect(result).toEqual(eRepo.errors);
});

test('Чтение ошибки', () => {
  const repo = new ErrorRepository();
  repo.add(400, 'Некорректный запрос');

  const result = 'Некорректный запрос';
  expect(result).toEqual(repo.translate(400));
});
