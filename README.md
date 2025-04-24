# dashboard-app
## 🏗️ Architecture

This project follows a simple real-time, full-stack architecture:

 ### ![image](https://github.com/user-attachments/assets/3adab656-1faa-4cc5-bf53-6d8ef0d5a5a5)

### 🔧 Stack Overview

| Layer      | Tech                  | Purpose                             |
|------------|-----------------------|-------------------------------------|
| Frontend   | Next.js, Tailwind     | Responsive dashboard UI             |
| Backend    | Express + Socket.io   | Data ingestion, emit, alert logic   |
| Realtime   | WebSockets            | Push price updates to client        |
| Data Feed  | Binance / CoinGecko   | Live market data source             |
| DevOps     | Docker, Vercel        | Easy local dev + cloud deployment   |
