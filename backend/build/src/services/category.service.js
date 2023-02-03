"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const client_1 = __importDefault(require("../models/client"));
class CategoryService {
    getCategoryList(isActive = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield client_1.default.category.findMany({
                where: {
                    isActive: isActive
                },
                select: {
                    categoryId: true,
                    code: true,
                    description: true
                }
            });
            return categories;
        });
    }
    getCategoryByCode(categoryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield client_1.default.category.findUnique({
                where: {
                    code: categoryCode
                },
                select: {
                    categoryId: true,
                    code: true,
                    description: true,
                    isActive: true
                }
            });
            return category;
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = yield client_1.default.category.create({
                data: {
                    code: category.code,
                    description: category.description
                }
            });
            return newCategory;
        });
    }
    updateCategory(categoryCode, category) {
        return __awaiter(this, void 0, void 0, function* () {
            //A modo de referencia no usar.
            // const categoryUpdateFind = await prisma.category.findUnique({
            //   where: {
            //     categoryId: 1 // El uno es un dato que debe venir como parametro
            //   }, 
            //   select: {
            //     code: true
            //   }
            // })
            // if(!categoryUpdateFind){
            //   return
            // }
            const updatedCategory = yield client_1.default.category.update({
                where: {
                    code: categoryCode
                },
                data: {
                    code: category.code,
                }
            });
            return updatedCategory;
        });
    }
}
exports.categoryService = new CategoryService();
