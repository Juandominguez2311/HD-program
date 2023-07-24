"use client";

import Link from "next/link";
const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "8px 12px",
    backgroundColor: "#f1f1f1",
  },

  link: {
    color: "#333",
    textDecoration: "none",
    display: "block",
    padding: "4px",
  },
};

export default function ItemsPerPage({ item }: any) {
  return (
    <div
      style={styles.container}
      className="flex items-end text-sm hidden gap-2 lg:flex "
      data-testid="items-per-page-container" // Add data-testid here
    >
      <button>
        <Link href={"?item=" + item + "&itemsPage=" + 4} style={styles.link}>
          4{" "}
        </Link>
      </button>
      <button>
        <Link href={"?item=" + item + "&itemsPage=" + 8} style={styles.link}>
          8{" "}
        </Link>
      </button>
      <button>
        <Link href={"?item=" + item + "&itemsPage=" + 12} style={styles.link}>
          12{" "}
        </Link>
      </button>
      <button>
        <Link href={"?item=" + item} style={styles.link}>
          100{" "}
        </Link>
      </button>
    </div>
  );
}
