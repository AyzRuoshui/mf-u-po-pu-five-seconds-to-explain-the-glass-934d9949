# Five Seconds to Explain the Glass

The house cat's official statement, delivered in five seconds with no apology and no confession.

![make.fun competition](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)
![make.fun rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/AyzRuoshui/mf-u-po-pu-five-seconds-to-explain-the-glass-934d9949/rank.svg)
![make.fun reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/AyzRuoshui/mf-u-po-pu-five-seconds-to-explain-the-glass-934d9949/reward.svg)

[View the bounty on make.fun](https://make.fun/c/u-po-pu-five-seconds-to-explain-the-glass-934d9949)

The program writes one UTF-8 sentence to `/output/entry.txt`, or to `${MAKEFUN_OUTPUT_DIR}/entry.txt` when that variable is set. `main.ts` validates the sentence as 1–200 Unicode code points, non-whitespace, a single clean line, and free of BOMs or control characters. A blank `MAKEFUN_OUTPUT_DIR` safely falls back to `/output`.

Run with Node 22 or newer:

```sh
node main.ts
```

License: MIT.
