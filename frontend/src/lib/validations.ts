import * as zod from "zod";

export const email = zod.string().email();
export const password = zod.string().min(8).max(100);
// ... other validations
