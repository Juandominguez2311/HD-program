import Link from "next/link";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  idTipoItem: string;
  pageSize: number;
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  idTipoItem,
  pageSize,
}: PaginationComponentProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={
          "?item=" + idTipoItem + "&page=" + page + "&itemsPage=" + pageSize
        }
        key={page}
        className={`join-item btn ${
          currentPage === page ? "btn-active pointer-events-none" : ""
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center gap-4 text-[1.rem] px-2 hidden lg:flex justify-center">
        {numberedPageItems}
      </div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={"?page=" + (currentPage - 1)} className="join-item btn">
            «
          </Link>
        )}
        <button className="join-item btn pointer-events-none">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link href={"?page=" + (currentPage + 1)} className="join-item btn">
            »
          </Link>
        )}
      </div>
    </>
  );
}
