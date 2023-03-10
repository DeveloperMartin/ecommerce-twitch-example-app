import { CreateLocationDTO, UpdateLocationDTO } from "../models/DTO/location.dto";
import prisma from "../models/client";
class LocationService {
  async getLocationList(isActive: boolean = true) {
    const location = await prisma.location.findMany({
      where: {
        isActive: isActive
      },
      select: {
        locationId: true,
        code: true,
        description: true
      }
    })

    return location
  }

  async getLocationByCode(locationCode: string) {
    const location = await prisma.location.findUnique({
      where: {
        code: locationCode
      },
      select: {
        locationId: true,
        code: true,
        description: true
      }
    })

    return location
  } 

  async updateLocation(locationCode:string, location: UpdateLocationDTO){
    const updatedLocation = await prisma.location.update({
      where: {
        code: locationCode
      },
      data: {
        code: location.code,
        description: location.description,
        isActive: location.isActive
      }
    })
    
    return updatedLocation
  }

  async createLocation(location: CreateLocationDTO) {
    const newLocation = await prisma.location.create({
      data: {
        code: location.code,
        description: location.description
      },
      select: {
        locationId: true,
        code: true,
        description: true
      }
    })

    return newLocation;
  }

}

export const locationService = new LocationService()