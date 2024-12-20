export type CardWidth = 'small' | 'medium' | 'large';

export interface Prompt {
  text: string;
  category: string;
  width: CardWidth;
}