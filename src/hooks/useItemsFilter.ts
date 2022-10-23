import { useMemo } from "react";

//TODO add type to items
export const useSortedPosts = (items: any, id: number) => {
    const sortedItems = useMemo(() => {
    if (id)
      return [...items].sort((a,b) => a[id].localeCompare(b[id]));
    return items; 
  }, [id, items]);

    return sortedItems;
};