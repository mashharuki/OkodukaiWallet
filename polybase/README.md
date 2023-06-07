# Polybase Scripts

- create

  ```bash
  node src/create.js
  ```

  result

  ```bash
  Add .signer() to populate ctx.publicKey, see: https://polybase.xyz/docs/authentication
  read data: {"data":[],"cursor":{"before":null,"after":null}}
  ```

### Table define

| No. | name       | type   |
| --- | ---------- | ------ |
| 1   | id(sender) | string |
| 2   | type       | string |
| 3   | tokenAddr  | string |
| 4   | to         | string |
| 5   | amount     | string |
| 6   | factory    | string |
| 7   | status     | string |
| 8   | date       | string |

1. sender Address
2. Token Type (Native, ERC20, NFT)
3. Token Addres (Natibe token is 0x0)
4. to address
5. amount or id (amount)
6. factory
