import watch1 from "@/assets/watch-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";
import perfume1 from "@/assets/perfume-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material?: string;
  type?: string;
}

// Category-specific product images and data
const categoryImageMap: Record<string, string> = {
  watches: watch1,
  bags: bag1,
  jewelry: jewelry1,
  perfume: perfume1,
};

const productNames: Record<string, string[]> = {
  watches: [
    "Aura Gold Chronograph", "Midnight Steel Classic", "Royal Platinum Dive", "Neon Carbon Sport",
    "Elite Rose Gold", "Titanium Heritage", "Diamond Luxury", "Urban Steel Automatic",
    "Vintage Leather Classic", "Modern Ceramic Sport", "Executive Steel", "Limited Edition Gold",
    "Sapphire Crystal Elite", "Racing Chronograph", "Dress Watch Platinum"
  ],
  bags: [
    "Noir Leather Tote", "Elite Suede Clutch", "Royal Canvas Backpack", "Platinum Handbag",
    "Diamond Studded Purse", "Vintage Leather Satchel", "Modern Canvas Tote", "Executive Briefcase",
    "Luxury Crossbody", "Heritage Leather Bag", "Designer Shoulder Bag", "Premium Travel Bag",
    "Elegant Evening Clutch", "Professional Laptop Bag", "Artisan Craft Tote"
  ],
  jewelry: [
    "Diamond Eternity Ring", "Gold Statement Necklace", "Platinum Tennis Bracelet", "Ruby Drop Earrings",
    "Sapphire Engagement Ring", "Pearl Classic Necklace", "Emerald Stud Earrings", "Silver Chain Bracelet",
    "Rose Gold Wedding Band", "Crystal Pendant Necklace", "Vintage Brooch Pin", "Modern Cuff Bracelet",
    "Luxury Watch Chain", "Designer Ring Set", "Precious Stone Collection"
  ],
  perfume: [
    "Noir Intense EDP", "Royal Oud Collection", "Crystal Fresh EDT", "Midnight Rose",
    "Golden Amber Essence", "Platinum Musk", "Diamond Floral", "Elite Woody",
    "Luxury Oriental", "Vintage Citrus", "Modern Spice", "Exclusive Reserve",
    "Signature Blend", "Premium Collection", "Limited Edition"
  ],
  shoes: [
    "Oxford Leather Classic", "Suede Loafer Elite", "Canvas Sport Sneaker", "Patent Dress Shoe",
    "Leather Boot Heritage", "Designer Stiletto", "Comfort Walking Shoe", "Athletic Performance",
    "Formal Oxford Black", "Casual Slip-On", "High-End Sneaker", "Luxury Sandal",
    "Professional Pump", "Weekend Casual", "Evening Elegance"
  ],
  accessories: [
    "Leather Belt Premium", "Silk Scarf Luxury", "Gold Cufflinks", "Designer Wallet",
    "Sunglasses Elite", "Watch Band Leather", "Luxury Keychain", "Premium Tie",
    "Silk Pocket Square", "Leather Gloves", "Designer Hat", "Luxury Umbrella",
    "Gold Money Clip", "Premium Card Holder", "Elite Phone Case"
  ],
  apparel: [
    "Silk Dress Shirt", "Wool Suit Jacket", "Cashmere Sweater", "Designer Jeans",
    "Luxury T-Shirt", "Formal Blazer", "Premium Polo", "Designer Dress",
    "Wool Overcoat", "Silk Blouse", "Luxury Tracksuit", "Designer Shorts",
    "Premium Activewear", "Formal Pants", "Luxury Loungewear"
  ],
  eyewear: [
    "Aviator Gold Frame", "Cat-Eye Designer", "Round Vintage Style", "Sport Wraparound",
    "Luxury Reading Glasses", "Designer Sunglasses", "Blue Light Blocking", "Prescription Elite",
    "Polarized Premium", "Titanium Frame", "Acetate Classic", "Metal Minimalist",
    "Luxury Bifocal", "Designer Progressive", "Premium Safety"
  ],
  tech: [
    "Luxury Smartphone", "Premium Headphones", "Designer Laptop", "Elite Smart Watch",
    "Luxury Speaker", "Premium Tablet", "Designer Phone Case", "Elite Charger",
    "Luxury Camera", "Premium Gaming", "Designer Monitor", "Elite Keyboard",
    "Luxury Mouse", "Premium Webcam", "Designer Stand"
  ],
  home: [
    "Crystal Chandelier", "Marble Coffee Table", "Silk Throw Pillow", "Leather Ottoman",
    "Designer Vase", "Luxury Candle Set", "Premium Art Print", "Elite Mirror",
    "Luxury Bedding", "Designer Lamp", "Premium Rug", "Elite Curtains",
    "Luxury Clock", "Designer Sculpture", "Premium Dinnerware"
  ]
};

const materials: Record<string, string[]> = {
  watches: ["Steel", "Gold", "Titanium", "Leather", "Metal"],
  bags: ["Leather", "Canvas", "Suede", "Synthetic"],
  jewelry: ["Gold", "Silver", "Platinum", "Diamond"],
  perfume: ["Eau de Parfum", "Eau de Toilette", "Cologne"],
  shoes: ["Leather", "Suede", "Canvas", "Synthetic"],
  accessories: ["Leather", "Metal", "Fabric", "Plastic"],
  apparel: ["Cotton", "Wool", "Silk", "Polyester"],
  eyewear: ["Metal", "Plastic", "Titanium", "Acetate"],
  tech: ["Metal", "Plastic", "Glass", "Carbon Fiber"],
  home: ["Wood", "Metal", "Glass", "Ceramic"]
};

const types: Record<string, string[]> = {
  watches: ["Automatic", "Quartz", "Digital", "Chronograph"],
  bags: ["Handbag", "Backpack", "Tote", "Clutch"],
  jewelry: ["Necklace", "Ring", "Bracelet", "Earrings"],
  perfume: ["Floral", "Woody", "Oriental", "Fresh"],
  shoes: ["Sneakers", "Formal", "Boots", "Sandals"],
  accessories: ["Belt", "Wallet", "Sunglasses", "Scarf"],
  apparel: ["Shirt", "Pants", "Dress", "Jacket"],
  eyewear: ["Sunglasses", "Optical", "Reading", "Blue Light"],
  tech: ["Smartphone", "Laptop", "Headphones", "Watch"],
  home: ["Decor", "Lighting", "Furniture", "Textiles"]
};

export const generateProducts = (category: string, count: number = 30): Product[] => {
  const products: Product[] = [];
  const key = category.toLowerCase();
  const names = productNames[key] || [`${category} Item`];
  const categoryMaterials = materials[key] || ["Premium"];
  const categoryTypes = types[key] || ["Standard"];
  
  // Use specific image for category or fallback to unsplash
  const categoryImage = categoryImageMap[key] || `https://source.unsplash.com/800x800/?luxury,${encodeURIComponent(key)}`;
  
  for (let i = 1; i <= count; i++) {
    const nameIndex = (i - 1) % names.length;
    const materialIndex = (i - 1) % categoryMaterials.length;
    const typeIndex = (i - 1) % categoryTypes.length;
    
    // Generate varied prices based on category
    const basePrices: Record<string, number> = {
      watches: 45000,
      jewelry: 35000,
      bags: 25000,
      perfume: 8000,
      shoes: 15000,
      accessories: 5000,
      apparel: 12000,
      eyewear: 18000,
      tech: 60000,
      home: 20000
    };
    
    const basePrice = basePrices[key] || 15000;
    const price = basePrice + Math.floor(Math.random() * basePrice);
    
    products.push({
      id: `${category}-${i}`,
      name: names[nameIndex] + (names.length < count ? ` ${Math.ceil(i / names.length)}` : ''),
      price,
      image: categoryImage,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      material: categoryMaterials[materialIndex],
      type: categoryTypes[typeIndex]
    });
  }
  
  return products;
};