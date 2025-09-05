// src/data/products.ts
export interface ProductType {
  id: number;
  name: string;
  brand: string;
  price: string;
  category: string;
  img: string;
  description?: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Boda ေဖာက်စက်နှင့်ဖြတ်စက်များ",
    brand: "Toshiba",
    price: "600,000 MMK",
    img: "/images/Website/Stocks/Boda.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Coil",
    brand: "Sony",
    price: "450,000 MMK",
    img: "/images/Website/Stocks/Coil.png",
    category: "သံချောင်း",
  },
  {
    id: 3,
    name: "Dong cheng စက်ပစ္စည်းများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/Dongcheng1.jpg",
    category: "ဖောက်စက်များ",
  },
  {
    id: 4,
    name: "Dong cheng စက်ပစ္စည်းများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/Dong2.jpg",
    category: "ဖောက်စက်များ",
  },
  {
    id: 5,
    name: "N&N Exterior putty",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/N&N_Exterior_putty.jpg",
    category: "ပတ်တီး",
  },
  {
    id: 6,
    name: "N&N Exterior putty",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/N&N_Interior_putty.jpg",
    category: "ပတ်တီး",
  },
  {
    id: 7,
    name: "N&N plywood",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/N&N_plywood.png",
    category: "Plywood",
  },
  {
    id: 8,
    name: "plywood car",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/plywood_car.png",
    category: "Plywood",
  },
  {
    id: 9,
    name: "pvc water tank",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/pvc_water_tank.jpg",
    category: "Water Tank",
  },
  {
    id: 10,
    name: "shower set",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/shower_set.png",
    category: "ရေချိုးခန်းသုံးပစ္စည်းများ",
  },
  {
    id: 11,
    name: "Steel Water Tank",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/Steel_Water_Tank.jpg",
    category: "Steel Water Tank",
  },
  {
    id: 12,
    name: "ဖောက်စက်များ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/ဖောက်စက်များ.png",
    category: "ဖောက်စက်များ",
  },
  {
    id: 13,
    name: "ရေချိုးခန်းသုံးပစ္စည်းများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/ရေချိုးခန်းသုံးပစ္စည်းများ.png",
    category: "ရေချိုးခန်းသုံးပစ္စည်းများ",
  },
  {
    id: 14,
    name: "သံချောင်း",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/သံချောင်း.png",
    category: "သံချောင်း",
  },
  {
    id: 15,
    name: "သွပ်စက်",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/သွပ်စက်.png",
    category: "သွပ်စက်",
  },
  {
    id: 16,
    name: "သွပ်စက်လိုင်းများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/သွပ်စက်လိုင်းများ.png",
    category: "သွပ်စက်",
  },
  {
    id: 17,
    name: "သွပ်လိတ်ခွေများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/သွပ်လိတ်ခွေများ.png",
    category: "သွပ်စက်",
  },
  {
    id: 18,
    name: "အထပ်သားများ",
    brand: "Local",
    price: "200,000 MMK",
    img: "/images/Website/Stocks/အထပ်သားများ.png",
    category: "သွပ်စက်",
  },
];
