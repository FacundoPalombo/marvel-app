import { createHash as createHash } from "crypto";

// This utility creates the params for authorization in the api for marvel for server requests, more info: https://developer.marvel.com/documentation/authorization
export default function createParams() {
  const privateKey = process.env.API_PRIVATE_KEY!;
  const apikey = process.env.API_PUBLIC_KEY!;
  const ts = Date.now().toString();

  const fullStr = ts + privateKey + apikey;

  const hash = createHash("md5").update(fullStr).digest("hex");

  return { hash, ts, apikey };
}
