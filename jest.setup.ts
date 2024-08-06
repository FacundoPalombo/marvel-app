import "@testing-library/jest-dom";
import "jest-fetch-mock";

import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

process.env.API_PUBLIC_KEY = "public";
process.env.API_PRIVATE_KEY = "private";
