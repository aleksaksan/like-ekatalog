import { useMemo } from "react";

//TODO add type to items
export const useSortedPosts = (items: any, price: number) => {
    const sortedItems = useMemo(() => {
    if (price)
      return [...items].sort((a,b) => a[price].localeCompare(b[price]));
    return items; 
  }, [price, items]);

    return sortedItems;
};