import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvScheme = z.object({
  NODE_ENV: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),

});

export type EnvScheme = z.infer<typeof EnvScheme>;

tryParseEnv(EnvScheme);

// eslint-disable-next-line node/no-process-env
export default EnvScheme.parse(process.env);
