import { CreateLocationDTO, UpdateLocationDTO } from "../models/DTO/location.dto";
import prisma from "../models";
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

}

export const locationService = new LocationService()