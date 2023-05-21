import magicTheGatheting from "./subCategory/magicTheGatheting";
import tabelGames from "./subCategory/tabelGames";
import warhammer4000 from "./subCategory/warhammer4000";
import gameAccessories from "./subCategory/gameAccessories";
import paints from "./subCategory/paints";
import modalismAccessories from "./subCategory/modalismAccessories";
import childrenProducts from "./subCategory/childrenProducts";



const allSubCategory = [
    {
        name: 'Настольные игры',
        file: tabelGames
    },
    {
        name: 'Warhammer 40000',
        file: warhammer4000
    },
    {
        name: 'Аксессуары для игр',
        file: gameAccessories
    },
    {
        name: 'Краски',
        file: paints
    },
    {
        name: 'Аксессуары для моделизма',
        file: modalismAccessories
    },
    {
        name: 'Товары для детей',
        file: childrenProducts
    },
]

export default allSubCategory