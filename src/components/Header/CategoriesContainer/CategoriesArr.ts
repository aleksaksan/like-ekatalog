import { CategoriesEnum } from "../../../shared/enums/CategoriesEnum";
import { SubCategoryEnum } from "../../../shared/enums/SubCategoryEnum";
import { SvgAuto } from "../../Svg/SvgFuncs/SvgSubmenu/SvgAuto";
import { SvgBag } from "../../Svg/SvgFuncs/SvgSubmenu/SvgBag";
import { SvgBike } from "../../Svg/SvgFuncs/SvgSubmenu/SvgBike";
import { SvgDecor } from "../../Svg/SvgFuncs/SvgSubmenu/SvgDecor";
import { SvgDresses } from "../../Svg/SvgFuncs/SvgSubmenu/SvgDresses";
import { SvgFfagrances } from "../../Svg/SvgFuncs/SvgSubmenu/SvgFfagrances";
import { SvgFurniture } from "../../Svg/SvgFuncs/SvgSubmenu/SvgFurniture";
import { SvgGoceries } from "../../Svg/SvgFuncs/SvgSubmenu/SvgGoceries";
import { SvgJew } from "../../Svg/SvgFuncs/SvgSubmenu/SvgJew";
import { SvgLaptop } from "../../Svg/SvgFuncs/SvgSubmenu/SvgLaptop";
import { SvgLightning } from "../../Svg/SvgFuncs/SvgSubmenu/SvgLightning";
import { SvgMShoes } from "../../Svg/SvgFuncs/SvgSubmenu/SvgMShoes";
import { SvgPhone } from "../../Svg/SvgFuncs/SvgSubmenu/SvgPhone";
import { SvgShirt } from "../../Svg/SvgFuncs/SvgSubmenu/SvgShirt";
import { SvgSkincare } from "../../Svg/SvgFuncs/SvgSubmenu/SvgSkincare";
import { SvgSunglasses } from "../../Svg/SvgFuncs/SvgSubmenu/SvgSunglasses";
import { SvgTop } from "../../Svg/SvgFuncs/SvgSubmenu/SvgTop";
import { SvgWhatches } from "../../Svg/SvgFuncs/SvgSubmenu/SvgWhatches";
import { SvgWShoes } from "../../Svg/SvgFuncs/SvgSubmenu/SvgWShoes";
import { SvgWWatch } from "../../Svg/SvgFuncs/SvgSubmenu/SvgWWatch";

export type SubCategory = {
  id: number,
  icon: JSX.Element,
  name: SubCategoryEnum,
  alias: string,
}

export type Category = {
  id: number,
  name: CategoriesEnum,
  subCategories: SubCategory[],
}

export const categoriesArr: Category[] = [
  
  {
    id: 0,
    name: CategoriesEnum.Stub,
    subCategories: []
  },
  {
    id: 1,
    name: CategoriesEnum.Gadget,
    subCategories: [
      {
        id: 1,
        icon: SvgPhone(),
        name: SubCategoryEnum.smartphones,
        alias: "smartphones",
      },
    ]
  },
  {
    id: 2,
    name: CategoriesEnum.Computer,
    subCategories: [
      {
        id: 1,
        icon: SvgLaptop(),
        name: SubCategoryEnum.laptops,
        alias: "laptops",
      },
    ]
  },
  {
    id: 3,
    name: CategoriesEnum.Photo,
    subCategories: []
  },
  {
    id: 4,
    name: CategoriesEnum.TV,
    subCategories: []
  },
  {
    id: 5,
    name: CategoriesEnum.Audio,
    subCategories: []
  },
  {
    id: 6,
    name: CategoriesEnum.Appliances,
    subCategories: []
  },
  {
    id: 7,
    name: CategoriesEnum.Climat,
    subCategories: []
  },
  {
    id: 8,
    name: CategoriesEnum.House,
    subCategories: [
      {
        id: 0,
        icon: SvgFfagrances(),
        name: SubCategoryEnum.fragrances,
        alias: "fragrances",
      },
      {
        id: 1,
        icon: SvgSkincare(),
        name: SubCategoryEnum.skincare,
        alias: "skincare",
      },
      {
        id: 2,
        icon: SvgGoceries(),
        name: SubCategoryEnum.groceries,
        alias: "groceries",
      },
      {
        id: 3,
        icon: SvgDecor(),
        name: SubCategoryEnum.decoration,
        alias: "decoration",
      },
      {
        id: 4,
        icon: SvgFurniture(),
        name: SubCategoryEnum.furniture,
        alias: "furniture",
      },
      {
        id: 5,
        icon: SvgLightning(),
        name: SubCategoryEnum.lighting,
        alias: "lighting",
      },
    ]
  },
  {
    id: 9,
    name: CategoriesEnum.Dresses,
    subCategories: [
      {
        id: 0,
        icon: SvgTop(),
        name: SubCategoryEnum.tops,
        alias: "tops",
      },
      {
        id: 1,
        icon: SvgDresses(),
        name: SubCategoryEnum.womensDresses,
        alias: "womens-dresses",
      },
      {
        id: 2,
        icon: SvgWShoes(),
        name: SubCategoryEnum.womensShoes,
        alias: "womens-shoes",
      },
      {
        id: 3,
        icon: SvgShirt(),
        name: SubCategoryEnum.mensShirts,
        alias: "mens-shirts",
      },
      {
        id: 4,
        icon: SvgMShoes(),
        name: SubCategoryEnum.mensShoes,
        alias: "mens-shoes",
      },
    ]
  },
  {
    id: 10,
    name: CategoriesEnum.Auto,
    subCategories: [
      {
        id: 0,
        icon: SvgAuto(),
        name: SubCategoryEnum.automotive,
        alias: "automotive",
      },
      {
        id: 1,
        icon: SvgBike(),
        name: SubCategoryEnum.motorcycle,
        alias: "motorcycle",
      },
    ]
  },
  {
    id: 11,
    name: CategoriesEnum.Tool,
    subCategories: []
  },
  {
    id: 12,
    name: CategoriesEnum.Tourism,
    subCategories: []
  },
  {
    id: 13,
    name: CategoriesEnum.Sport,
    subCategories: []
  },
  {
    id: 14,
    name: CategoriesEnum.Whatches,
    subCategories: [
      {
        id: 5,
        icon: SvgWhatches(),
        name: SubCategoryEnum.mensWatches,
        alias: "mens-watches",
      },
      {
        id: 6,
        icon: SvgWWatch(),
        name: SubCategoryEnum.womensWatches,
        alias: "womens-watches",
      },
      {
        id: 7,
        icon: SvgBag(),
        name: SubCategoryEnum.womensBags,
        alias: "womens-bags",
      },
      {
        id: 8,
        icon: SvgJew(),
        name: SubCategoryEnum.womensJewellery,
        alias: "womens-jewellery",
      },
      {
        id: 9,
        icon: SvgSunglasses(),
        name: SubCategoryEnum.sunglasses,
        alias: "sunglasses",
      },
    ]
  },
];
