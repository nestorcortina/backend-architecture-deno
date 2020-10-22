import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "denon run --allow-net --allow-read --allow-env src/server.ts",
      desc: "run my server.ts file",
      env: env(),
    },
  },
};

export default config;
