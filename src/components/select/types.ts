export type SelectProps<T> = {
  defaultItem: T;
  keyValue: keyof T;
  renderValue: keyof T;
  items: Array<T>;
};
