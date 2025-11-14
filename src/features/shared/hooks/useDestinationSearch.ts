import { useMemo, useState } from "react";

interface DestinationItem {
  destination: string;
  title?: string;
}

/**
 * Basic search hook for destination or title fields.
 * - Keeps original array reference outside.
 * - Provides filtered results based on current query (case-insensitive, substring match).
 * - Optional debouncing to avoid filtering at every keystroke for large lists.
 */
export function useDestinationSearch<T extends DestinationItem>(
  items: T[],
  options?: { debounce?: number }
) {
  const { debounce = 0 } = options || {};
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");

  // Debounce effect (simple timeout approach)
  if (debounce > 0) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
      const id = setTimeout(() => setQuery(rawQuery), debounce);
      return () => clearTimeout(id);
    }, [rawQuery, debounce]);
  } else {
    // No debounce: mirror rawQuery directly
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => setQuery(rawQuery), [rawQuery]);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => {
      const d = i.destination.toLowerCase();
      const t = i.title?.toLowerCase() || "";
      return d.includes(q) || t.includes(q);
    });
  }, [items, query]);

  return {
    query: rawQuery,
    setQuery: setRawQuery,
    filtered,
    hasResults: filtered.length > 0,
  };
}

export type UseDestinationSearchReturn<T extends DestinationItem> = ReturnType<
  typeof useDestinationSearch<T>
>;
