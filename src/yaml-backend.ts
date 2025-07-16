import { DiskBackend, type Serializer } from "./disk-backend.ts";
import * as YAML from "@std/yaml";

/** Stores assets as YAML files */
export class YamlBackend extends DiskBackend {
  protected override formatter: Serializer = YAML;
  protected override ext: string = "yaml";
}
