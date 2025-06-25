# Journal

Store revisions of named assets in folders in filesystem.

## Examples

```typescript
import { DiskBackend } from "jsr:@sauber/journal";

const path = "./myrepo";
const repo = new DiskBackend(path);
```
