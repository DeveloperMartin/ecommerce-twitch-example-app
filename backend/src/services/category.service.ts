import prisma from "../models";
import { UpdateCategoryDTO, CreateCategoryDTO } from '../models/DTO/category.dto';


class CategoryService {
  async getCategoryList(isActive: boolean = true) {
    const categories = await prisma.category.findMany({
      where: {
        isActive: isActive
      },
      select: {
        categoryId: true,
        code: true,
        description: true
      }
    })

    return categories
  }

}

export const categoryService = new CategoryService()