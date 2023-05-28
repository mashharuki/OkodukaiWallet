# Okodukai Wallet

Okodukai Wallet (React.js + Hardhat + TheGraph)

## Contract Info

| No. | コントラクト名   | アドレス                                                                                                                             | ネットワーク |
| :-- | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| 1   | FactoryManager   | [0xdd0412fDdD27bd54115E63E62f04318C4B4154F4](https://mumbai.polygonscan.com/address/0xdd0412fDdD27bd54115E63E62f04318C4B4154F4#code) | Mumbai       |
| 2   | EntryPoint       | [0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789](https://mumbai.polygonscan.com/address/0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789#code) | Mumbai       |
| 3   | DepositPaymaster | [0x93fdd51462FB20fB631F8CA38c3DeB87583311Ea](https://mumbai.polygonscan.com/address/0x93fdd51462FB20fB631F8CA38c3DeB87583311Ea#code) | Mumbai       |

## Deployed Subgraph

[SubGraph](https://api.studio.thegraph.com/query/44992/aa-factorymanager/v0.0.1)

- Sample Query (生成した Facotry コントラクトの情報を一括で取得するクエリ)

```gql
query MyQuery {
  factoryCreateds(orderBy: id, orderDirection: desc) {
    factoryId
    factoryAddress
  }
}
```

## トランザクションの記録 (Mumbai Network)

| No. | トランザクションハッシュ                                                                                                                                                   | 概要                                                                               |
| :-- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| 1   | [0xe62537028fc2be51a7a0121926bf7ed024531577ce03f085135618fc1613ba26](https://mumbai.polygonscan.com/tx/0xe62537028fc2be51a7a0121926bf7ed024531577ce03f085135618fc1613ba26) | FactoryManager コントラクトのデプロイ                                              |
| 2   | [0xd16efa3e05c61dd0186434594f6c9004b7cc086ccc2cf6e12c3122fc985935e3](https://mumbai.polygonscan.com/tx/0xd16efa3e05c61dd0186434594f6c9004b7cc086ccc2cf6e12c3122fc985935e3) | FactoryManager コントラクトから SimpleAccountFacotory コントラクトを生成した Tx    |
| 3   | [0x0bf4ad5dd446d9b64e0e981506688b6d2159d1d1ad358317dad6380247f77c31](https://mumbai.polygonscan.com/tx/0x0bf4ad5dd446d9b64e0e981506688b6d2159d1d1ad358317dad6380247f77c31) | FactoryManager コントラクト経由で EntryPoint コントラクトに対して addStake した Tx |
| 4   | [0x6b333e0b0587d3bfc7432f1cac0b163238cc9a0de27630d5fd7d263734c1b010](https://mumbai.polygonscan.com/tx/0x6b333e0b0587d3bfc7432f1cac0b163238cc9a0de27630d5fd7d263734c1b010) | SimpleAccount コントラクトからネイティブトークンを送金した Tx                      |
| 5   | [0xaba33331fbd001e9a6f976c21c2abaf5f44ca20e6c6bc06a7a35b3cc183f596f](https://mumbai.polygonscan.com/tx/0xaba33331fbd001e9a6f976c21c2abaf5f44ca20e6c6bc06a7a35b3cc183f596f) | SimpleAccount コントラクトから ERC20 トークンを送金した Tx                         |

## なぜそれを開発しようと考えたのか

Web3 のマスアダプションのため。

## どんなプロダクトを目指して開発したか。

お小遣いをあげる感覚で、owner からユーザーに暗号資産を渡してあげられる + 管理ができる アプリをイメージしていました。

このようにすることで子供でも暗号資産を使えるようにするイメージです。

## 実際のデモ

[Youtube](https://youtu.be/Jff6IcQmejY)

## 工夫やユニークポイント

- 全体像

![](./docs/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E6%88%90%E6%A1%88.drawio.png)

- コントラクトのコンセプト

`AccountFactory`というコントラクトを追加して、owner が複数の`ContractWallet`を管理できるようにする構造を考えていました。owner になった人が`ContractWallet`に入金していくイメージです。

さらに、Factory 生成時のタイミングでは Event を発行させて`The Graph`を使ってインデックス化させ検索・管理しやすいアプリにしたいと考えていました。

![](./docs/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%A9%E3%82%AF%E3%83%88%E8%A8%AD%E8%A8%88%E6%A1%88.drawio.png)

![](./docs/%E4%BB%8A%E5%9B%9E%E3%81%AE%E3%83%97%E3%83%AD%E3%83%80%E3%82%AF%E3%83%88%E3%81%AE%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8.drawio.png)

## チームについて

| Name       | Github                                  | Twitter                                       |
| :--------- | :-------------------------------------- | :-------------------------------------------- |
| mashharuki | [Github](https://github.com/mashharuki) | [Twitter](https://twitter.com/HARUKI05758694) |
| hakua      | [Github](https://github.com/hakua-13)   | [Twitter]()                                   |
| mameta     | [Github](https://github.com/Mameta29)   | [Twitter](https://twitter.com/TeaTuberMameta) |

## 今後の課題や目標

- 独自実装した`FactoryContract`と`AccountContract`がちゃんと機能するようにバンドラーとエントリーポイントコントラクト・Paymaster コントラクトの仕組みをさらに調べること。

- バンドラーと EntryPoint コントラクトまでも自分たちで用意するのはとても大変(しかも独自実装が混ざるとさらに大変)だったので今回は除外したが、今後ハッカソンでこの辺りの機能拡張などが簡単にできる仕組みを考えると審査員受けしそうだと思った。

- 今回学んだことを今後開発するプロダクトやハッカソンのアイディアに流用することが当面の目標である。

- アプリのエンドユーザー側は、Metamask インストールしていない状態になるので、セキュリティの担保のためには結局 KYC が重要になる。なので、Google アカウントでもログインできるような SSO の仕組みを導入した認証機能などを追加してあげる必要がある。

## 今回のブートキャンプで調べたこと・学んだこと

### 特徴

- UserOperation - ユーザーの代わりに送信されるトランザクションを記述する構造体です。混乱を避けるため、"transaction "という名前は付けられていない。
  トランザクションと同様に、"sender", "to", "calldata", "maxFeePerGas", "maxPriorityFee", "signature", "nonce" を含む。
  トランザクションとは異なり、以下のようないくつかのフィールドを含んでいます。
  また、"nonce "と "signature "フィールドの使用方法は、プロトコルで定義されているわけではなく、各アカウントの実装によって定義されています。
- Sender - ユーザーオペレーションを送信するアカウントコントラクト。
- EntryPoint - UserOperation のバンドルを実行するためのシングルトンコントラクトです。バンドラー／クライアントは、サポートされるエントリーポイントをホワイトリストに登録します。
- Bundler - 複数の UserOperation をバンドルし、EntryPoint.handleOps()トランザクションを作成するノード（ブロックビルダー）です。ネットワーク上のすべてのブロックビルダーがバンドラーであることを要求されるわけではないことに注意してください
- アグリゲーター - アグリゲートされた署名を検証するために、アカウントによって信頼されるヘルパー契約です。バンドラー/クライアントは、サポートされるアグリゲーターをホワイトリスト化します。

### AA のアーキテクチャ

アカウントアブストラクションを実現するためのコンポーネント

1. EntryPoint contract (エントリーポイントコントラクト)
2. Paymaster contract (コントラクト)
3. UserOperation (ユーザーが実行したいトランザクション本体のデータ)
4. Bundler (トランザクションを束ねてブロックチェーンに送信するための API サーバー)
5. Miner (マイナー)
6. client library (アカウントアブストラクションの機能を呼び出すためのクライアントライブラリ)

## エクステンション：ペイマスターズ

エントリーポイントのロジックを拡張し、他のユーザーのトランザクションをスポンサーすることができるペイマスターをサポートします。この機能は、アプリケーション開発者がユーザーの料金を補助したり、ユーザーが ERC-20 トークンで料金を支払うことを可能にしたり、その他多くのユースケースに使用することができます。

Paymaster は、dApp の利用者がトランザクション手数料を支払わずに dApp を使用できるようにするための機能です。Paymaster は、利用者の代わりにトランザクション手数料を支払うため、dApp の利用者はトランザクションを送信するときに ETH を持っている必要がありません。

Paymaster は、dApp の所有者が管理するスマートコントラクトであり、dApp の利用者が Paymaster に対して任意の量の ETH を送信し、Paymaster はトランザクション手数料を支払い、dApp に転送します。

ERC-2771 は、Paymaster を実装するために必要なメソッドやイベントを定義しています。Paymaster を実装するには、ERC-2771 で定義されたスマートコントラクトを作成し、必要なメソッドを実装する必要があります。

Paymaster の利点は、利用者が ETH を持っていなくても dApp を利用できるようになることです。これにより、ユーザーの利用率を向上させることができます。また、Paymaster は dApp の所有者が管理するため、手数料を自由に設定することができるため、dApp の収益性を向上させることもできます。

## toEthSignedMessageHash メソッドについて

toEthSignedMessageHash は、Ethereum デジタル署名標準に従って、任意のメッセージに対して署名する前にハッシュ値を生成するために使用されるメソッドの 1 つです。

このメソッドは、web3.js や Solidity などの Ethereum 開発ツールキットで利用可能であり、以下のようなステップで使用することができます。

1. メッセージを UTF-8 形式でエンコードします。
2. Ethereum の署名形式に必要なプレフィックス文字列 ("\x19Ethereum Signed Message:\n" + メッセージのバイト数)を追加します。
3. 2 で生成された文字列をハッシュ化します。
4. ハッシュ値を 16 進数文字列に変換します。

## Metamask Snap について

Metamask Snap は、Metamask ブラウザ拡張機能に追加できる、分散型アプリケーション（dApps）のための拡張機能です。

Snap は、Metamask の API を使用して、dApps とのインタラクションを可能にすることができます。Snap は、dApps が Metamask の UI や API を直接利用することなく、dApps が Metamask と連携することを可能にすることができます。これにより、dApps は、Metamask Snap API を介して Metamask のウォレット機能を利用することができます。

Metamask Snap を使用することで、ユーザーは Metamask をアンロックすることなく、dApps にアクセスすることができます。dApps は、Metamask Snap を使用して、ユーザーにウォレットアドレスの確認やトランザクションの署名などの機能を提供することができます。

Metamask Snap は、Snap Store という Metamask の Snap 拡張機能のマーケットプレイスで利用可能です。Snap Store には、多数の Snap が提供されており、ユーザーは必要に応じて Snap を追加することができます。Snap Store には、dApp の開発者が作成した Snap が含まれており、ユーザーは Snap Store を通じて dApps にアクセスすることができます。

Metamask Snap は、分散型アプリケーションとのインタラクションを簡素化し、ユーザーにとってよりシームレスな dApp エクスペリエンスを提供することを目的としています。
→ AA 系のアプリだと Metamask はインストールしていない前提なのでそうすること。

## デプロイしたコントラクト

| No. | コントラクト名       | アドレス                                                                                                                             | ネットワーク |
| :-- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| 1   | SimpleAccountFactory | [0xA0B912d2797602863ce04F370b36330d80e76832](https://mumbai.polygonscan.com/address/0xA0B912d2797602863ce04F370b36330d80e76832)      | Mumbai       |
| 2   | EntryPoint           | [0x607cAAF3fF8bB0469F1e9b1e3214008C0B1D05C6](https://mumbai.polygonscan.com/address/0x607cAAF3fF8bB0469F1e9b1e3214008C0B1D05C6#code) | Mumbai       |
| 3   | SimpleAccount        | [生成したコントラクトウォレット](https://mumbai.polygonscan.com/address/0xA85aB8d7133A8DA31Ec8f139F3424a92119e3a66)                  | Mumbai       |

## 本リポジトリ内の動かし方

- インストール

```bash
cd 4337-sample && npm i
```

- コンパイル

```bash
npm run compile
```

- テスト

```bash
npm run test
```

- EntryPoint コントラクトのデプロイ & Verify

```bash
npm run entryPoint:deploy:mumbai
```

`package.json`ファイルにデプロイしたコントラクトアドレスを埋め込むこと!!

```bash
npm run entryPoint:verify:mumbai
```

- SimpleAccountFactory コントラクトのデプロイ & Verify

```bash
npm run simpleAccountFactory:deploy:mumbai
```

`package.json`ファイルにデプロイしたコントラクトアドレスを埋め込むこと!!

```bash
npm run simpleAccountFactory:verify:mumbai
```

## QuickStart をやった記録

```bash
yarn
```

```bash
yarn run init
```

- コントラクトウォレット生成

```bash
yarn run simpleAccount address
```

- 実行結果

```bash
SimpleAccount address: 0xAcF13ddE0328fC1D971b14b46601f72EfCde988a
✨  Done in 9.51s.
```

- ネイティブトークンの送金

```bash
yarn run simpleAccount transfer --to 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072 --amount 0.05
```

- 実行結果

```bash
Signed UserOperation: {
  sender: '0xAcF13ddE0328fC1D971b14b46601f72EfCde988a',
  nonce: '0x0',
  initCode: '0x9406cc6185a346906296840746125a0e449764545fbfb9cf000000000000000000000000e6d171e50dc760f74e1e5c78f3f4e1e2df72cb5e0000000000000000000000000000000000000000000000000000000000000000',
  callData: '0xb61d27f600000000000000000000000051908f598a5e0d8f1a3babfa6df76f9704dad07200000000000000000000000000000000000000000000000000b1a2bc2ec5000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000',
  callGasLimit: '0x814c',
  verificationGasLimit: '0x583f4',
  preVerificationGas: '0xaf9c',
  maxFeePerGas: '0x670cebc0',
  maxPriorityFeePerGas: '0x670ceba0',
  paymasterAndData: '0x',
  signature: '0xf41970f318f4c9425ac22689fcf8d361fff35cc8134cbb69a2b65de733a6657131982677a02d9f89a6dce63bf272be036e33b78d02bfb8404a878b8ebe6d5f881b'
}
UserOpHash: 0xed45d1eb9ecd6457172aeed91e4cd6b13ef907eedd7a27661cabbf1d1a603634
Waiting for transaction...
Transaction hash: 0xcc122aca392ae5096f9404d868f4e4336f2f81f8933bdead8e1ca25909a9c09e
✨  Done in 25.13s.
```

- ERC20 のトークン(LINK トークン)を送信する

```bash
yarn run simpleAccount erc20Transfer --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB --to 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072 --amount 0.1
```

- 実行結果

```bash
Transferring 0.1 LINK...
Signed UserOperation: {
  sender: '0xAcF13ddE0328fC1D971b14b46601f72EfCde988a',
  nonce: '0x1',
  initCode: '0x',
  callData: '0xb61d27f6000000000000000000000000326c977e6efc84e512bb9c30f76e30c160ed06fb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044a9059cbb00000000000000000000000051908f598a5e0d8f1a3babfa6df76f9704dad072000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000',
  callGasLimit: '0x9922',
  verificationGasLimit: '0xed10',
  preVerificationGas: '0xaeb8',
  maxFeePerGas: '0x6507a5de',
  maxPriorityFeePerGas: '0x6507a5c0',
  paymasterAndData: '0x',
  signature: '0xb0a132bd539cfadcc4e05b2f6753f88ad6d53fa0a7e2379d642cc5295b98e2ee107d7a45bf76766cd7f1ca9dc98a8c34f3ae4182a2808e36617d0ef85456aedb1c'
}
UserOpHash: 0x1a4b3f80da3e0c6fd52dd4c1657e14f837eaf4a32f1bf13a98cf7365be7b2144
Waiting for transaction...
Transaction hash: 0x93117543b9382f20f58c27811887dfebac7833080f89132682ad509f0e220cdb
✨  Done in 21.65s.
```

- ERC20 を承認するコマンド

```bash
yarn run simpleAccount erc20Approve --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB --spender 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072 --amount 0.5
```

- 実行結果

```bash
Approving 0.5 LINK...
Signed UserOperation: {
  sender: '0xAcF13ddE0328fC1D971b14b46601f72EfCde988a',
  nonce: '0x2',
  initCode: '0x',
  callData: '0xb61d27f6000000000000000000000000326c977e6efc84e512bb9c30f76e30c160ed06fb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000051908f598a5e0d8f1a3babfa6df76f9704dad07200000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000000000000',
  callGasLimit: '0xc623',
  verificationGasLimit: '0xed10',
  preVerificationGas: '0xaeb8',
  maxFeePerGas: '0x6507a5e2',
  maxPriorityFeePerGas: '0x6507a5c0',
  paymasterAndData: '0x',
  signature: '0xdeeef33f860c1224d0cbc9e72f9c9a942c4da9661b80ae9f9b5268790e51a0382511f8c8e2543bd02a04eaf4ac2846d2ebeb0999607782be4e36ab0f2e2c539d1b'
}
UserOpHash: 0xa9c59076dc2aed6216a8eafaa335a40898a5b470a82b2ff873b42834d57e29d6
Waiting for transaction...
Transaction hash: 0xc96ac903a0130cfbd2fdc0a9dd9553cb040b909d981a9465dc2120d1ab03d6a2
✨  Done in 21.18s.
```

- 一気に複数の ERC20 トークンした場合

```bash
yarn run simpleAccount batchErc20Transfer --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB --to 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072,0x1295BDc0C102EB105dC0198fdC193588fe66A1e4 --amount 0.01
```

- 実行結果

```bash

```

- NFT(ERC721 トークン)を送金する場合

```bash
yarn run simpleAccount erc721Transfer --token 0xfe03B6a6B4B095248F06Ed9528e913995ED58f97 --to 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072 --tokenId 0
```

- 実行結果

```bash
Transferring My NFT Collectible,NFTC...
Signed UserOperation: {
  sender: '0x0923945731C2aD0279aCA441F438AE86AE1dF072',
  nonce: '0x2',
  initCode: '0x',
  callData: '0xb61d27f6000000000000000000000000fe03b6a6b4b095248f06ed9528e913995ed58f9700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000006423b872dd0000000000000000000000000923945731c2ad0279aca441f438ae86ae1df07200000000000000000000000051908f598a5e0d8f1a3babfa6df76f9704dad072000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  callGasLimit: '0x133ee',
  verificationGasLimit: '0xed25',
  preVerificationGas: '0xb014',
  maxFeePerGas: '0xa354e5b9',
  maxPriorityFeePerGas: '0xa354e599',
  paymasterAndData: '0x',
  signature: '0xc608c654168b941ae5b693ffdb6927884198662cba196343312edc54bface4601e8e64338c822e891c95567d927ad975800f49d9bda8730be7e05640af3c40c01b'
}
UserOpHash: 0xe558f884096e13f415587d39fd1f08cb544a2392811afebeca01ad491a35667a
Waiting for transaction...
Transaction hash: 0x746111b652016a4612acbaf32b7e53ed103886fc255cbdeaf720cfdcffb30aba
✨  Done in 17.95s.
```

### Paymaster を使った場合のコマンド(Developer プランに変更する必要あり)

基本的に Paymaster で使用したいトークンの設定を追加で行い、`--withPaymaster`をつけることで実行できる。

- ネイティブトークンの送金

```bash
yarn run simpleAccount transfer --to 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072 --amount 0.05 --withPaymaster
```

### AA を使ったアプリの開発で詰まったポイント

- 独自の実装を混ぜ込むのが難しい。(Solidity レベルでは可能だが、フロント、API を合わせると話は別。ちょっと変えただけでも上手く動かない。)
- Bundler の開発が大変(上述の独自実装を組み込むことに加えてそれを考慮した設計にしないといけない。)
- userOp のデータを作るのは、`userOp.js`などの SDK を使わないとめちゃくちゃめんどくさい。
- 上記点を上手く組み合わせるだけでもかなり大変。

### 学習すべき順番

- まず、QuickStart をやる。
- コントラクトのソースとバンドラーの API の内容を理解する。
- 標準仕様で、`userOp.js`を使って`React.js`などで開発したフロントエンドリクエストを投げられる様にすること。
- まずは上記でフロントから動かすこと。(普通にライブラリを使ってリクエストを投げる。)
- 独自実装を組み込んだ`FactoryContract`及び`AccountContract`のデプロイ方法と適用方法を調べること。

### Paymaster で使えるトークンについて

現在は Stackup が指定したトークンのみしか使えない(USDC、テストネットだと特定のトークン[Stackup 6 Decimal Test Token](https://mumbai.polygonscan.com/address/0x3870419Ba2BBf0127060bCB37f69A1b1C090992B))

### 参考文献

1. [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)
2. [FireWallet - Github](https://github.com/xwing-india/eth-india)
3. [Account-Abstruction](https://github.com/eth-infinitism/account-abstraction)
4. [NPM AccountAbstruction](https://www.npmjs.com/package/@account-abstraction/contracts)
5. [jiffyScan](https://www.jiffyscan.xyz/)
6. [【GitHub】jiffyScan](https://github.com/mashharuki/jiffy-explorer)
7. [【StackUp Docs】AA introduction](https://docs.stackup.sh/docs/introduction)
8. [AAsnap](https://github.com/a42io/AAsnap)
9. [stackup-bundler Sample source](https://github.com/stackup-wallet/stackup-bundler)
10. [【npm】Userop.js](https://www.npmjs.com/package/userop)
11. [MetaMask/snaps-monorepo](https://github.com/MetaMask/snaps-monorepo)
12. [extend-the-functionality-of-metamask](https://docs.metamask.io/guide/snaps.html#extend-the-functionality-of-metamask)
13. [Template Snap monorepo](https://github.com/MetaMask/template-snap-monorepo)
14. [Create a gas estimation snap](https://docs.metamask.io/snaps/tutorials/gas-estimation)
15. [Hardhat の使い方メモ(4) テスト - イベントのテスト方法](https://nawoo.hateblo.jp/entry/2021/11/15/223439)
16. [ERC4337 に関するメモ](https://scrapbox.io/m1dstream/EIP4337_%23Ethereum)
17. [発表資料](https://www.canva.com/design/DAFiCy3VhsI/KAkcUxU8fNhlMjUkeU0_eA/edit?utm_content=DAFiCy3VhsI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
18. [tailwindcomponents](https://tailwindcomponents.com/component/bottom-and-header-nav-responsive)
19. [Alchemy ERC20Token Balance](https://docs.alchemy.com/reference/alchemy-gettokenbalances)
20. [NFT API Quickstart](https://docs.alchemy.com/reference/nft-api-quickstart)
