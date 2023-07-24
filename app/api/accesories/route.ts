import prisma from "../../lib/prismadb";

export default async function getAllAccesories({
  currentPage,
  pageSize,
  itemCount,
  paginated,
}: any): Promise<any[]> {
  try {
    let accesories;
    if (
      parseInt(pageSize) === 4 ||
      parseInt(pageSize) === 8 ||
      parseInt(pageSize) === 12
    ) {
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
