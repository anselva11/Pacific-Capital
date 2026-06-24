# Pasific Capital REST API Documentation

## Base URL
`https://api.pasific-capital.com/v1`

## Authentication
All protected endpoints require a Bearer token in the Authorization header.
`Authorization: Bearer <JWT_TOKEN>`

---

## 1. User Authentication & Identity
### `POST /auth/register`
Creates a new user account.
**Payload:** `{ "email": "user@example.com", "password": "securepassword" }`

### `POST /auth/login`
Authenticates user and returns JWT and Refresh Token.
**Payload:** `{ "email": "user@example.com", "password": "securepassword" }`

### `POST /auth/verify-2fa`
Verifies OTP for login if 2FA is enabled.
**Payload:** `{ "userId": "uuid", "token": "123456" }`

### `POST /kyc/submit`
Submit KYC documents (ID, Selfie).
**Payload (form-data):** `idDocument`, `selfie`, `country`, `address`

---

## 2. Wallets & Balances
### `GET /wallets`
Retrieves all wallet balances for the authenticated user.
**Response:** `[{ "currency": "USD", "balance": 1500.00, "lockedBalance": 200.00 }]`

### `POST /wallets/deposit`
Initiates a fiat or crypto deposit.
**Payload:** `{ "currency": "USDT", "network": "TRC20", "amount": 1000 }`

### `POST /wallets/withdraw`
Requests a withdrawal.
**Payload:** `{ "currency": "BTC", "amount": 0.5, "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" }`

---

## 3. Trading & Order Management
### `POST /orders`
Places a new order.
**Payload:** 
```json
{
  "instrumentId": "uuid",
  "side": "BUY",
  "type": "LIMIT",
  "price": 64000.50,
  "quantity": 0.1
}
```

### `GET /orders?status=OPEN`
Retrieves user's orders (supports pagination and filtering).

### `DELETE /orders/:orderId`
Cancels an open order.

---

## 4. Market Data
### `GET /markets/instruments`
Retrieves list of tradable assets.

### `GET /markets/klines?symbol=BTC/USDT&interval=1h&limit=100`
Retrieves historical OHLCV data for charts.

---

## 5. Copy Trading
### `POST /copy-trading/follow`
Follow a professional trader.
**Payload:** `{ "leaderId": "uuid", "allocatedAmount": 5000 }`
