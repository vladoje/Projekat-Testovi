import { Pool, QueryResult, QueryResultRow } from "pg";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[],
): Promise<QueryResult<T>> {
  return pool.query<T>(text, params);
}
