# Journal

Store revisions of named assets in folders in filesystem.

## Testing

Enable reading and writing when running tests

```console
~$ deno test --allow-write --allow-read
[...]
ok | 15 passed (3 steps) | 0 failed (446ms)
```

## Examples

```typescript
import { DiskBackend } from "jsr:@sauber/journal";

const assetname = "foo";
const content = { name: "bar" };

const path = "./myrepo";
const repo = new DiskBackend(path);

// Global asset
await repo.store(assetname, content);
const loaded = await repo.retrieve(assetname);
```
