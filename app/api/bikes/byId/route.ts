import prisma from "../../../lib/prismadb";

interface IParams {
  bikeId?: string;
}

export default async function getbikesById(params: IParams) {
  try {
    const { bikeId } = params;

    const bikes = await prisma.bikes.findUnique({
      where: {
        id: bikeId,
      },
    });

    if (!bikeId) {
      return null;
    }
    return {
      ...bikes,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
