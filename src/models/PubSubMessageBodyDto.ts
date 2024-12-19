/* tslint:disable */
/* eslint-disable */
/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PubSubMessageBodyDtoMessage } from './PubSubMessageBodyDtoMessage';
import {
    PubSubMessageBodyDtoMessageFromJSON,
    PubSubMessageBodyDtoMessageFromJSONTyped,
    PubSubMessageBodyDtoMessageToJSON,
    PubSubMessageBodyDtoMessageToJSONTyped,
} from './PubSubMessageBodyDtoMessage';

/**
 * 
 * @export
 * @interface PubSubMessageBodyDto
 */
export interface PubSubMessageBodyDto {
    /**
     * 
     * @type {PubSubMessageBodyDtoMessage}
     * @memberof PubSubMessageBodyDto
     */
    message: PubSubMessageBodyDtoMessage;
    /**
     * 
     * @type {string}
     * @memberof PubSubMessageBodyDto
     */
    subscription: string;
}

/**
 * Check if a given object implements the PubSubMessageBodyDto interface.
 */
export function instanceOfPubSubMessageBodyDto(value: object): value is PubSubMessageBodyDto {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    return true;
}

export function PubSubMessageBodyDtoFromJSON(json: any): PubSubMessageBodyDto {
    return PubSubMessageBodyDtoFromJSONTyped(json, false);
}

export function PubSubMessageBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PubSubMessageBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': PubSubMessageBodyDtoMessageFromJSON(json['message']),
        'subscription': json['subscription'],
    };
}

export function PubSubMessageBodyDtoToJSON(json: any): PubSubMessageBodyDto {
    return PubSubMessageBodyDtoToJSONTyped(json, false);
}

export function PubSubMessageBodyDtoToJSONTyped(value?: PubSubMessageBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': PubSubMessageBodyDtoMessageToJSON(value['message']),
        'subscription': value['subscription'],
    };
}
