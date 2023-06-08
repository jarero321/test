interface Colors {
  /**
   *  Paleta de colores usada en este proyecto
   */
  colors?:
    | 'primary-color'
    | 'primary-gray'
    | 'secondary-gray'
    | 'secondary'
    | 'pending'
    | 'canceled'
    | 'complete'
    | string;
}

interface Sizes {
  /**
   *  Estos son los tamaños definidos para este proyecto
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
}

export type { Colors, Sizes };
