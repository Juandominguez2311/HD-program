import React, { useState } from "react";
import Slider from "./components/Slider";
import getAllAccesories from "./api/accesories/route";
import AccionesComponent from "./components/AccionesComponent";
import BikesComponent from "./components/BikesComponent";
import PaginationComponent from "./components/PaginationComponent";
import prisma from "./lib/prismadb";
import getAllbikes from "./api/bikes/route";
import Link from "next/link";
import ItemsPerPage from "./components/ItemsPerPageComponent";

interface HomeProps {
  searchParams: {
    page: string;
    item: string;
    itemsPage: string;
  };
}

export default async function Home({
  searchParams: { page = "1", item = "1", itemsPage = "100" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const images = ["slider1.jpeg", "slider2.jpeg", "slider3.jpeg"];
  const itemCount = 1;
  const pageSize = parseInt(itemsPage);

  const totalAccesoriesCount = await prisma.accesories.count();
  const totalAccesoriesPages = Math.ceil(
    (totalAccesoriesCount - itemCount) / pageSize
  );
  const accesoriesPaginated = await getAllAccesories({
    currentPage,
    pageSize,
    itemCount,
  });

  //bikes
  const totalBikesCount = await prisma.bikes.count();
  const totalBikesPages = Math.ceil((totalBikesCount - itemCount) / pageSize);
  const bikesPaginated = await getAllbikes({
    currentPage,
    pageSize,
    itemCount,
  });

  return (
    <main>
      <Slider images={images} />

      {item === "1" && (
        <div>
          <div className="flex items-end text-sm hidden lg:flex justify-end">
            <ItemsPerPage item={item} />
          </div>
          <div className="flex items-center my-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 justify-center  h-full">
            {(currentPage === 1 ? bikesPaginated.slice(0) : bikesPaginated).map(
              (item) => (
                <BikesComponent key={item.id} data={item} />
              )
            )}
          </div>
          {totalBikesPages > 1 && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalBikesPages}
              idTipoItem={item}
              pageSize={pageSize}
            />
          )}
        </div>
      )}

      {item === "2" && (
        <div>
          <div className="flex items-end text-sm hidden lg:flex justify-end">
            <div>Items per page :</div> <ItemsPerPage item={item} />
          </div>
          <div className="my-4 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
            {currentPage !== 1
              ? accesoriesPaginated.map((accessory) => (
                  <AccionesComponent key={accessory.id} data={accessory} />
                ))
              : accesoriesPaginated
                  .slice(0)
                  .map((accessory) => (
                    <AccionesComponent key={accessory.id} data={accessory} />
                  ))}
          </div>
          {totalAccesoriesPages > 1 && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalAccesoriesPages}
              idTipoItem={item}
              pageSize={pageSize}
            />
          )}
        </div>
      )}
    </main>
  );
}
