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
}

export type Category = {
  id: number,
  name: CategoriesEnum,
  subCategories: SubCategory[],
}

export const categoriesArr: Category[] = [
  {
    id: 0,
    name: CategoriesEnum.Gadget,
    subCategories: [
      {
        id: 1,
        icon: SvgPhone(),
        name: SubCategoryEnum.smartphones,
      },
    ]
  },
  {
    id: 1,
    name: CategoriesEnum.Computer,
    subCategories: [
      {
        id: 1,
        icon: SvgLaptop(),
        name: SubCategoryEnum.laptops,
      },
    ]
  },
  {
    id: 2,
    name: CategoriesEnum.Photo,
    subCategories: []
  },
  {
    id: 3,
    name: CategoriesEnum.TV,
    subCategories: []
  },
  {
    id: 4,
    name: CategoriesEnum.Audio,
    subCategories: []
  },
  {
    id: 5,
    name: CategoriesEnum.Appliances,
    subCategories: []
  },
  {
    id: 6,
    name: CategoriesEnum.Climat,
    subCategories: []
  },
  {
    id: 7,
    name: CategoriesEnum.House,
    subCategories: [
      {
        id: 0,
        icon: SvgFfagrances(),
        name: SubCategoryEnum.fragrances,
      },
      {
        id: 1,
        icon: SvgSkincare(),
        name: SubCategoryEnum.skincare,
      },
      {
        id: 2,
        icon: SvgGoceries(),
        name: SubCategoryEnum.groceries,
      },
      {
        id: 3,
        icon: SvgDecor(),
        name: SubCategoryEnum.decoration,
      },
      {
        id: 4,
        icon: SvgFurniture(),
        name: SubCategoryEnum.furniture,
      },
      {
        id: 5,
        icon: SvgLightning(),
        name: SubCategoryEnum.lighting,
      },
    ]
  },
  {
    id: 8,
    name: CategoriesEnum.Dresses,
    subCategories: [
      {
        id: 0,
        icon: SvgTop(),
        name: SubCategoryEnum.tops,
      },
      {
        id: 1,
        icon: SvgDresses(),
        name: SubCategoryEnum.womensDresses,
      },
      {
        id: 2,
        icon: SvgWShoes(),
        name: SubCategoryEnum.womensShoes,
      },
      {
        id: 3,
        icon: SvgShirt(),
        name: SubCategoryEnum.mensShirts,
      },
      {
        id: 4,
        icon: SvgMShoes(),
        name: SubCategoryEnum.mensShoes,
      },
      {
        id: 5,
        icon: SvgWhatches(),
        name: SubCategoryEnum.mensWatches,
      },
      {
        id: 6,
        icon: SvgWWatch(),
        name: SubCategoryEnum.womensWatches,
      },
      {
        id: 7,
        icon: SvgBag(),
        name: SubCategoryEnum.womensBags,
      },
      {
        id: 8,
        icon: SvgJew(),
        name: SubCategoryEnum.womensJewellery,
      },
      {
        id: 9,
        icon: SvgSunglasses(),
        name: SubCategoryEnum.sunglasses,
      },
    ]
  },
  {
    id: 9,
    name: CategoriesEnum.Auto,
    subCategories: [
      {
        id: 0,
        icon: SvgAuto(),
        name: SubCategoryEnum.automotive
      },
      {
        id: 1,
        icon: SvgBike(),
        name: SubCategoryEnum.motorcycle
      },
    ]
  },
  {
    id: 10,
    name: CategoriesEnum.Tool,
    subCategories: []
  },
  {
    id: 11,
    name: CategoriesEnum.Tourism,
    subCategories: []
  },
  {
    id: 12,
    name: CategoriesEnum.Sport,
    subCategories: []
  },
  {
    id: 13,
    name: CategoriesEnum.Whatches,
    subCategories: []
  },
];
