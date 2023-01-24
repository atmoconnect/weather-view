import { WeatherResource } from '../../services/webCall';
import { OverlayState, OverlayTypes, OverlayAction } from '../overlay/overlayReducer';
import './portal.scss';

export function Portal(props: PortalProps): JSX.Element {
  return (
    <object className='Portal' type="text/html" data={props.selectedResource.address}></object>
  );
}

interface PortalProps {
  selectedResource: WeatherResource,
  state: OverlayState,
  dispatch: React.Dispatch<[type: OverlayTypes, action: OverlayAction]>
}