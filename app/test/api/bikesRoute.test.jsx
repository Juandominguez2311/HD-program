import getAllBikes from '../../api/bikes/route';
import prisma from '../../lib/prismadb';

jest.mock('../../lib/prismadb', () => ({
  bikes: {
    findMany: jest.fn(),
  },
}));

describe('getAllBikes function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns accesories', async () => {
    prisma.bikes.findMany.mockResolvedValueOnce([
      { id: 1, name: 'Accessory 1' },
      { id: 2, name: 'Accessory 2' },
      { id: 3, name: 'Accessory 3' },
      { id: 4, name: 'Accessory 4' },
    ]);

    const pageSize = 4;
    const currentPage = 1;
    const itemCount = 0;
    const paginated = true;

    const result = await getAllBikes({
      pageSize,
      currentPage,
      itemCount,
      paginated,
    });

    expect(prisma.bikes.findMany).toHaveBeenCalledWith({
      orderBy: { id: 'desc' },
      skip: 0,
      take: 4,
    });

    expect(result).toEqual([
      { id: 1, name: 'Accessory 1' },
      { id: 2, name: 'Accessory 2' },
      { id: 3, name: 'Accessory 3' },
      { id: 4, name: 'Accessory 4' },
    ]);
  });

  it('throws an error when an error occurs in prisma', async () => {
    prisma.bikes.findMany.mockRejectedValueOnce(new Error('Prisma error'));

    const pageSize = 8;
    const currentPage = 1;
    const itemCount = 0;
    const paginated = true;

    await expect(
getAllBikes({ pageSize, currentPage, itemCount, paginated })
    ).rejects.toThrowError('Prisma error');
  });
});
