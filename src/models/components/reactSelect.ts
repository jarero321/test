/* eslint-disable no-unused-vars */
interface ReactSelectInterface {
  options?: SelectOption[];
  noOptionsMessage?: string;
  defaultValue?: SelectOption;
  isSearchable?: boolean;
  value?: SelectOption;
  error?: boolean;
  onChange(value: SelectOption | null): void;
  placeholder?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

export type { ReactSelectInterface, SelectOption };
