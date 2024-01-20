import { DocumentMap } from "@/types/docs";
import { fundamentals } from "@/const/fundamentals";

export const fundamental_map: DocumentMap = {
    id: 'fundamentals',
    root: true,
    name: 'Основы',
    side: fundamentals
}

export const fundamental_projects_map: DocumentMap = {
    id: 'fundamentals/projects',
    name: 'Проекты',
    side: fundamentals
}

export const fundamental_projects_dm_map: DocumentMap = {
    id: 'fundamentals/projects/dm',
    name: 'DM',
    side: fundamentals
}

export const fundamental_projects_yz13_map: DocumentMap = {
    id: 'fundamentals/projects/yz13',
    name: 'YZ13',
    side: fundamentals
}