import { blue, green, red } from "https://deno.land/std@0.85.0/fmt/colors.ts";

import oakLoader from "./oak.ts";
import Logger from "../helpers/logger.ts";
import { Loaders, PreLoaders } from "../interfaces/server.interfaces.ts";

export default async (): Promise<Loaders> => {
  Logger.info(blue("Loading configuration... 💻"));

  const loaders: PreLoaders = {
    oakApp: undefined,
  };

  try {
    loaders.oakApp = oakLoader();
    Logger.info(green("Oak loaded ✌️"));
  } catch (error) {
    Logger.error(red("error loading Oak"), error);
    throw error;
  }

  return loaders as Loaders;
};
