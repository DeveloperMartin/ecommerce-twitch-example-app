import { categoryService } from "../services/category.service";
import { Body, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../models/DTO/category.dto";

  @Route('category')
  @Tags('Category')
  export class CategoryController {
  }