import { CreateLocationDTO, UpdateLocationDTO } from "../models/DTO/location.dto";
import { locationService } from "../services/location.service";
import { Body, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";

@Route('location') 
@Tags('Location')
export class LocationController {
  @Get('get-location-list')
  public async getLocationList(
    @Query() isActive?: boolean
  ){
    return await locationService.getLocationList(isActive)
  }

  @Get('get-location/{locationCode}')
  public async getLocationByCode(
    @Path() locationCode: string
  ){
    return await locationService.getLocationByCode(locationCode)
  }

  @Put('update-location/{locationCode}')
  public async updateLocation(
    @Path() locationCode: string,
    @Body() location: UpdateLocationDTO){
    return await locationService.updateLocation(locationCode, location)
  }

  @Post('create-location')
  public async createLocation(
    @Body() location: CreateLocationDTO
  ){
    return await locationService.createLocation(location)
  }
}