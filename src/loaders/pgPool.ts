import { Pool } from "https://deno.land/x/postgres/mod.ts";
import { pgDatabase, pgHost, pgPassword, pgPort, pgUser } from "../config/config.ts";

const POOL_CONNECTIONS = 5;
const poolConfig = {
  user: pgUser,
  password: pgPassword,
  database: pgDatabase,
  hostname: pgHost,
  port: pgPort,
};

export const pool = new Pool(poolConfig, POOL_CONNECTIONS);
