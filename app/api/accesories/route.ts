import prisma from "../../lib/prismadb";
type AccesoriesProps = {
  currentPage: number;
  pageSize: number;
  itemCount: number;
};

export interface Accesory {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  description: string;
}
export default async function getAllAccesories({
  currentPage,
  pageSize,
  itemCount,
}: AccesoriesProps): Promise<Accesory[]> {
  try {
    let accesories;
    if (pageSize === 4 || pageSize === 8 || pageSize === 12) {
      accesories = await prisma.accesories.findMany({
        orderBy: { id: "desc" },
        skip:
          (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : itemCount),
        take: pageSize,
      });

      return accesories;
    }
    accesories = await prisma.accesories.findMany({
      orderBy: { id: "desc" },
    });
    return accesories;
  } catch (error: any) {
    throw new Error(error);
  }
}
