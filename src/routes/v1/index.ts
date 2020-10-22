import { Router, RouterContext, Status } from "https://deno.land/x/oak/mod.ts";
import UsersService from "../../services/access/UsersService.ts";
import { response } from "../../helpers/response.ts";
import { User } from "../../interfaces/User.ts";

const router = new Router();

router
  .post("/signup", async (ctx: RouterContext) => {
    if (!ctx.request.hasBody) {
      ctx.throw(Status.BadRequest, "Bad Request");
    }
    const body = ctx.request.body();

    let user: User;
    if (body.type !== "json") {
      ctx.throw(Status.BadRequest, "Bad Request");
    }

    user = await body.value;
    user.type = user.type || 0;

    const validate = await UsersService.findByEmail(user.email);
    if (validate.rowCount > 0) {
      ctx.response.status = 400;
      ctx.response.body = response(
        10000,
        "Email registrado",
      );
      return;
    }

    const result = await UsersService.create(user);
    ctx.response.body = response(
      10001,
      "Usuario creado correctamente",
      { data: { id: result.rows[0][0] } },
    );
  });

export default router;
