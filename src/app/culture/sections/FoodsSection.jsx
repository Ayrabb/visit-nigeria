import Image from "next/image";

const FOODS = [
  {
    name: "Jollof Rice",
    region: "Across Nigeria",
    image: "/images/foods/jollof.png",
    description:
      "Smoky, party-style rice cooked in rich tomato and pepper base, often served with grilled chicken and plantain. The best in the world, Don't let a Ghanaian tell you otherwise."

  },
  {
    name: "Suya",
    region: "Northern Nigeria",
    image: "/images/foods/suya.png",
    description:
      "Street-side grilled skewers of spiced beef or chicken, finished with ground kuli-kuli and fresh onions.",
  },
  {
    name: "Pounded Yam & Egusi",
    region: "South West / North Central",
    image: "/images/foods/poundegusi.png",
    description:
      "Soft pounded yam paired with melon seed soup, layered with leafy greens and assorted meats.",
  },
  {
    
    name: "Afang soup",
    region: "South South",
    image: "/images/foods/afang.png",
    description:
      "Leafy soups from the coastal regions, dense with seafood, periwinkles, and fragrant palm oil.",
  }, {
     name: "Danwake",
     region: "North West",
     image: "/images/foods/danwake.png",
     description:
     "Danwake is a popular Northern Nigerian Hausa delicacy made from bean flour and potash dumplings, typically served with a mixture of vegetable oil, yaji (chili pepper spice), diced fresh vegetables with boiled eggs"
  }, {
    name: "Masa",
    region: "North Eest",
    image: "/images/foods/masa.png",
    description:
    "Masa is a made of rice cake fried and typically served with yaji (chili pepper spice)"
 }
];

export default function FoodsSection() {
  return (
    <section>
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-2">
            Nigerian Foods
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Flavours you will remember.
          </h2>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {FOODS.map((food) => (
          <article
            key={food.name}
            className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          >
            <div className="relative h-40 md:h-full">
              <Image
                src={food.image}
                alt={food.name}
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover image-hover-zoom"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-1">{food.name}</h3>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-3">
                {food.region}
              </p>
              <p className="text-sm text-slate-200/90">{food.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

