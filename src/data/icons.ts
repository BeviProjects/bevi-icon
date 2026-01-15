import type { Icon } from '@type/icon'
import { v1_0 } from "./v1.0";
import { v1_1 } from "./v1.1";

export const icons = [
	...v1_0,
	...v1_1,
] as const satisfies readonly Icon[]

	// v1.1 2023-02-1
	// v1.2 - 2023-04-25
