import { assertEquals } from "@std/assert";
import { mktmpdir, rmdir } from "./files.ts";
import { YamlBackend } from "./yaml-backend.ts";
import type { Backend } from "./backend.ts";

Deno.test("Yaml test", async () => {
  const tmppath = await mktmpdir();
  const backend: Backend = new YamlBackend(tmppath);
  const assetname = "testfile";
  const save = { foo: "bar", n: 1 };
  await backend.store(assetname, save);
  const stored: boolean = await backend.has(assetname);
  assertEquals(stored, true);
  const load = await backend.retrieve(assetname);
  assertEquals(load, save);
  await rmdir(tmppath);
});
