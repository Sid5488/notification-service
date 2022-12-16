/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () => {
  it('should e able to craete a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');
  
    expect(content).toBeTruthy();
  });
  
  it('should not be able to create a notification content with less than 5 character', () => {
    expect(() => new Content('aaaa')).toThrow();
  });
  
  it('should not be able to create a notification content with more than 240 character', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
