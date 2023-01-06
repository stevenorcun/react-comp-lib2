import { CanImplementHistogramState } from "@/store/shared/histogram";
import { CanImplementTimelineState } from "@/store/shared/timeline";
import { ConnectionProps } from "./ConnectionProps";
import { AnnotationDto } from "@/API/DataModels/Entities/AnnotationEntity";

import {
  EntityDto,
  GraphEntityProperties,
} from "@/API/DataModels/Database/NovaObject";

export enum GraphLayout {
  Free = "FREE",
  Hierarchically = "HIERARCHICALLY",
  Grid = "GRID",
  Circular = "CIRCULAR",
  Star = "STAR",
  Linear = "LINEAR",
  Fadette = "FADETTE",
  Elbow = "ELBOW",
  EntityType = "ENTITY_TYPE",
  PropertyType = "PROPERTY_TYPE",
}

export interface GraphState
  extends CanImplementHistogramState,
    CanImplementTimelineState {
  selection: string[];
  focusedEntityId: string | null;
  graphLayout: GraphLayout;
  entities: EntityDto[];
  entityGraphPropertiesMap: { [entityId: string]: GraphEntityProperties };
  // fixme: Once we have a real Connection Dto (from/toPos aren't going to be in it)
  connections: Array<ConnectionProps>;
  selectedConnections: Array<any>;
  graphScale: number;
  graphOrigin: { x: number; y: number };
  graphRect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  isActivePalette: boolean;
  isGridLayoutArrowDisplayed: boolean;
  positionArrowGraph: { x: number; y: number } | null;
  horizontalMargin: number;
  verticalMargin: number;
  annotations: { [id: string]: AnnotationDto };
  selectedAnnotations: { [id: string]: boolean };
  isPlayingTransition: boolean;

  // used to draw an arrow while dragging a Pin
  isDraggingSrcPinPos: { x: number; y: number } | null;
  mousePos: { x: number; y: number };

  currentFill: string;
  currentStroke: string;
  currentFont: string;
  currentSizeFont: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: string;
  textColorAnnotation: string;
  thicknessAnnotation: string;

  currenColorObject: number;

  // Fit to view only on the first ever load
  isGraphRectInitialized: boolean;
  isOverviewInitialized: boolean;
}
