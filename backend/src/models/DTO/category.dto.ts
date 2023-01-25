export type CreateCategoryDTO = {
  code: string;
  description: string | null
}

export type UpdateCategoryDTO = {
  code: string;
  description: string | null;
  isActive: boolean;
}