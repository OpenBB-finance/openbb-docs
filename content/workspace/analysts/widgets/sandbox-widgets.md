---
title: Sandbox Widgets
sidebar_position: 5
description: Explore OpenBB's sandbox widgets with demo data to understand widget capabilities and test dashboard configurations without live data connections.
keywords:
- sandbox widgets
- demo data
- testing widgets
- sample data
- widget exploration
- training widgets
- proof of concept
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Sandbox Widgets | OpenBB Workspace Docs" />

# Sandbox Widgets

OpenBB Workspace includes a collection of sandbox widgets loaded with demonstration data, designed to help you explore widget capabilities and understand the platform's potential without requiring live data connections. These widgets serve as both learning tools and proof-of-concept demonstrations.

## Purpose and Benefits

Sandbox widgets provide immediate access to fully functional examples that showcase OpenBB's analytical capabilities. They demonstrate real-world use cases with realistic data patterns, allowing you to experience the full widget functionality before implementing your own data sources.

**Key Benefits:**
- Immediate exploration of widget capabilities without setup requirements
- Realistic demonstration data that mirrors actual financial patterns
- Training environment for new users and team onboarding
- Template examples for building custom implementations
- Proof-of-concept development for stakeholder demonstrations

## Available Demo Data

The sandbox environment includes representative datasets across major financial categories:

**Market Data Samples:**
- Equity price movements with realistic volatility patterns
- Options chains with bid/ask spreads and Greeks
- Fixed income instruments with yield curves
- Commodity pricing and futures data
- Currency exchange rates and cross-rates

**Portfolio Analytics:**
- Sample portfolio holdings with performance attribution
- Risk metrics including VaR and volatility measures  
- Asset allocation breakdowns across sectors and regions
- Transaction histories with execution details
- Performance benchmarking against standard indices

**Fundamental Data:**
- Company financial statements with multi-year trends
- Valuation metrics and ratio analysis
- Earnings estimates and revision histories
- Analyst recommendations and price targets
- Industry comparisons and peer analysis

## Identifying Sandbox Widgets

Sandbox widgets are clearly marked within the widget library to distinguish them from live data sources. Look for these identifiers:

- **"Sandbox" or "Demo" labels** in widget titles and descriptions
- **Sample data disclaimers** noting the demonstration nature
- **Category tags** indicating sandbox content
- **Realistic but static data** that doesn't update with market changes

These widgets function identically to live data widgets, providing the same interactive capabilities, parameter linking, and AI integration features using the demo datasets.

## Learning and Development

Sandbox widgets excel as educational tools for understanding OpenBB's analytical framework. They allow you to experiment with parameter linking across multiple widgets, test dashboard layouts and configurations, and explore AI agent capabilities without data connection requirements.

Use sandbox widgets to train new analysts on the platform, demonstrate capabilities during stakeholder presentations, and develop dashboard templates that can later be connected to live data sources. The demo data provides realistic scenarios for understanding how widgets behave with actual financial datasets.

## Important Limitations

While sandbox widgets provide excellent learning and demonstration value, they have inherent limitations for production analysis:

**Static Data:** Sandbox widgets use fixed datasets that don't reflect current market conditions or real-time changes. This makes them unsuitable for actual trading or investment decisions.

**Limited Scope:** Demo data covers common scenarios but may not include the specific data types, timeframes, or granularity required for your unique analytical needs.

**No Custom Integration:** Sandbox widgets cannot be modified to connect to your proprietary data sources or custom analytical models.

**Dependency Considerations:** OpenBB maintains sandbox widgets as demonstration tools. While they showcase platform capabilities effectively, building analytical workflows that depend on sandbox data is not recommended. These widgets serve as starting points for understanding functionality before implementing production-ready solutions with live data connections.

For production analysis, use sandbox widgets to understand capabilities and design requirements, then implement custom widgets connected to your actual data sources and analytical requirements.