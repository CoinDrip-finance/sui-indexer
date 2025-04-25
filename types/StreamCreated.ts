import { Segment } from './Segment';

export interface StreamCreated {
  stream_id: string;
  sender: string;
  amount: string;
  start_time: string;
  end_time: string;
  token: string;
  cliff: string;
  segments: Segment[];
}