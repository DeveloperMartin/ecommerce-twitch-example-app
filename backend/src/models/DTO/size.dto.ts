export type CreateSizeDTO = {
    code: string;
    description: string | null;
}

export type UpdateSizeDTO = {
    code: string;
    description: string | null;
    isActive: boolean;
}