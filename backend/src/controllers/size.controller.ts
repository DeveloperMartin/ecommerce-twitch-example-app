import { sizeService } from "../services/size.service";
import { Body, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";
import { UpdateSizeDTO, CreateSizeDTO } from '../models/DTO/size.dto';

@Route('size')
@Tags('Size')
export class SizeController {
    @Get('')
    public async getSizeList(
        @Query() isActive?: boolean
    ) {
        return await sizeService.getSizeList(isActive)
    }

    @Get('{sizeCode}')
    public async getSizeByCode(
        @Path() sizeCode: string
    ) {
        return await sizeService.getSizeByCode(sizeCode)
    }

    @Put('{sizeCode}')
    public async updateSize(
        @Path() sizeCode: string,
        @Body() size: UpdateSizeDTO
    ) {
        return await sizeService.updateSize(sizeCode, size)
    }

    @Post('')
    public async createSize(
        @Body() size: CreateSizeDTO
    ) {
        return await sizeService.createSize(size)
    }
}
