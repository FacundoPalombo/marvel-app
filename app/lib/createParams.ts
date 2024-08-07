import { createHash as createHash } from "crypto";

// This utility creates the params for authorization in the api for marvel for server requests, more info: https://developer.marvel.com/documentation/authorization
export default function createParams() {
  const privateKey = process.env.API_PRIVATE_KEY!;
  const apikey = process.env.API_PUBLIC_KEY!;
  const today = new Date();

  //? Here the marvel api say that this should be a dynamic variable, but i will let this for a while, for practicity on handling the cache automatically.
  // The funny part, this should set a custom cache control mechanism in 1 day
  const ts = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDay(),
    1,
    44,
    44
  )
    .getTime()
    .toString();

  const fullStr = ts + privateKey + apikey;

  const hash = createHash("md5").update(fullStr).digest("hex");

  return { hash, ts, apikey };
}
