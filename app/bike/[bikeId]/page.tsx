import Singlebike from "../SingleBike";
import getbikesById from "@/app/api/bikes/byId/route";

interface IParams {
  bikeId?: string;
}

export default async function page({ params }: { params: IParams }) {
  const accesory = await getbikesById(params);

  return (
    <Singlebike
      id={accesory?.id}
      price={accesory?.price}
      imageSrc={accesory?.imageSrc}
      name={accesory?.name}
      description={accesory?.description}
    />
  );
}
