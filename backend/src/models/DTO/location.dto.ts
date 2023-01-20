export type CreateLocationDTO = {
  code: string;
  description: string | null;
}

export type UpdateLocationDTO = {
  code: string;
  description: string | null;
  isActive: boolean;
}