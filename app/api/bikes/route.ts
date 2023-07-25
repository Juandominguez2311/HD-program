import prisma from "../../lib/prismadb";

type BikesProps = {
  currentPage: number;
  pageSize: number;
  itemCount: number;
};

export interface Bike {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  description: string;
}

export default async function getAllbikes({
  currentPage,
  pageSize,
  itemCount,
}: BikesProps): Promise<Bike[]> {
  try {
    let bikesPaginated;
    if (pageSize === 4 || pageSize === 8 || pageSize === 12) {
      bikesPaginated = await prisma.bikes.findMany({
        orderBy: { id: "desc" },
        skip:
          (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : itemCount),
        take: pageSize,
      });

      return bikesPaginated;
    }
    bikesPaginated = await prisma.bikes.findMany({
      orderBy: { id: "desc" },
    });
    return bikesPaginated;
  } catch (error: any) {
    throw new Error(error);
  }
}
