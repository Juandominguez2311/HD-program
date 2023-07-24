import getAccesoriesById from "@/app/api/accesories/byId/route";
import SingleAccesory from "../SingleAccesory";

interface IParams {
  accesoryId?: string;
}

export default async function page({ params }: { params: IParams }) {
  const accesory = await getAccesoriesById(params);

  return (
    <SingleAccesory
      id={accesory?.id}
      price={accesory?.price}
      imageSrc={accesory?.imageSrc}
      name={accesory?.name}
      description={accesory?.description}
    />
  );
}
