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
import type { HealthResponseDto } from '../models/index';
/**
 *
 */
export declare class HealthApi extends runtime.BaseAPI {
    /**
     * Gera um erro de teste.
     */
    errorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Gera um erro de teste.
     */
    error(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Verifica o status do serviço.
     */
    healthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponseDto>>;
    /**
     * Verifica o status do serviço.
     */
    health(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponseDto>;
}
