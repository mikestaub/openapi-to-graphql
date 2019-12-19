import { Operation } from './types/operation';
import { ResolveFunction } from './types/graphql';
import { PreprocessingData } from './types/preprocessing_data';
import * as NodeRequest from 'request';
import { RequestHeadersFunction } from './types/options';
export declare type RequestOptions = Omit<NodeRequest.Options, 'headers'> & {
    headers?: {
        [key: string]: string;
    } | RequestHeadersFunction;
};
declare type GetResolverParams = {
    operation: Operation;
    argsFromLink?: {
        [key: string]: string;
    };
    payloadName?: string;
    data: PreprocessingData;
    baseUrl?: string;
    requestOptions?: RequestOptions;
};
/**
 * Creates and returns a resolver function that performs API requests for the
 * given GraphQL query
 */
export declare function getResolver({ operation, argsFromLink, payloadName, data, baseUrl, requestOptions }: GetResolverParams): ResolveFunction;
export {};
