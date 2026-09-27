---
title: Data Sources
sidebar_position: 3
description: >
  How providers map to menus in the ODP CLI REPL, when --provider matters,
  and where provider credentials and default parameters come from.
keywords:
  - openbb-cli REPL
  - provider
  - credentials
  - API keys
  - user_settings.json
  - defaults
---

In V5, each provider package owns its own namespace, so the data source is usually implied by the menu: `/oecd` commands come from the OECD, `/cboe` commands from Cboe, `/fred` commands from FRED. In the in-process mode, the menu listing shows each command's provider in brackets. The available providers are whatever OpenBB extensions are installed; the [extensions overview](../../python/extensions/index.mdx) lists the packages.

## Choosing a provider

Commands still accept `--provider`, but most list a single choice. A few commands are served by more than one provider, for example `/news/company`, which accepts `nasdaq` or `tmx`:

```text
/news/company --symbol AAPL --provider nasdaq
```

Parameters that only one provider supports are grouped under that provider's name in the command help. In the in-process mode, when `--provider` is given, flags that belong to other providers are dropped before the call; with `--spec` or `--server`, passing one of them is an error. Without `--provider`, the provider comes from the default list described below.

## Credentials

Providers that need an API key read it from the OpenBB credentials, under a name made of the provider and the credential, such as `fred_api_key`. The in-process mode takes them from the `credentials` object in `~/.openbb_platform/user_settings.json`, or from an environment variable with the same name in upper case, such as `FRED_API_KEY`.

```json
{
  "credentials": {
    "fred_api_key": "..."
  }
}
```

For the current session only, set a credential in the `/user/credentials` menu. Its help screen lists every credential the installed providers declare and whether each one is set; enter the credential's name with `-v` to set it:

```text
/user/credentials/fred_api_key -v YOUR_KEY
```

Nothing set in `/user/credentials` is written to `user_settings.json`, but the line you typed is saved in the prompt history file, `~/.openbb_platform/.cli.his`. Put long-lived keys in `user_settings.json` instead.

With `--server`, commands run on the server and use the server's credentials. With a spec for a non-OpenBB API, keys travel as headers or query parameters; see [Authentication](../auth.md).

## Default providers and parameters

`user_settings.json` can also set defaults per command under `defaults.commands`, keyed by the dotted command path. A `provider` list sets the order in which providers are tried when `--provider` is omitted: the first one whose required credentials are all set is used. Other keys set default values for parameters that you do not pass.

```json
{
  "defaults": {
    "commands": {
      "news.company": {
        "provider": ["tmx", "nasdaq"]
      },
      "oecd.gdp_real": {
        "country": "japan",
        "frequency": "annual"
      }
    }
  }
}
```

The `/user` menu shows the OpenBB preferences, such as the data and export folders or the chart style, and changes them for the current session only.
