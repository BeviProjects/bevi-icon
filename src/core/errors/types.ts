export type IconErrorType = {
	type: "not-found" | "invalid-variant" | "fetch-failed" | "parse-failed";
	message: string;
	details?: string;
};
