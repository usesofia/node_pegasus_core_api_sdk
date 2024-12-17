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

import type { CreatePostRequestBodyDtoAuthorOneOf } from './CreatePostRequestBodyDtoAuthorOneOf';
import {
    instanceOfCreatePostRequestBodyDtoAuthorOneOf,
    CreatePostRequestBodyDtoAuthorOneOfFromJSON,
    CreatePostRequestBodyDtoAuthorOneOfFromJSONTyped,
    CreatePostRequestBodyDtoAuthorOneOfToJSON,
} from './CreatePostRequestBodyDtoAuthorOneOf';
import type { string } from './string';
import {
    instanceOfstring,
    stringFromJSON,
    stringFromJSONTyped,
    stringToJSON,
} from './string';

/**
 * @type CreatePostRequestBodyDtoAuthor
 * Autor do post.
 * @export
 */
export type CreatePostRequestBodyDtoAuthor = CreatePostRequestBodyDtoAuthorOneOf | string;

export function CreatePostRequestBodyDtoAuthorFromJSON(json: any): CreatePostRequestBodyDtoAuthor {
    return CreatePostRequestBodyDtoAuthorFromJSONTyped(json, false);
}

export function CreatePostRequestBodyDtoAuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostRequestBodyDtoAuthor {
    if (json == null) {
        return json;
    }
    if (instanceOfCreatePostRequestBodyDtoAuthorOneOf(json)) {
        return CreatePostRequestBodyDtoAuthorOneOfFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }

    return {} as any;
}

export function CreatePostRequestBodyDtoAuthorToJSON(json: any): any {
    return CreatePostRequestBodyDtoAuthorToJSONTyped(json, false);
}

export function CreatePostRequestBodyDtoAuthorToJSONTyped(value?: CreatePostRequestBodyDtoAuthor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCreatePostRequestBodyDtoAuthorOneOf(value)) {
        return CreatePostRequestBodyDtoAuthorOneOfToJSON(value as CreatePostRequestBodyDtoAuthorOneOf);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
