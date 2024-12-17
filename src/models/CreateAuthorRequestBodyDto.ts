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
/**
 * 
 * @export
 * @interface CreateAuthorRequestBodyDto
 */
export interface CreateAuthorRequestBodyDto {
    /**
     * Nome completo do autor.
     * @type {string}
     * @memberof CreateAuthorRequestBodyDto
     */
    fullName: string;
    /**
     * Email do autor.
     * @type {string}
     * @memberof CreateAuthorRequestBodyDto
     */
    email: string;
    /**
     * Resumo sobre o autor.
     * @type {string}
     * @memberof CreateAuthorRequestBodyDto
     */
    summary?: string;
}

/**
 * Check if a given object implements the CreateAuthorRequestBodyDto interface.
 */
export function instanceOfCreateAuthorRequestBodyDto(value: object): value is CreateAuthorRequestBodyDto {
    if (!('fullName' in value) || value['fullName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function CreateAuthorRequestBodyDtoFromJSON(json: any): CreateAuthorRequestBodyDto {
    return CreateAuthorRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateAuthorRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAuthorRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'fullName': json['fullName'],
        'email': json['email'],
        'summary': json['summary'] == null ? undefined : json['summary'],
    };
}

export function CreateAuthorRequestBodyDtoToJSON(json: any): CreateAuthorRequestBodyDto {
    return CreateAuthorRequestBodyDtoToJSONTyped(json, false);
}

export function CreateAuthorRequestBodyDtoToJSONTyped(value?: CreateAuthorRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fullName': value['fullName'],
        'email': value['email'],
        'summary': value['summary'],
    };
}

