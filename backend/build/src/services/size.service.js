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
exports.sizeService = void 0;
const client_1 = __importDefault(require("../models/client"));
class SizeService {
    getSizeList(isActive = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const sizes = yield client_1.default.size.findMany({
                where: {
                    isActive
                },
                select: {
                    sizeId: true,
                    code: true,
                    description: true
                }
            });
            return sizes;
        });
    }
    getSizeByCode(sizeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const size = yield client_1.default.size.findUnique({
                where: {
                    code: sizeCode
                },
                select: {
                    sizeId: true,
                    code: true,
                    description: true,
                    isActive: true
                }
            });
            return size;
        });
    }
    createSize(size) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSize = yield client_1.default.size.create({
                data: {
                    code: size.code,
                    description: size.description
                }
            });
            return newSize;
        });
    }
    updateSize(sizeCode, size) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateSize = yield client_1.default.size.update({
                where: {
                    code: sizeCode
                },
                data: {
                    code: size.code,
                    description: size.description,
                    isActive: size.isActive
                }
            });
            return updateSize;
        });
    }
}
exports.sizeService = new SizeService();
