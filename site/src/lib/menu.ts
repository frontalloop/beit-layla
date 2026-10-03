// Menu content for the on-page menu. Item names are shown as written by the
// bakery; only section/tab titles are translated. An item can carry its own
// Arabic name ({ en, ar }) when the original menu has one.
import type { Lang } from "@/lib/i18n";

type Bi = Record<Lang, string>;
export type MenuItem = string | Bi;
export interface MenuGroup {
  title: Bi;
  items: MenuItem[];
}
export interface MenuTab {
  key: string;
  label: Bi;
  groups: MenuGroup[];
}

const g = (en: string, ar: string, items: MenuItem[]): MenuGroup => ({
  title: { en, ar },
  items,
});

export const MENU_TABS: MenuTab[] = [
  {
    key: "breakfast",
    label: { en: "Breakfast", ar: "الفطار" },
    groups: [
      g("Appetizers", "مقبلات", [
        "French Fries",
        "Cheddar Fries",
        "Combo Beit Laila",
        "Cheesy Beef Fries",
        "Fried Halloumi",
      ]),
      g("Salads", "سلطات", [
        "Chicken Avo",
        "Scramble Tasty Beef",
        "Ranch BBQ Chicken",
        "Halloum",
        "Layla’s House Salad",
      ]),
      g("Dishes", "أطباق", [
        "Scramble Mushroom",
        "Avo Wrap",
        "Omelette Crepe",
        "Bigo Dish",
        "Sourdo Tuna",
        "Special Breakfast",
        "Shibata Halloum",
        "Scramble Sourdo",
        "Croque Monsieur",
      ]),
    ],
  },
  {
    key: "sandwiches",
    label: { en: "Sandwiches", ar: "ساندويتشات" },
    groups: [
      g("Bread", "خبز", ["Tortilla", "Ciabatta", "Croissant", "Toast"]),
      g("Fillings", "الحشو", [
        "Egg",
        "Smoked Turkey",
        "Salami",
        "Roast Beef",
        "Hot Dog",
        "Basterma",
        "Beef & Eggs",
        "Chicken Sausages",
      ]),
      g("Cheese", "الجبن", [
        "Turkey Spread",
        "Basterma Spread",
        "Mixed Cheese",
        "Cheddar",
        "Turkey",
        "Kiri",
      ]),
      g("Sweet", "الحلو", ["Jam", "Cream", "Peanut Butter", "Halawa", "Honey"]),
      g("Signature", "سيجنتشر", [
        { en: "Chicken", ar: "دجاج" },
        { en: "Beef", ar: "لحمة" },
        { en: "Sausage", ar: "سجق" },
      ]),
      g("Additions", "إضافات", [
        "Tomato",
        "Lettuce",
        "Pepper",
        "Rocket",
        "Jalapeño",
        "Olives",
        "Pickles",
        "Big Tasty",
        "Ranch",
        "BBQ",
        "Ketchup",
        "Mayonnaise",
        "Pesto Mayo",
        "Cheddar Sauce",
        "Sweet Chili Mango",
        "Buffalo Sauce",
      ]),
    ],
  },
  {
    key: "coffee",
    label: { en: "Coffee & Matcha", ar: "قهوة وماتشا" },
    groups: [
      g("Espresso", "إسبريسو", [
        "Espresso",
        "Macchiato",
        "Latte",
        "Mocha",
        "Caramel Macchiato",
        "Cappuccino",
        "Americano",
        "Cortado",
        "Flat White",
      ]),
      g("Hot Drinks", "مشروبات ساخنة", [
        "Tea",
        "Flavored Tea",
        "Milk Tea",
        "Karak Tea",
        "Russian Tea",
        "Herbal Tea",
        "Single Espresso",
        "Double Espresso",
        "French Coffee",
        "Hazelnut Coffee",
        "Nescafé",
        "Hot Cider",
        "Hot Chocolate",
        "Hot Chocolate with Marshmallows",
        "Spanish Latte",
      ]),
      g("Farabtshino", "Farabtshino", [
        "Classic",
        "Vanilla",
        "Caramel",
        "Salted Caramel",
        "Cookies",
        "Lotus",
        "White Mocha",
      ]),
      g("Matcha", "ماتشا", [
        "Classic",
        "Strawberry",
        "Mango",
        "Spanish",
        "Spanish Coconut Milk",
        "White Matcha",
        "Sea Salt Vanilla Matcha Frappe",
      ]),
      g("Ice Coffee", "قهوة مثلجة", [
        "Ice Latte",
        "Ice Americano",
        "Ice Cappuccino",
        "Ice Mocha",
        "Ice Caramel Macchiato",
        "Ice Spanish",
        "Ice White Mocha",
        "Ice Salted Caramel",
        "Ice Salted Vanilla",
        "Ice Salted Hazelnut",
      ]),
    ],
  },
  {
    key: "cold",
    label: { en: "Cold Drinks", ar: "مشروبات باردة" },
    groups: [
      g("Milkshake", "ميلك شيك", [
        "Vanilla",
        "Chocolate",
        "Oreo",
        "Lotus",
        "Strawberry",
        "Blueberry",
      ]),
      g("Milky Juice", "عصير بالحليب", ["Strawberry Milk", "Banana Milk"]),
      g("Cocktail", "كوكتيل", [
        "Avocado Classic",
        "Avocado Honey Nuts",
        "Tropical",
        "Passionista",
      ]),
      g("Fresh Juices", "عصائر طازجة", [
        "Lemon",
        "Lemon Mint",
        "Strawberry",
        "Mango",
        "Orange",
        "Watermelon",
      ]),
      g("Smoothie", "سموذي", [
        "Strawberry",
        "Mango",
        "Berry",
        "Peach",
        "Apple",
        "Pineapple",
        "Mixed Berry",
        "Pina Colada",
        "Kiwi",
        "Watermelon",
        "Blueberry Beach",
        "Mango Passion",
      ]),
      g("Red Bull", "ريد بول", [
        "Blueberry",
        "Blue Strawberry",
        "Peach",
        "Passion",
      ]),
      g("Soda", "صودا", [
        "Classic Mojito",
        "Flavored Mojito",
        "Lemonade",
        "Jelly Cola",
        "Blue Ocean",
        "Apple Cider",
        "Mixed Berry",
        "Passion Karkadi",
        "Strawberry Orange",
      ]),
      g("Ice Tea", "شاي مثلج", [
        "Peach",
        "Blueberry",
        "Passion",
        "Strawberry",
        "Mango Peach",
      ]),
      g("Additions", "إضافات", ["Red Bull", "Cans", "Water", "Flavor"]),
    ],
  },
  {
    key: "sweets",
    label: { en: "Sweets", ar: "حلويات" },
    groups: [
      g("Waffle", "وافل", [
        "Nutella",
        "White",
        "Caramel",
        "Kinder",
        "Oreo",
        "Lotus",
        "Pistachio",
        "Dark Chocolate",
      ]),
      g("Pancakes", "بان كيك", [
        "Nutella",
        "White",
        "Caramel",
        "Kinder",
        "Oreo",
        "Lotus",
        "Pistachio",
        "Dark Chocolate",
      ]),
      g("Croissant", "كرواسون", [
        "French Croissant",
        "Nutella Croissant",
        "Kinder Croissant",
        "White Chocolate Croissant",
        "Snickers Croissant",
        "Lotus Croissant",
        "Pistachio Croissant",
        "Apple Cinnamon Croissant",
      ]),
      g("Additions", "إضافات", ["Ice Cream", "Nuts", "Fruits"]),
    ],
  },
];
