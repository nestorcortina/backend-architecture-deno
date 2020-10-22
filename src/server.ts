import { bold, yellow } from "https://deno.land/std@0.73.0/fmt/colors.ts";
import { port } from "./config.ts";
import app from "./app.ts";

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    bold("Start listening on ") + yellow(`${hostname}:${port}`),
  );
});

await app.listen({ hostname: "127.0.0.1", port });
console.log(bold("Finished."));
