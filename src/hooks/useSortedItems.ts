import { useMemo } from "react";
import { ItemsMockType } from "../pages/CatalogPage/itemsMock";

//TODO add type to items
export const useSortedItems = (items: ItemsMockType[], id: number) => {
    const sortedItems = useMemo(() => {
    if (id === 0) // по возрастанию
      return [...items].sort((a,b) => a.price - b.price);
    else          // иначе по убыванию
      return [...items].sort((a,b) => b.price - a.price);
  }, [id, items]);

    return sortedItems;
};