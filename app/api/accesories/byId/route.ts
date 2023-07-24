import prisma from "../../../lib/prismadb";

interface IParams {
  accesoryId?: string;
}

export default async function getAccesoriesById(params: IParams) {
  try {
    const { accesoryId } = params;

    const accesory = await prisma.accesories.findUnique({
      where: {
        id: accesoryId,
      },
    });

    if (!accesoryId) {
      return null;
    }
    return {
      ...accesory,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
