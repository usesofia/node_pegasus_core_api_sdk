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


import * as runtime from '../runtime';
import type {
  ContactEntity,
  ContactsPageEntity,
  CreateContactRequestBodyDto,
  ExceptionResponseEntity,
  PartialUpdateContactRequestBodyDto,
} from '../models/index';
import {
    ContactEntityFromJSON,
    ContactEntityToJSON,
    ContactsPageEntityFromJSON,
    ContactsPageEntityToJSON,
    CreateContactRequestBodyDtoFromJSON,
    CreateContactRequestBodyDtoToJSON,
    ExceptionResponseEntityFromJSON,
    ExceptionResponseEntityToJSON,
    PartialUpdateContactRequestBodyDtoFromJSON,
    PartialUpdateContactRequestBodyDtoToJSON,
} from '../models/index';

export interface CreateRequest {
    createContactRequestBodyDto: CreateContactRequestBodyDto;
}

export interface FindAllRequest {
    searchTerm?: string;
    pageSize?: number;
    pageIndex?: number;
}

export interface FindOneRequest {
    id: string;
}

export interface PartialUpdateRequest {
    id: string;
    partialUpdateContactRequestBodyDto: PartialUpdateContactRequestBodyDto;
}

export interface RemoveRequest {
    id: string;
}

/**
 * 
 */
export class ContactsApi extends runtime.BaseAPI {

    /**
     * Cria um novo contato.
     */
    async createRaw(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>> {
        if (requestParameters['createContactRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'createContactRequestBodyDto',
                'Required parameter "createContactRequestBodyDto" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/contacts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateContactRequestBodyDtoToJSON(requestParameters['createContactRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactEntityFromJSON(jsonValue));
    }

    /**
     * Cria um novo contato.
     */
    async create(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca todos os contatos.
     */
    async findAllRaw(requestParameters: FindAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactsPageEntity>> {
        const queryParameters: any = {};

        if (requestParameters['searchTerm'] != null) {
            queryParameters['searchTerm'] = requestParameters['searchTerm'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/contacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactsPageEntityFromJSON(jsonValue));
    }

    /**
     * Busca todos os contatos.
     */
    async findAll(requestParameters: FindAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactsPageEntity> {
        const response = await this.findAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca um contato pelo identificador.
     */
    async findOneRaw(requestParameters: FindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactEntityFromJSON(jsonValue));
    }

    /**
     * Busca um contato pelo identificador.
     */
    async findOne(requestParameters: FindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity> {
        const response = await this.findOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Atualiza parcialmente um contato.
     */
    async partialUpdateRaw(requestParameters: PartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling partialUpdate().'
            );
        }

        if (requestParameters['partialUpdateContactRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'partialUpdateContactRequestBodyDto',
                'Required parameter "partialUpdateContactRequestBodyDto" was null or undefined when calling partialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PartialUpdateContactRequestBodyDtoToJSON(requestParameters['partialUpdateContactRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactEntityFromJSON(jsonValue));
    }

    /**
     * Atualiza parcialmente um contato.
     */
    async partialUpdate(requestParameters: PartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity> {
        const response = await this.partialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove um contato.
     */
    async removeRaw(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling remove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove um contato.
     */
    async remove(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeRaw(requestParameters, initOverrides);
    }

}
