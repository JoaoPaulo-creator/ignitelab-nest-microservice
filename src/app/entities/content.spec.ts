import { Content } from './content';

describe('Notification content tests', () => {
  it('should create a notificaton content', () => {
    const content = new Content('Essa mensagem é um teste');
    expect(content).toBeTruthy();
  });

  /*
  test('It should not be possible to create a notificaton content with less than 5 characters', () => {
    const content = new Content('asd');
    expect(content).toBeTruthy();
  });
  */

  /*Outra maneira de escrever o código de teste */

  it('should not be able to create a notificaton content with less than 5 characters', () => {
    expect(() => new Content('asd')).toThrow();
  });

  it('should not be able to create a notificaton content greater than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
