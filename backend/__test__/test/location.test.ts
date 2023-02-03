import { prismaMock } from '../database-simulator/client-singleton'
import { CreateLocationDTO, UpdateLocationDTO } from '../../src/models/DTO/location.dto';
import { locationService } from '../../src/services/location.service';

test('Probar creacion de nueva location', async () => {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    prismaMock.location.create.mockResolvedValue(location)

    const newLocation: CreateLocationDTO = {
        code: "Prueba",
        description: "Descripción prueba"
    }

    await expect(locationService.createLocation(newLocation)).resolves.toEqual(location)
})

test('Editar un location', async () => {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    prismaMock.location.update.mockResolvedValue(location)

    const updateLocaton: UpdateLocationDTO = {
        code: "prueba2",
        description: "Descripción prueba2",
        isActive: true
    }

    await expect(locationService.updateLocation(location.code, updateLocaton)).resolves.toEqual(location)
})

test('Seleccionar una location', async () => {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    
    prismaMock.location.findUnique.mockResolvedValue(location)

    await expect(locationService.getLocationByCode(location.code)).resolves.toEqual(location)
})

test('Listar locaciones', async () => {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    
    prismaMock.location.findMany.mockResolvedValue([location])

    await expect(locationService.getLocationList(location.isActive)).resolves.toEqual([location])
})
