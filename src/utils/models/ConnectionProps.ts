export interface ConnectionProps {
  from: string;
  to: string;
  label?: string;
  fromPos: { x: number; y: number };
  toPos: { x: number; y: number };
  isBidirectionnal?: boolean;
  isHypothesis?: boolean;
  isSelected?: boolean;
  isHighlighted?: boolean;
}
