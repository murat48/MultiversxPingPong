import { EnvironmentsEnum } from 'types';

export * from './sharedConfig';

export const contractAddress =
  'erd1hh8qjzht9rgeux9gftwhx0djh4ay3ql2ssx83l6c3qjsnymzqtwqa7f4du';
export const API_URL = 'https://devnet-template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.devnet;
