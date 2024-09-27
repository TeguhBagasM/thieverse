"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "./ui/pagination";

interface QueryPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function QueryPagination({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: QueryPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(prevPage)}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(prevPage);
              }}
            />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <PaginationItem className="hidden sm:inline-block" key={`page-button-${page}`}>
            <PaginationLink
              isActive={currentPage === page}
              href={createPageURL(page)}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {nextPage <= totalPages && (
          <PaginationItem>
            <PaginationNext
              href={createPageURL(nextPage)}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(nextPage);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
