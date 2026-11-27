"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";

const SearchInput = () => {
  const router = useRouter();
  const currentQuery = useSearchParams().get("query") ?? "";
  const [search, setSearch] = useState(currentQuery);
  const [debouncedSearch] = useDebounce(search, 1000);
  const currentPath = usePathname();

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // Tunggu debounce menyusul input, dan jangan menavigasi bila URL sudah sesuai.
    if (debouncedSearch !== search || debouncedSearch === currentQuery) return;

    const url = debouncedSearch
      ? `${currentPath}?query=${encodeURIComponent(debouncedSearch)}`
      : currentPath;
    router.replace(url, { scroll: false });
    // currentQuery sengaja tidak jadi dependency: perubahan URL dari luar tidak boleh ditimpa.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, debouncedSearch, router]);

  return (
    <div className="relative w-full sm:max-w-xs">
      <label htmlFor="site-search" className="sr-only">
        Cari
      </label>
      <Search className="absolute left-2 top-2/4 size-4 -translate-y-2/4 text-muted-foreground" aria-hidden="true" />
      <Input
        id="site-search"
        type="search"
        placeholder="Cari..."
        className="w-full rounded-lg bg-background pl-8"
        value={search}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export default SearchInput;
