import { WeatherResource } from "../../services/webCall";

export const initialState: OverlayState = {
  weatherResources: [],
  selectedResource: null,
};

export function overlayReducer(state: OverlayState, [type, action]: [type: OverlayTypes, action: OverlayAction]): OverlayState {
  switch (type) {
    case 'updateResources':
      return { ...state, weatherResources: action.weatherResources };
    case 'selectResource':
      return { ...state, selectedResource: state.weatherResources.find(resource=> resource.id === action.selectedResourceId) };
    default:
      return state;
  }
}

export interface OverlayState {
  weatherResources: Array<WeatherResource>,
  selectedResource: WeatherResource,
}

export interface OverlayAction {
  weatherResources?: Array<WeatherResource>,
  selectedResourceId?: Number,
}

export type OverlayTypes = 'updateResources' | 'selectResource'