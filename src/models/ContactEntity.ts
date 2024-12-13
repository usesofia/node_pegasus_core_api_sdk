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
 * @interface ContactEntity
 */
export interface ContactEntity {
    /**
     * Identificador do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    id: string;
    /**
     * Nome do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    name: string;
    /**
     * Tipo do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    type?: ContactEntityTypeEnum | null;
    /**
     * Tipo do documento do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    documentType?: ContactEntityDocumentTypeEnum | null;
    /**
     * Documento do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    document?: string | null;
    /**
     * Email do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    email?: string | null;
    /**
     * Telefone do contato.
     * @type {string}
     * @memberof ContactEntity
     */
    phone?: string | null;
    /**
     * Data de criação do contato.
     * @type {Date}
     * @memberof ContactEntity
     */
    createdAt: Date;
    /**
     * Data de atualização do contato.
     * @type {Date}
     * @memberof ContactEntity
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const ContactEntityTypeEnum = {
    Customer: 'CUSTOMER',
    Employee: 'EMPLOYEE',
    Supplier: 'SUPPLIER',
    Partner: 'PARTNER'
} as const;
export type ContactEntityTypeEnum = typeof ContactEntityTypeEnum[keyof typeof ContactEntityTypeEnum];

/**
 * @export
 */
export const ContactEntityDocumentTypeEnum = {
    Cnpj: 'CNPJ',
    Cpf: 'CPF'
} as const;
export type ContactEntityDocumentTypeEnum = typeof ContactEntityDocumentTypeEnum[keyof typeof ContactEntityDocumentTypeEnum];


/**
 * Check if a given object implements the ContactEntity interface.
 */
export function instanceOfContactEntity(value: object): value is ContactEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ContactEntityFromJSON(json: any): ContactEntity {
    return ContactEntityFromJSONTyped(json, false);
}

export function ContactEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': json['type'] == null ? undefined : json['type'],
        'documentType': json['documentType'] == null ? undefined : json['documentType'],
        'document': json['document'] == null ? undefined : json['document'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ContactEntityToJSON(json: any): ContactEntity {
    return ContactEntityToJSONTyped(json, false);
}

export function ContactEntityToJSONTyped(value?: ContactEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'type': value['type'],
        'documentType': value['documentType'],
        'document': value['document'],
        'email': value['email'],
        'phone': value['phone'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

