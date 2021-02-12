import "https://deno.land/x/dotenv/load.ts";

export const environment = Deno.env.get("NODE_ENV");
export const port = Deno.env.get("PORT")
  ? parseInt(Deno.env.get("PORT") + "")
  : 9000;

export const pgUser = Deno.env.get("PGUSER");
export const pgPassword = Deno.env.get("PGPASSWORD");
export const pgHost = Deno.env.get("PGHOST");
export const pgDatabase = Deno.env.get("PGDATABASE");
export const pgPort = parseInt(Deno.env.get("PGPORT") + "");
