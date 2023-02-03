import { CreateSizeDTO, UpdateSizeDTO } from '../models/DTO/size.dto';
import prisma from "../models/client";
class SizeService {
    async getSizeList(isActive: boolean = true) {
        const sizes = await prisma.size.findMany({
            where: {
                isActive
            },
            select: {
                sizeId: true,
                code: true,
                description: true
            }
        })

        return sizes
    }

    async getSizeByCode(sizeCode: string) {
        const size = await prisma.size.findUnique({
            where: {
                code: sizeCode
            },
            select: {
                sizeId: true,
                code: true,
                description: true,
                isActive: true
            }
        })

        return size
    }

    async createSize(size: CreateSizeDTO) {
        const newSize = await prisma.size.create({
            data: {
                code: size.code,
                description: size.description
            }
        })

        return newSize
    }

    async updateSize(sizeCode: string, size: UpdateSizeDTO) {
        const updateSize = await prisma.size.update({
            where: {
                code: sizeCode
            },
            data: {
                code: size.code,
                description: size.description,
                isActive: size.isActive
            }
        })
        return updateSize
    }
}

export const sizeService = new SizeService()
