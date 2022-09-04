import { CategoriesEnum } from "../../../shared/enums/CategoriesEnum";
import { SubCategoryEnum } from "../../../shared/enums/SubCategoryEnum";
import { SvgDecor } from "../../Svg/SvgFuncs/SvgSubmenu/SvgDecor";
import { SvgFfagrances } from "../../Svg/SvgFuncs/SvgSubmenu/SvgFfagrances";
import { SvgFurniture } from "../../Svg/SvgFuncs/SvgSubmenu/SvgFurniture";
import { SvgGoceries } from "../../Svg/SvgFuncs/SvgSubmenu/SvgGoceries";
import { SvgLaptop } from "../../Svg/SvgFuncs/SvgSubmenu/SvgLaptop";
import { SvgLightning } from "../../Svg/SvgFuncs/SvgSubmenu/SvgLightning";
import { SvgPhone } from "../../Svg/SvgFuncs/SvgSubmenu/SvgPhone";
import { SvgSkincare } from "../../Svg/SvgFuncs/SvgSubmenu/SvgSkincare";

export const Categories = [
  {
    id: 1,
    name: CategoriesEnum.Gadget,
    subCategories: [
      {
        id: 1,
        icon: SvgPhone,
        name: SubCategoryEnum.smartphones,
      },
    ]
  },
  {
    id: 2,
    name: CategoriesEnum.Computer,
    subCategories: [
      {
        id: 1,
        icon: SvgLaptop,
        name: SubCategoryEnum.laptops,
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
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 7,
    name: CategoriesEnum.Climat,
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 8,
    name: CategoriesEnum.House,
    subCategories: [
      {
        id: 0,
        icon: SvgFfagrances,
        name: SubCategoryEnum.fragrances,
      },
      {
        id: 1,
        icon: SvgSkincare,
        name: SubCategoryEnum.skincare,
      },
      {
        id: 2,
        icon: SvgGoceries,
        name: SubCategoryEnum.groceries,
      },
      {
        id: 3,
        icon: SvgDecor,
        name: SubCategoryEnum.decoration,
      },
      {
        id: 4,
        icon: SvgFurniture,
        name: SubCategoryEnum.furniture,
      },
      {
        id: 5,
        icon: SvgLightning,
        name: SubCategoryEnum.lighting,
      },
    ]
  },
  {
    id: 9,
    name: CategoriesEnum.Dresses,
    subCategories: [
      {
        id: 0,
        icon: SvgFfagrances,
        name: SubCategoryEnum.fragrances,
      },
      {
        id: 1,
        icon: SvgSkincare,
        name: SubCategoryEnum.skincare,
      },
      {
        id: 2,
        icon: SvgGoceries,
        name: SubCategoryEnum.groceries,
      },
      {
        id: 3,
        icon: SvgDecor,
        name: SubCategoryEnum.decoration,
      },
      {
        id: 4,
        icon: SvgFurniture,
        name: SubCategoryEnum.furniture,
      },
      {
        id: 5,
        icon: SvgLightning,
        name: SubCategoryEnum.lighting,
      },
      {
        id: 6,
        icon: SvgGoceries,
        name: SubCategoryEnum.groceries,
      },
      {
        id: 7,
        icon: SvgDecor,
        name: SubCategoryEnum.decoration,
      },
      {
        id: 8,
        icon: SvgFurniture,
        name: SubCategoryEnum.furniture,
      },
      {
        id: 9,
        icon: SvgLightning,
        name: SubCategoryEnum.lighting,
      },
    ]
  },
  {
    id: 10,
    name: CategoriesEnum.Auto,
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 11,
    name: CategoriesEnum.Tool,
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 12,
    name: CategoriesEnum.Tourism,
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 13,
    name: CategoriesEnum.Sport,
    subCategories: [
      SubCategoryEnum
    ]
  },
  {
    id: 14,
    name: CategoriesEnum.Whatches,
    subCategories: [
      SubCategoryEnum
    ]
  },
];
