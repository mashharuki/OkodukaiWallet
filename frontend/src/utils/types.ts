export interface CLIOpts {
    dryRun: boolean;
    withPM: boolean;
}

export type FactoryCreated = {
  factoryId: string;
  factoryAddress: string;
}