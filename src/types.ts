/** Storable values */
export type StorableValue =
  | string
  | number
  | boolean
  | null
  | StorableValue[]
  | { [key: string]: StorableValue };

/** A storable object */
export type StorableObject = {
  [key: string]: StorableValue;
};

/** Name of asset */
export type AssetName = string;

/** Multiple asset names */
export type AssetNames = Set<AssetName>;
