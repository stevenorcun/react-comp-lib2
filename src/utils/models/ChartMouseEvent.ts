export interface ChartMouseEvent {
  activeCoordinate: {
    x: number;
    y: number;
  };
  activeLabel: number;
  activePayload: [unknown];
  activeTooltipIndex: number;
  chartX: number;
  chartY: number;
}
