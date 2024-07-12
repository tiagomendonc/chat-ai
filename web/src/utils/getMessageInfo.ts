import dayjs from 'dayjs';
import { Message } from '../types/Message';

export const getMessageInfo = (message: Message) => {
  const { isUser, createdAt } = message;

  return isUser
    ? `You at ${dayjs(createdAt).get('hour')}:${dayjs(createdAt).get('minute')}`
    : `Replied at ${dayjs(createdAt).get('hour')}:${dayjs(createdAt).get(
        'minute'
      )}`;
};
