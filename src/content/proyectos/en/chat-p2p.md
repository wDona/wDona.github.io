---
title: "P2P Chat"
summary: "Peer-to-peer desktop chat with no central server, built with Rust and Tauri."
---

Desktop app to chat directly between two computers (peer-to-peer), without going through any central server.

The backend is written in Rust with async TCP connections using Tokio, and follows a hexagonal architecture (separate domain, use cases and ports). The UI is built with Tauri and TypeScript.
