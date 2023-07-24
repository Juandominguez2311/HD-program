"use client";
import { useRouter } from "next/navigation";
interface Props {
  id: any;
  price?: string;
  imageSrc?: string;
  name?: string;
  description?: string | null;
}
const styles = {
  purchaseBTN: {
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
  cartBTN: {
    backgroundColor: "grey",
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
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    padding: "10px",
  },
  columns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    padding: "10px",
  },
};

export default function Singlebike({
  price,
  imageSrc,
  name,
  id,
  description,
}: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="my-2 grid grid-cols-2 container">
        <div className="columna-1 columns">
          <img src={imageSrc} alt="Image" className="object-contain" />
        </div>
        <div className="columna-2 columns">
          <div>
            {" "}
            <h1 className="text-[4rem]">{name}</h1>
          </div>
          <br />
          <div>
            <h1>USD {price}</h1>
          </div>
          <br />
          <button
            type="submit"
            style={styles.purchaseBTN}
            onClick={() => router.push(`/requestform?id=${id}`)}
          >
            Request Data
          </button>
          <button style={styles.cartBTN} type="submit">
            Add to cart
          </button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
