import type { Icon } from "@type/icon";

export const icons = [
	// v1.0
	{
		id: "account-box",
		name: "Account box",
		displayName: "accountBox",
		status: "active",
		tags: ["people", "person", "user", "account"],
		variants: {
			variant: ["solid", "duo", "dark", "light"],
			weight: [400],
		},
		metadata: {
			createdAt: "2023-02-13",
			updatedAt: "2023-02-13",
			addedIn: "1.0.0",
			updatedIn: "1.0.0",
		},
	},
	{
		id: "agriculture",
		name: "Agriculture",
		displayName: "agriculture",
		status: "active",
		tags: ["tractor", "car"],
		variants: {
			variant: ["solid", "duo", "dark", "light"],
			weight: [400],
		},
		metadata: {
			createdAt: "2023-02-13",
			updatedAt: "2023-02-13",
			addedIn: "1.0.0",
			updatedIn: "1.0.0",
		},
	},
	{
		id: "arrow-circle-right",
		name: "Arrow circle right",
		displayName: "arrowCircleRight",
		status: "active",
		tags: ["arrow", "circle", "right"],
		variants: {
			variant: ["solid", "duo", "dark", "light"],
			weight: [400],
		},
		metadata: {
			createdAt: "2023-02-13",
			updatedAt: "2023-02-13",
			addedIn: "1.0.0",
			updatedIn: "1.0.0",
		},
  },
	// v1.1
	{
		id: "alternate-email",
		name: "Alternate e-mail",
		displayName: "alternateEmail",
		status: "active",
		tags: ["email", "@", "at"],
		variants: {
			variant: ["solid", "duo", "dark", "light"],
			weight: [400],
		},
		metadata: {
			createdAt: "2023-02-10",
			updatedAt: "2023-02-10",
			addedIn: "1.0.0",
			updatedIn: "1.0.0",
		},
	},
	{
		id: "agriculture",
		name: "Agriculture",
		displayName: "agriculture",
		status: "active",
		tags: ["tractor", "car"],
		variants: {
			variant: ["solid", "duo", "dark", "light"],
			weight: [400],
		},
		metadata: {
			createdAt: "2023-02-10",
			updatedAt: "2023-02-10",
			addedIn: "1.0.0",
			updatedIn: "1.0.0",
		},
  },
	// v1.2 - 2023-04-25
] as const satisfies readonly Icon[];
