import { FCWC } from '../react';
import { Colors } from './ui';

interface TypographyInterface extends FCWC, Colors {
  size?: string;
  /**
   *  ¿El texto es un titulo o un texto de pagina?
   */
  type?: 'body' | 'headlines';
  /**
   *  Opcion para poder agregarle estilos y hacerlo mas especifico
   */
  className?: string;
}

export type { TypographyInterface };
