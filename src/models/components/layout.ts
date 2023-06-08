import { FCWC } from '@/models';

export interface LayoutInterface extends FCWC {
  /**
   *  ¿La vista tiene un sideBar?
   */
  sideBar?: JSX.Element;

  width?: string;

  isAContainer?: boolean;
}
