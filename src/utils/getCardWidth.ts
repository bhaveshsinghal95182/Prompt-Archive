import { CardWidth } from '../types';

export function getCardWidth(width: CardWidth): string {
  const widths = {
    small: 'clamp(280px, 30vw, 300px)',
    medium: 'clamp(300px, 40vw, 400px)',
    large: 'clamp(320px, 50vw, 500px)'
  };
  
  return widths[width];
}