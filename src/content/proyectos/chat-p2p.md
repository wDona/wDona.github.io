---
title: "Chat P2P"
cover: "chat"
summary: "Chat de escritorio peer-to-peer, sin servidor central, hecho con Rust y Tauri."
link: "https://github.com/wDona/chat-p2p-rust"
highlight: true
plataformas: ["linux", "windows"]
tecnologias:
  - name: "Rust"
    img: "img/rustlogo.svg"
  - name: "Tauri"
    img: "img/taurilogo.svg"
  - name: "TypeScript"
    img: "img/typescriptlogo.svg"
---

Aplicación de escritorio para chatear directamente entre dos equipos (peer-to-peer), sin pasar por ningún servidor central.

El backend está escrito en Rust con conexiones TCP asíncronas usando Tokio, y sigue una arquitectura hexagonal (dominio, casos de uso y puertos separados). La interfaz está hecha con Tauri y TypeScript.
