import { v4 as uuidV4 } from 'uuid';

export class Message {
  public id: string;
  public text: string;
  public isUser: boolean;
  public createdAt: Date;

  constructor(input: Partial<Message>) {
    this.id = input.id || uuidV4();
    this.text = input.text || '';
    this.isUser = input.isUser || false;
    this.createdAt = input.createdAt || new Date();
  }
}
