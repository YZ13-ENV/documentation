import { DocumentMap } from "@/types/docs";
import { api } from "@/const/api";



export const api_map: DocumentMap = {
    id: 'api/rest-api',
    root: true,
    name: 'API',
    side: api
}

export const api_rest_api_endpoints_map: DocumentMap = {
    id: 'api/rest-api/endpoints',
    name: 'REST API Endpoints',
    side: api
}