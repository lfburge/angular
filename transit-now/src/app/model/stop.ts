import { TransitData } from './transitdata';

export class Stop extends TransitData {
  stopId: string;
  stopCode: string;
  lat: string;
  lon: string;
  zone: string;
  url: string;
  locationType: string;
}
