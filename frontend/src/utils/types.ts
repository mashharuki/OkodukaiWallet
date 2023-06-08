export interface CLIOpts {
    dryRun: boolean;
    withPM: boolean;
}

export type FactoryCreated = {
  factoryId: string;
  factoryAddress: string;
}

export type Tx = {
  amount: string;
  date : string;
  factory: string;
  id: string;
  sender: string;
  status: string;
  to: string;
  tokenAddr: string;
  type: string;
}

type Client = {
  config: {
    clientId: string;
    baseURL: string;
  };
  request: (req: any) => void;
  sender: () => void;
  signatureCache: {};
  signer: (data: any) => void;
};

export type Collection = {
  after: (cursor: any) => void;
  astCache: {
    kind: 'collection';
    namespace: any;
    name: string;
    attributes: any[];
  };
  before: (cursor: any) => void;
  client: Client;
  create: (args: any) => void;
  doc: (id: any) => void;
  get: () => void;
  getAST: () => void;
  getMeta: () => void;
  id: string;
  isCallPubliclyAccessible: (methodName: string) => void;
  isCollectionPubliclyAccessible: (type: any) => void;
  isReadPubliclyAccessible: () => void;
  key: () => void;
  limit: (limit: any) => void;
  load: () => void;
  meta: {
    ast: string;
    code: string;
    id: string;
  };
  onQuerySnapshotRegister: (q: any, fn: () => void, errFn: () => void) => void;
  onRecordSnapshotRegister: (d: any, fn: () => void, errFn: () => void) => void;
  onSnapshot: (fn: () => void, errFn: () => void) => void;
  querySubs: any;
  record: (id: any) => void;
  recordSubs: any;
  sort: (field: any, direction: any) => void;
  validate: (data: any) => void;
  where: (field: any, op: any, value: any) => void;
}

export type CollectionRecord = {
  block: { hash: string };
  call: (functionName: string, args: any) => void;
  client: {
    config: any;
    signatureCache: any;
    request: () => void;
    sender: () => void;
    signer: () => void;
  };
  collection: Collection;
  data: Tx;
  exists: () => void;
  get: () => void;
  id: string;
  key: () => void;
  onSnapshot: (fn: () => void, errFn: () => void) => void;
  onSnapshotRegister: (d: any, fn: () => void, errFn: () => void) => void;
  reference: () => void;
  request: () => void;
  toJSON: () => void;
};