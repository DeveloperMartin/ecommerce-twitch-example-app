import { locationService } from '../../src/services/location.service'
import { prismaMock } from '../database-simulator/singleton.simulator'

test('create new location', async () => {

  const location = {
    locationId: 1,
    code: 'locatison-code-test',
    description: 'location-description-test',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  prismaMock.location.create.mockResolvedValue(location)

  await expect(locationService.createLocation({
    code: 'locatison-code-test',
    description: 'location-description-test',
  })).resolves.toEqual(location)
})