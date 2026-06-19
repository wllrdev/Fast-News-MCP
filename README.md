# Fast News MCP Server

![npm version](https://img.shields.io/npm/v/@wllrdev/fast-news-mcp?logo=npm&logoColor=white)
![RapidAPI](https://img.shields.io/badge/RapidAPI-Fast_News_Previews-orange?logo=rapidapi&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Real-time news search, trending headlines, topic categories, and local news — exposed as MCP tools so your AI agent can query news in plain language. No HTTP boilerplate required.

The server is hosted by RapidAPI and connects via [`mcp-remote`](https://github.com/geelen/mcp-remote). All you need is a RapidAPI subscription and your API key.

## Demo

See the Fast News API in action: **[the-dispatcher-demo.vercel.app](https://the-dispatcher-demo.vercel.app/)**

## Get an API Key

1. Subscribe on [RapidAPI](https://rapidapi.com/SemicolonBandit/api/fast-news-with-previews) (free tier available)
2. Your API key appears on the **Endpoints** tab

Every request needs two headers:

| Header | Value |
|--------|-------|
| `x-rapidapi-key` | Your API key |
| `x-rapidapi-host` | `fast-news-with-previews.p.rapidapi.com` |

## Quick Start

**Prerequisites:** [Node.js](https://nodejs.org) (for `npx`) and a free [RapidAPI subscription](https://rapidapi.com/SemicolonBandit/api/fast-news-with-previews).

Add the following to your AI agent's MCP server configuration. Replace `YOUR-API-KEY` with your RapidAPI key.

```json
{
  "mcpServers": {
    "fast-news": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.rapidapi.com",
        "--header",
        "x-api-host: fast-news-with-previews.p.rapidapi.com",
        "--header",
        "x-api-key: YOUR-API-KEY"
      ]
    }
  }
}
```

> The `mcp-remote` package is installed automatically by `npx`. You don't need to install anything manually.

See the [per-agent setup instructions](#setup-for-your-ai-agent) below for client-specific details.

<details>
<summary><strong>Alternative: npm package (secondary option)</strong></summary>

> **Prefer the Quick Start above.** Use this only if your setup specifically benefits from a single published package.

This repository is also published as the npm package [`@wllrdev/fast-news-mcp`](https://www.npmjs.com/package/@wllrdev/fast-news-mcp). It's a thin wrapper around `mcp-remote` that reads your key from the `RAPIDAPI_KEY` environment variable instead of the command line:

```json
{
  "mcpServers": {
    "fast-news": {
      "command": "npx",
      "args": ["-y", "@wllrdev/fast-news-mcp"],
      "env": {
        "RAPIDAPI_KEY": "YOUR-API-KEY"
      }
    }
  }
}
```

</details>

## Available Tools

Once connected, your AI agent has access to these tools:

| Tool | Description |
|------|-------------|
| **search_news** | Search any topic with filters for language, country, and timeframe. Supports source diversity and built-in deduplication. |
| **advanced_search** | Like search_news but with post-fetch controls — include/exclude specific sources, require thumbnails, and change sort order. |
| **trending_headlines** | Top headlines auto-translated into 40+ languages. Optionally filter by country and timeframe. |
| **topic_categories** | Browse 11 predefined categories: world, national, business, technology, entertainment, sports, science, health, politics, economy, environment. Combine two categories in one request. |
| **local_news** | News about a specific city, region, or area. |

For full parameter documentation, see the [API reference](https://docs.marvelousapi.com/apis/fastnews/docs/endpoints/news).

## Setup for Your AI Agent

Find your client below and expand it for setup steps.

<details>
<summary><strong>Claude Code</strong> ([docs](https://code.claude.com/docs/en/mcp))</summary>

**Option A — CLI command:**

```bash
claude mcp add fast-news -- npx mcp-remote https://mcp.rapidapi.com --header "x-api-host: fast-news-with-previews.p.rapidapi.com" --header "x-api-key: YOUR-API-KEY"
```

Add `--scope user` to make it available globally across all projects.

**Option B — Manual config:**

Add the [Quick Start](#quick-start) config to your Claude Code MCP settings.

</details>

<details>
<summary><strong>Claude Desktop</strong> ([docs](https://modelcontextprotocol.io/docs/develop/connect-local-servers))</summary>

1. Open Claude Desktop settings
2. Navigate to **Developer** > **Edit Config**
3. Paste the [Quick Start](#quick-start) config into `claude_desktop_config.json`
4. Restart Claude Desktop

</details>

<details>
<summary><strong>Cursor</strong> ([docs](https://cursor.com/docs/mcp))</summary>

1. Open **Cursor Settings** > **MCP** > **New MCP Server**
2. Paste the [Quick Start](#quick-start) config
3. Replace `YOUR-API-KEY` with your key
4. Enable the server

</details>

<details>
<summary><strong>VS Code Copilot</strong> ([docs](https://code.visualstudio.com/docs/copilot/customization/mcp-servers))</summary>

Add the following to your `.vscode/mcp.json`:

```json
{
  "servers": {
    "fast-news": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.rapidapi.com",
        "--header",
        "x-api-host: fast-news-with-previews.p.rapidapi.com",
        "--header",
        "x-api-key: YOUR-API-KEY"
      ]
    }
  }
}
```

</details>

<details>
<summary><strong>Windsurf</strong> ([docs](https://docs.windsurf.com/windsurf/cascade/mcp))</summary>

Add the [Quick Start](#quick-start) config to your Windsurf MCP config file (`~/.codeium/windsurf/mcp_config.json`).

</details>

<details>
<summary><strong>Cline</strong> ([docs](https://docs.cline.bot/mcp/mcp-overview))</summary>

1. Open Cline settings
2. Go to **MCP** > **Add New MCP Server**
3. Select **Local** and paste the [Quick Start](#quick-start) config

</details>

<details>
<summary><strong>Continue</strong> ([docs](https://docs.continue.dev/customize/mcp-tools))</summary>

Add the [Quick Start](#quick-start) config to your `~/.continue/config.json` under the `mcpServers` key.

</details>

<details>
<summary><strong>OpenCode</strong> ([docs](https://opencode.ai/docs/mcp-servers))</summary>

Add the following to your `opencode.json`:

```json
{
  "mcp": {
    "fast-news": {
      "type": "remote",
      "url": "https://mcp.rapidapi.com",
      "headers": {
        "x-api-host": "fast-news-with-previews.p.rapidapi.com",
        "x-api-key": "YOUR-API-KEY"
      }
    }
  }
}
```

</details>

<details>
<summary><strong>Codex CLI</strong> ([docs](https://developers.openai.com/codex/mcp))</summary>

```bash
codex mcp add fast-news -- npx mcp-remote https://mcp.rapidapi.com --header "x-api-host: fast-news-with-previews.p.rapidapi.com" --header "x-api-key: YOUR-API-KEY"
```

</details>

## Usage Examples

Once connected, try these prompts in your AI agent:

- "What are the trending headlines right now?"
- "Search for news about artificial intelligence"
- "Find local news about Tokyo"
- "Show me the latest technology news from the past week"
- "Search for climate news from BBC and Reuters only, sorted by newest first"
- "Get trending headlines in German"
- "Find sports and business news combined"
- "Show me health news with thumbnails only from the last 7 days"

The agent will use the MCP server to call the appropriate endpoint and return formatted results.

## API Documentation

For full endpoint documentation, parameters, response formats, and code examples:

- **Overview:** [docs.marvelousapi.com/apis/fastnews](https://docs.marvelousapi.com/apis/fastnews)
- **Endpoints:** [docs.marvelousapi.com/apis/fastnews/docs/endpoints/news](https://docs.marvelousapi.com/apis/fastnews/docs/endpoints/news)
- **Error Handling:** [docs.marvelousapi.com/apis/fastnews/docs/error-handling](https://docs.marvelousapi.com/apis/fastnews/docs/error-handling)

## Key Features

- **Source diversity** — no single domain dominates your feed (max 25% per domain)
- **Built-in deduplication** — near-identical articles are collapsed automatically
- **40+ languages** — trending and topic searches auto-translate into local queries
- **Clean previews** — up to 250-character excerpts with thumbnail URLs
- **Timeframe filters** — last hour, 24h, 7 days, 30 days

## Links

- [Subscribe on RapidAPI](https://rapidapi.com/SemicolonBandit/api/fast-news-with-previews)
- [API Documentation](https://docs.marvelousapi.com/apis/fastnews)
- [Live Demo](https://the-dispatcher-demo.vercel.app/)
- [Discord](https://discord.gg/kEFfEzPqsk)

## License & API Terms

The configuration and documentation in this repository are MIT licensed.
The Fast News API itself is a commercial service hosted on RapidAPI — usage
is subject to the [RapidAPI Terms of Service](https://rapidapi.com/terms) and
your subscription plan. The MIT license does not grant access to the API.

## License

[MIT](LICENSE)
