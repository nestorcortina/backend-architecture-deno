import { PoolClient } from "https://deno.land/x/postgres@v0.4.5/client.ts";
import { pool } from "../../database/pgPool.ts";
import { User } from "../../interfaces/User.ts";

export default class UsersService {
  public static async create(user: User): Promise<any> {
    const { name, email, password, type } = user;

    const client: PoolClient = await pool.connect();
    const result = await client.query(
      `INSERT INTO public.usuarios
      (nombre, email, "password", tipo) 
      VALUES ($1,$2,$3,$4) RETURNING id;`,
      name,
      email,
      password,
      type,
    );
    client.release();
    return result;
  }

  public static async findByEmail(email: string): Promise<any> {
    const client: PoolClient = await pool.connect();
    const result = await client.query(
      `SELECT id, nombre, "password", email FROM usuarios WHERE email = $1`,
      email,
    );
    client.release();
    return result;
  }
}
