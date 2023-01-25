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

  async getCategoryByCode(categoryCode: string) {
    const category = await prisma.category.findUnique({
      where: {
        code: categoryCode
      },
      select: {
        categoryId: true,
        code: true,
        description: true,
        isActive: true
      }
    })

    return category
  }

}

export const categoryService = new CategoryService()