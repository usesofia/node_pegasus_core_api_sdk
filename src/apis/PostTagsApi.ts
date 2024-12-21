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
  CreatePostTagRequestBodyDto,
  ExceptionResponseEntity,
  PostTagEntity,
  PostTagsPageEntity,
  UpdatePostTagRequestBodyDto,
} from '../models/index';
import {
    CreatePostTagRequestBodyDtoFromJSON,
    CreatePostTagRequestBodyDtoToJSON,
    ExceptionResponseEntityFromJSON,
    ExceptionResponseEntityToJSON,
    PostTagEntityFromJSON,
    PostTagEntityToJSON,
    PostTagsPageEntityFromJSON,
    PostTagsPageEntityToJSON,
    UpdatePostTagRequestBodyDtoFromJSON,
    UpdatePostTagRequestBodyDtoToJSON,
} from '../models/index';

export interface CreatePostTagRequest {
    createPostTagRequestBodyDto: CreatePostTagRequestBodyDto;
    populate?: string;
}

export interface FindAllPostTagsRequest {
    populate?: string;
    searchTerm?: string;
    pageSize?: number;
    pageIndex?: number;
}

export interface FindOnePostTagRequest {
    id: string;
    populate?: string;
}

export interface PartialUpdatePostTagRequest {
    id: string;
    updatePostTagRequestBodyDto: UpdatePostTagRequestBodyDto;
    populate?: string;
}

export interface RemovePostTagRequest {
    id: string;
}

/**
 * PostTagsApi - interface
 * 
 * @export
 * @interface PostTagsApiInterface
 */
export interface PostTagsApiInterface {
    /**
     * 
     * @summary Cria uma nova tag.
     * @param {CreatePostTagRequestBodyDto} createPostTagRequestBodyDto 
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostTagsApiInterface
     */
    createPostTagRaw(requestParameters: CreatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>>;

    /**
     * Cria uma nova tag.
     */
    createPostTag(requestParameters: CreatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity>;

    /**
     * 
     * @summary Busca todas as tags.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {string} [searchTerm] Termo para busca por nome da tag.
     * @param {number} [pageSize] Quantidade de itens por página.
     * @param {number} [pageIndex] Índice da página.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostTagsApiInterface
     */
    findAllPostTagsRaw(requestParameters: FindAllPostTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagsPageEntity>>;

    /**
     * Busca todas as tags.
     */
    findAllPostTags(requestParameters: FindAllPostTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagsPageEntity>;

    /**
     * 
     * @summary Busca uma tag pelo identificador.
     * @param {string} id Identificador da tag.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostTagsApiInterface
     */
    findOnePostTagRaw(requestParameters: FindOnePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>>;

    /**
     * Busca uma tag pelo identificador.
     */
    findOnePostTag(requestParameters: FindOnePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity>;

    /**
     * 
     * @summary Atualiza parcialmente uma tag.
     * @param {string} id Identificador da tag.
     * @param {UpdatePostTagRequestBodyDto} updatePostTagRequestBodyDto 
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostTagsApiInterface
     */
    partialUpdatePostTagRaw(requestParameters: PartialUpdatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>>;

    /**
     * Atualiza parcialmente uma tag.
     */
    partialUpdatePostTag(requestParameters: PartialUpdatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity>;

    /**
     * 
     * @summary Remove uma tag.
     * @param {string} id Identificador da tag.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostTagsApiInterface
     */
    removePostTagRaw(requestParameters: RemovePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Remove uma tag.
     */
    removePostTag(requestParameters: RemovePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class PostTagsApi extends runtime.BaseAPI implements PostTagsApiInterface {

    /**
     * Cria uma nova tag.
     */
    async createPostTagRaw(requestParameters: CreatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>> {
        if (requestParameters['createPostTagRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'createPostTagRequestBodyDto',
                'Required parameter "createPostTagRequestBodyDto" was null or undefined when calling createPostTag().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/post-tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePostTagRequestBodyDtoToJSON(requestParameters['createPostTagRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTagEntityFromJSON(jsonValue));
    }

    /**
     * Cria uma nova tag.
     */
    async createPostTag(requestParameters: CreatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity> {
        const response = await this.createPostTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca todas as tags.
     */
    async findAllPostTagsRaw(requestParameters: FindAllPostTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagsPageEntity>> {
        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

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
            path: `/external/post-tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTagsPageEntityFromJSON(jsonValue));
    }

    /**
     * Busca todas as tags.
     */
    async findAllPostTags(requestParameters: FindAllPostTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagsPageEntity> {
        const response = await this.findAllPostTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca uma tag pelo identificador.
     */
    async findOnePostTagRaw(requestParameters: FindOnePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findOnePostTag().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/external/post-tags/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTagEntityFromJSON(jsonValue));
    }

    /**
     * Busca uma tag pelo identificador.
     */
    async findOnePostTag(requestParameters: FindOnePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity> {
        const response = await this.findOnePostTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Atualiza parcialmente uma tag.
     */
    async partialUpdatePostTagRaw(requestParameters: PartialUpdatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTagEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling partialUpdatePostTag().'
            );
        }

        if (requestParameters['updatePostTagRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'updatePostTagRequestBodyDto',
                'Required parameter "updatePostTagRequestBodyDto" was null or undefined when calling partialUpdatePostTag().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/post-tags/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePostTagRequestBodyDtoToJSON(requestParameters['updatePostTagRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTagEntityFromJSON(jsonValue));
    }

    /**
     * Atualiza parcialmente uma tag.
     */
    async partialUpdatePostTag(requestParameters: PartialUpdatePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTagEntity> {
        const response = await this.partialUpdatePostTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove uma tag.
     */
    async removePostTagRaw(requestParameters: RemovePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling removePostTag().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/external/post-tags/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove uma tag.
     */
    async removePostTag(requestParameters: RemovePostTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removePostTagRaw(requestParameters, initOverrides);
    }

}
