import OpenAI from 'openai';
import { ChatCompletion } from 'openai/resources';

export class OpenAIProvider {
  private openai: OpenAI;

  constructor(private readonly accessKey: string) {
    this.openai = new OpenAI({ apiKey: this.accessKey });
  }

  async createCompletion(prompt: string): Promise<ChatCompletion> {
    const response = await this.openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    return response;
  }
}
