import { categoryService } from "../services/category.service";
import { Body, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../models/DTO/category.dto";

  @Route('category')
  @Tags('Category')
  export class CategoryController {
    @Get('get-category-list') 
    public async getCategoryList(
      @Query() isActive?: boolean
    ) {
      return await categoryService.getCategoryList(isActive);
    }

    @Get('get-category/{categoryCode}')
    public async getCategoryByCode(
      @Path() categoryCode: string
    ) {
      return await categoryService.getCategoryByCode(categoryCode);
    }

    @Put('update-category/{categoryCode}')
    public async updateCategory(
      @Path() categoryCode: string,
      @Body() category: UpdateCategoryDTO
    ) {
      return await categoryService.updateCategory(categoryCode, category);
    }

    @Post('create-category')
    public async createCategory(
      @Body() category: CreateCategoryDTO
    ) {
      return await categoryService.createCategory(category)
    }
  }