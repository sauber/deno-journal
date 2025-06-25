/** Storable values */
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

/** A storable object */
export type JSONObject = {
  [key: string]: JSONValue;
};

/** Name of asset */
export type AssetName = string;

/** Multiple asset names */
export type AssetNames = Set<AssetName>;
