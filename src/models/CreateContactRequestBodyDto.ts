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
 * @interface CreateContactRequestBodyDto
 */
export interface CreateContactRequestBodyDto {
    /**
     * Nome do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    name: string;
    /**
     * Tipo do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    type?: CreateContactRequestBodyDtoTypeEnum | null;
    /**
     * Tipo do documento do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    documentType?: CreateContactRequestBodyDtoDocumentTypeEnum | null;
    /**
     * Documento do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    document?: string | null;
    /**
     * Email do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    email?: string | null;
    /**
     * Telefone do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDto
     */
    phone?: string | null;
}


/**
 * @export
 */
export const CreateContactRequestBodyDtoTypeEnum = {
    Customer: 'CUSTOMER',
    Employee: 'EMPLOYEE',
    Supplier: 'SUPPLIER',
    Partner: 'PARTNER'
} as const;
export type CreateContactRequestBodyDtoTypeEnum = typeof CreateContactRequestBodyDtoTypeEnum[keyof typeof CreateContactRequestBodyDtoTypeEnum];

/**
 * @export
 */
export const CreateContactRequestBodyDtoDocumentTypeEnum = {
    Cnpj: 'CNPJ',
    Cpf: 'CPF'
} as const;
export type CreateContactRequestBodyDtoDocumentTypeEnum = typeof CreateContactRequestBodyDtoDocumentTypeEnum[keyof typeof CreateContactRequestBodyDtoDocumentTypeEnum];


/**
 * Check if a given object implements the CreateContactRequestBodyDto interface.
 */
export function instanceOfCreateContactRequestBodyDto(value: object): value is CreateContactRequestBodyDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateContactRequestBodyDtoFromJSON(json: any): CreateContactRequestBodyDto {
    return CreateContactRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateContactRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContactRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'] == null ? undefined : json['type'],
        'documentType': json['documentType'] == null ? undefined : json['documentType'],
        'document': json['document'] == null ? undefined : json['document'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}

export function CreateContactRequestBodyDtoToJSON(json: any): CreateContactRequestBodyDto {
    return CreateContactRequestBodyDtoToJSONTyped(json, false);
}

export function CreateContactRequestBodyDtoToJSONTyped(value?: CreateContactRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
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
