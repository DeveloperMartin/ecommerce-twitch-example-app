import { locationService } from '../../src/services/location.service'
import { categoryService } from '../../src/services/category.service'
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


describe('getCategoryByCode', () => { 
  it('Should return a category with the specified code', async () => {
    const mockCategory = {
      categoryId: 1,
      code: 'CAT1',
      description: 'Test Category 1',
      isActive: true
    };

    const findUniqueMock = jest.fn().mockReturnValue(mockCategory);
    (prismaMock.category.findUnique as any) = findUniqueMock;

  

    const category = await categoryService.getCategoryByCode('CAT1');
    expect(category).toEqual(mockCategory);
    expect(category?.code).toEqual('CAT1');
    // expect(findUniqueMock).toHaveBeenCalledWith({
    //   where: {
    //     code: 'CAT1'
    //   },
    //   select: {
    //     categoryId: true,
    //     code: true,
    //     description: true,
    //     isActive: true
    //   }
    // });

  })
 })


