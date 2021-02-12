import { Application } from "https://deno.land/x/oak@v6.3.1/application.ts";
import {
  blue,
  green,
  yellow,
} from "https://deno.land/std@0.85.0/fmt/colors.ts";

import { port } from "./config/config.ts";
import loaders from "./loaders/index.ts";
import Logger from "./helpers/logger.ts";

const app = new Application();

await loaders({ oakApp: app });

app.addEventListener("listen", ({ hostname, port }) => {
  Logger.info(
    `${yellow("########################################################")}
🛡️  ${green(`Server ${blue(hostname + "")} listening on port:`)} ${
      blue(port + "")
    } 🛡️
${yellow("########################################################")}`,
  );
});

await app.listen({ hostname: "127.0.0.1", port });
