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
import type { CreatePostRequestBodyDtoAuthor } from './CreatePostRequestBodyDtoAuthor';
import {
    CreatePostRequestBodyDtoAuthorFromJSON,
    CreatePostRequestBodyDtoAuthorFromJSONTyped,
    CreatePostRequestBodyDtoAuthorToJSON,
    CreatePostRequestBodyDtoAuthorToJSONTyped,
} from './CreatePostRequestBodyDtoAuthor';
import type { CreatePostRequestBodyDtoTagsInner } from './CreatePostRequestBodyDtoTagsInner';
import {
    CreatePostRequestBodyDtoTagsInnerFromJSON,
    CreatePostRequestBodyDtoTagsInnerFromJSONTyped,
    CreatePostRequestBodyDtoTagsInnerToJSON,
    CreatePostRequestBodyDtoTagsInnerToJSONTyped,
} from './CreatePostRequestBodyDtoTagsInner';

/**
 * 
 * @export
 * @interface PostEntity
 */
export interface PostEntity {
    /**
     * Identificador do post.
     * @type {string}
     * @memberof PostEntity
     */
    id: string;
    /**
     * Identificador da organização.
     * @type {string}
     * @memberof PostEntity
     */
    organization: string;
    /**
     * Identificador do usuário que criou o post.
     * @type {string}
     * @memberof PostEntity
     */
    createdByUser: string;
    /**
     * 
     * @type {CreatePostRequestBodyDtoAuthor}
     * @memberof PostEntity
     */
    author?: CreatePostRequestBodyDtoAuthor | null;
    /**
     * Tags do post.
     * @type {Array<CreatePostRequestBodyDtoTagsInner>}
     * @memberof PostEntity
     */
    tags: Array<CreatePostRequestBodyDtoTagsInner>;
    /**
     * Título do post.
     * @type {string}
     * @memberof PostEntity
     */
    title: string;
    /**
     * Conteúdo do post.
     * @type {string}
     * @memberof PostEntity
     */
    content: string;
    /**
     * Status de publicação do post.
     * @type {boolean}
     * @memberof PostEntity
     */
    published: boolean;
    /**
     * Data de publicação do post.
     * @type {Date}
     * @memberof PostEntity
     */
    publishedAt?: Date | null;
    /**
     * Data de criação do post.
     * @type {Date}
     * @memberof PostEntity
     */
    createdAt: Date;
    /**
     * Data de atualização do post.
     * @type {Date}
     * @memberof PostEntity
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the PostEntity interface.
 */
export function instanceOfPostEntity(value: object): value is PostEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('organization' in value) || value['organization'] === undefined) return false;
    if (!('createdByUser' in value) || value['createdByUser'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    if (!('published' in value) || value['published'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function PostEntityFromJSON(json: any): PostEntity {
    return PostEntityFromJSONTyped(json, false);
}

export function PostEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'organization': json['organization'],
        'createdByUser': json['createdByUser'],
        'author': json['author'] == null ? undefined : CreatePostRequestBodyDtoAuthorFromJSON(json['author']),
        'tags': ((json['tags'] as Array<any>).map(CreatePostRequestBodyDtoTagsInnerFromJSON)),
        'title': json['title'],
        'content': json['content'],
        'published': json['published'],
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function PostEntityToJSON(json: any): PostEntity {
    return PostEntityToJSONTyped(json, false);
}

export function PostEntityToJSONTyped(value?: PostEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'organization': value['organization'],
        'createdByUser': value['createdByUser'],
        'author': CreatePostRequestBodyDtoAuthorToJSON(value['author']),
        'tags': ((value['tags'] as Array<any>).map(CreatePostRequestBodyDtoTagsInnerToJSON)),
        'title': value['title'],
        'content': value['content'],
        'published': value['published'],
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt'] as any).toISOString()),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

