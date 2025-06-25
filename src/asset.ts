import type { JSONObject } from "./types.ts";
import type { Backend } from "./backend.ts";

/** An asset which can store or retrieve itself */
export class Asset<AssetType> {
  constructor(
    private readonly assetname: string,
    private readonly repo: Backend,
  ) {}

  /** Confirm if asset already exists */
  public exists(): Promise<boolean> {
    return this.repo.has(this.assetname);
  }

  /** Load content of asset */
  public async retrieve(): Promise<AssetType> {
    return (await this.repo.retrieve(this.assetname)) as AssetType;
  }

  /** Store content to asset */
  public store(content: AssetType): Promise<void> {
    return this.repo.store(this.assetname, content as JSONObject);
  }
}
