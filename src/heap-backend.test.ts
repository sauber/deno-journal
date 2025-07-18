import { assertEquals, assertInstanceOf, assertLess } from "@std/assert";
import { HeapBackend } from "./heap-backend.ts";
import type { AssetName, AssetNames, StorableObject } from "./types.ts";

const name: AssetName = "foo";
const data: StorableObject = { name: "bar" };

Deno.test("Initialization", () => {
  const repo: HeapBackend = new HeapBackend();
  assertInstanceOf(repo, HeapBackend);
});

Deno.test("Create", async () => {
  const repo: HeapBackend = new HeapBackend();
  const names = await repo.names();
  assertEquals(names.size, 0);
});

Deno.test("Store and Retrieve Asset", async () => {
  const repo: HeapBackend = new HeapBackend();

  const result = await repo.store(name, data);
  assertEquals(result, undefined);
  const names: AssetNames = await repo.names();
  assertEquals(names.size, 1);
  assertEquals(names, new Set<AssetName>([name]));

  const investor: StorableObject = await repo.retrieve(name);
  assertEquals(investor, data);

  const age: number = await repo.age(name);
  assertLess(age, 10);
});
