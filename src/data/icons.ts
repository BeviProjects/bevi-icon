import type { Icon } from "@type/icon";
import { v1_0 } from "./v1.0";
import { v1_1 } from "./v1.1";
import { v1_2 } from "./v1.2";
import { v1_3 } from "./v1.3";
import { v2_0 } from "./v2.0";
import { v2_1 } from "./v2.1";

export const icons = [
	...v1_0,
	...v1_1,
	...v1_2,
	...v1_3,
	...v2_0,
	...v2_1,
] as const satisfies readonly Icon[];

// v1.1 2023-02-1
// v1.2 - 2023-04-25
