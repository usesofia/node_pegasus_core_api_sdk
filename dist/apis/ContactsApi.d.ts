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
import type { ContactEntity, ContactsPageEntity, CreateContactRequestBodyDto, PartialUpdateContactRequestBodyDto } from '../models/index';
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
export declare class ContactsApi extends runtime.BaseAPI {
    /**
     * Cria um novo contato.
     */
    createRaw(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>>;
    /**
     * Cria um novo contato.
     */
    create(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity>;
    /**
     * Busca todos os contatos.
     */
    findAllRaw(requestParameters: FindAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactsPageEntity>>;
    /**
     * Busca todos os contatos.
     */
    findAll(requestParameters?: FindAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactsPageEntity>;
    /**
     * Busca um contato pelo identificador.
     */
    findOneRaw(requestParameters: FindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>>;
    /**
     * Busca um contato pelo identificador.
     */
    findOne(requestParameters: FindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity>;
    /**
     * Atualiza parcialmente um contato.
     */
    partialUpdateRaw(requestParameters: PartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactEntity>>;
    /**
     * Atualiza parcialmente um contato.
     */
    partialUpdate(requestParameters: PartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactEntity>;
    /**
     * Remove um contato.
     */
    removeRaw(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove um contato.
     */
    remove(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
