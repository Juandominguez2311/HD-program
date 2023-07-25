"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bikes } from "@prisma/client";

interface BikesComponent {
  data: Bikes;
  key: string;
}
const styles = {
  verMasButton: {
    backgroundColor: "hsl(265,75%,50%)",
    color: "white",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: ".25rem",
    boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
    boxSizing: "border-box",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily:
      'system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "16px",
    justifyContent: "center",
    lineHeight: "1.25",
    margin: "20px",
    minHeight: "3rem",
    padding: "calc(.875rem - 1px) calc(1.5rem - 1px)",
    position: "relative",
    textDecoration: "none",
    userSelect: "none",
    verticalAlign: "baseline",
    width: "auto",
  },
};

export default function BikesComponent({ data, key }: BikesComponent) {
  const router = useRouter();

  return (
    <div className="pt-4 border border-gray-300 rounded-md" key={key}>
      <div className="flex flex-col w-[300px] p-2 relative text-center">
        <div className="cursor-pointer hover:opacity-80 items-center">
          <div>
            <Image
              width={200}
              height={200}
              src={data.imageSrc}
              alt="Image"
              className="object-cover w-[320px] h-[150px]"
              onClick={() => router.push(`/bike/${data.id}`)}
            />
          </div>

          <div className="p-1">
            <h3 className="text-[16px]">{data.name}</h3>
            <span>$ {data.price}</span>
            <br />
            <button
              style={styles.verMasButton}
              onClick={() => router.push(`/bike/${data.id}`)}
            >
              {" "}
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
