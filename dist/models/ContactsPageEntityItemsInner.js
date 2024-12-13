"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsPageEntityItemsInnerDocumentTypeEnum = exports.ContactsPageEntityItemsInnerTypeEnum = void 0;
exports.instanceOfContactsPageEntityItemsInner = instanceOfContactsPageEntityItemsInner;
exports.ContactsPageEntityItemsInnerFromJSON = ContactsPageEntityItemsInnerFromJSON;
exports.ContactsPageEntityItemsInnerFromJSONTyped = ContactsPageEntityItemsInnerFromJSONTyped;
exports.ContactsPageEntityItemsInnerToJSON = ContactsPageEntityItemsInnerToJSON;
exports.ContactsPageEntityItemsInnerToJSONTyped = ContactsPageEntityItemsInnerToJSONTyped;
/**
 * @export
 */
exports.ContactsPageEntityItemsInnerTypeEnum = {
    Customer: 'CUSTOMER',
    Employee: 'EMPLOYEE',
    Supplier: 'SUPPLIER',
    Partner: 'PARTNER'
};
/**
 * @export
 */
exports.ContactsPageEntityItemsInnerDocumentTypeEnum = {
    Cnpj: 'CNPJ',
    Cpf: 'CPF'
};
/**
 * Check if a given object implements the ContactsPageEntityItemsInner interface.
 */
function instanceOfContactsPageEntityItemsInner(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function ContactsPageEntityItemsInnerFromJSON(json) {
    return ContactsPageEntityItemsInnerFromJSONTyped(json, false);
}
function ContactsPageEntityItemsInnerFromJSONTyped(json, ignoreDiscriminator) {
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
function ContactsPageEntityItemsInnerToJSON(json) {
    return ContactsPageEntityItemsInnerToJSONTyped(json, false);
}
function ContactsPageEntityItemsInnerToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
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
