import { useReducer, useEffect } from 'react';
import { getWeatherResources } from '../../services/webCall';
import { overlayReducer, initialState } from './overlayReducer';
import './overlay.scss';
import { Portal } from '../portal/portal';

export function Overlay(): JSX.Element {
  const [state, dispatch] = useReducer(overlayReducer, initialState);

  useEffect(() => {
    getWeatherResources().then(rslt => {
      if (rslt instanceof Array)
        dispatch(['updateResources', { weatherResources: rslt }]);
    });
  }, []);

  function selectResource(selectedResourceId: Number) {
    dispatch(['selectResource', { selectedResourceId }]);
  }

  return (
    <div className='Overlay'>
      <div>
        <select onChange={(e) => selectResource(Number(e.currentTarget.selectedOptions[0].id))}>
          <option id=""></option>
          {
            state.weatherResources.map(resource => {
              return <option key={resource.id.toString()} id={resource.id.toString()}>{resource.name}</option>
            })
          }
        </select>
      </div>
      {
        state.selectedResource &&
          <Portal selectedResource={state.selectedResource} state={state} dispatch={dispatch} />
      }
    </div>
  );
}