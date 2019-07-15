import { TransitData } from './transitdata';
import { Stop } from './stop';

export class Route extends TransitData {
  routeId: string;
  longName: string;
//  routeType: string; defined as type in route.json
  url: string;
  lstStopsOut: Stop[];
  lstStopsBack: Stop[];
}
