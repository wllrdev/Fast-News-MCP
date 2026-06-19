#!/usr/bin/env node
// Thin local wrapper that bridges stdio <-> the Fast News remote MCP server.
// Run via `npx @wllrdev/fast-news-mcp` with RAPIDAPI_KEY in the environment.

import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const apiKey = process.env.RAPIDAPI_KEY;
if (!apiKey) {
  console.error("Error: RAPIDAPI_KEY environment variable is required.");
  console.error("Get a key at https://rapidapi.com/SemicolonBandit/api/fast-news-with-previews");
  process.exit(1);
}

// mcp-remote is ESM-only; resolve its proxy binary (declared as `bin` in its package.json).
const require = createRequire(import.meta.url);
const proxy = require.resolve("mcp-remote/dist/proxy.js");

const child = spawn(
  process.execPath,
  [
    proxy,
    "https://mcp.rapidapi.com",
    "--header",
    "x-api-host: fast-news-with-previews.p.rapidapi.com",
    "--header",
    `x-api-key: ${apiKey}`,
  ],
  { stdio: "inherit" }
);

child.on("exit", (code) => process.exit(code ?? 1));
