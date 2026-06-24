# WebSocket Architecture

Pasific Capital requires ultra-low latency real-time data streaming. We utilize `Socket.io` (for ease of implementation in Next.js/Node) or direct `ws` for high-frequency institutional connections.

## Connection
`wss://ws.pasific-capital.com/v1`

## Channels & Subscriptions

Clients must subscribe to specific channels to receive data. 
To subscribe, send:
```json
{
  "action": "subscribe",
  "channels": ["ticker:BTC/USDT", "orderbook:BTC/USDT", "user:executions"]
}
```

### 1. Market Data (Public Channels)

#### Ticker Streaming (`ticker:{symbol}`)
Streams real-time price updates (every 100ms or on price change).
**Payload Event:**
```json
{
  "event": "ticker",
  "data": {
    "symbol": "BTC/USDT",
    "price": "64230.50",
    "change24h": "2.4",
    "volume24h": "12450.5"
  }
}
```

#### Order Book Updates (`orderbook:{symbol}`)
Streams L2 order book depth. Sends an initial snapshot, followed by delta updates.
**Payload Event:**
```json
{
  "event": "orderbook_update",
  "data": {
    "symbol": "BTC/USDT",
    "bids": [[64230.00, 1.5], [64229.50, 0.8]],
    "asks": [[64231.00, 2.1]]
  }
}
```

#### Klines/Candlestick (`kline_{interval}:{symbol}`)
Streams live updates for the current unclosed candle.
**Payload Event:**
```json
{
  "event": "kline",
  "data": {
    "symbol": "BTC/USDT",
    "interval": "1m",
    "open": 64200,
    "high": 64250,
    "low": 64190,
    "close": 64230.5,
    "volume": 45.2
  }
}
```

### 2. Private Channels (Requires Authentication)

Private channels require sending a JWT token upon connection or as a subscription parameter.

#### Order Executions (`user:executions`)
Pushes real-time updates when a user's order is filled or partially filled.
**Payload Event:**
```json
{
  "event": "execution",
  "data": {
    "orderId": "uuid",
    "status": "FILLED",
    "filledQuantity": 0.1,
    "price": 64230.50
  }
}
```

#### Wallet Balance Updates (`user:balances`)
Pushes updates when a deposit clears or balance changes due to a trade.
