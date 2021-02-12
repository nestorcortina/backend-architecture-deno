import { blue, green, red } from "https://deno.land/std@0.85.0/fmt/colors.ts";

import { pool } from "./pgPool.ts";
import oakLoader from "./oak.ts";
import Logger from "../helpers/logger.ts";

export default async ({ oakApp }: { oakApp: any }): Promise<void> => {
  Logger.info(blue("Loading configuration... 💻"));

  try {
    await pool.connect();
    Logger.info(green("PostgreSQL loaded and connected! ✌️"));
  } catch (error) {
    Logger.error(red("error loading or connecting PostgreSQL"), error);
    throw error;
  }

  try {
    await oakLoader({ app: oakApp });
    Logger.info(green("Express loaded ✌️"));
  } catch (error) {
    Logger.error(red("error loading Express"), error);
    throw error;
  }
};
