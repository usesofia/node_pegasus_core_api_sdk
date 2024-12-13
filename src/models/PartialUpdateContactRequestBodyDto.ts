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
 * @interface PartialUpdateContactRequestBodyDto
 */
export interface PartialUpdateContactRequestBodyDto {
    /**
     * Nome do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    name?: string;
    /**
     * Tipo do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    type?: PartialUpdateContactRequestBodyDtoTypeEnum | null;
    /**
     * Tipo do documento do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    documentType?: PartialUpdateContactRequestBodyDtoDocumentTypeEnum | null;
    /**
     * Documento do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    document?: string | null;
    /**
     * Email do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    email?: string | null;
    /**
     * Telefone do contato.
     * @type {string}
     * @memberof PartialUpdateContactRequestBodyDto
     */
    phone?: string | null;
}


/**
 * @export
 */
export const PartialUpdateContactRequestBodyDtoTypeEnum = {
    Customer: 'CUSTOMER',
    Employee: 'EMPLOYEE',
    Supplier: 'SUPPLIER',
    Partner: 'PARTNER'
} as const;
export type PartialUpdateContactRequestBodyDtoTypeEnum = typeof PartialUpdateContactRequestBodyDtoTypeEnum[keyof typeof PartialUpdateContactRequestBodyDtoTypeEnum];

/**
 * @export
 */
export const PartialUpdateContactRequestBodyDtoDocumentTypeEnum = {
    Cnpj: 'CNPJ',
    Cpf: 'CPF'
} as const;
export type PartialUpdateContactRequestBodyDtoDocumentTypeEnum = typeof PartialUpdateContactRequestBodyDtoDocumentTypeEnum[keyof typeof PartialUpdateContactRequestBodyDtoDocumentTypeEnum];


/**
 * Check if a given object implements the PartialUpdateContactRequestBodyDto interface.
 */
export function instanceOfPartialUpdateContactRequestBodyDto(value: object): value is PartialUpdateContactRequestBodyDto {
    return true;
}

export function PartialUpdateContactRequestBodyDtoFromJSON(json: any): PartialUpdateContactRequestBodyDto {
    return PartialUpdateContactRequestBodyDtoFromJSONTyped(json, false);
}

export function PartialUpdateContactRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialUpdateContactRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
        'documentType': json['documentType'] == null ? undefined : json['documentType'],
        'document': json['document'] == null ? undefined : json['document'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}

export function PartialUpdateContactRequestBodyDtoToJSON(json: any): PartialUpdateContactRequestBodyDto {
    return PartialUpdateContactRequestBodyDtoToJSONTyped(json, false);
}

export function PartialUpdateContactRequestBodyDtoToJSONTyped(value?: PartialUpdateContactRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'type': value['type'],
        'documentType': value['documentType'],
        'document': value['document'],
        'email': value['email'],
        'phone': value['phone'],
    };
}

