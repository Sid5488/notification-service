/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should e able to craete a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });
  
    expect(notification).toBeTruthy();
  });
});
