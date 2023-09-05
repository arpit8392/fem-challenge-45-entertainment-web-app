import content from "@/data.json";
import Image from "next/image";

const Trending = () => {
  const trendingContent = content.filter((item) => item.isTrending);
  return (
    <section className="space-y-4 pl-4">
      <h1 className="text-xl font-light tracking-[-0.312px]">Trending</h1>
      <ul className="flex items-center gap-4 overflow-x-auto">
        {trendingContent.map((item, index) => (
          <li key={index} className="relative h-[140px] w-[240px] shrink-0">
            <Image
              src={item.thumbnail.trending?.small || ""}
              alt={item.title}
              fill
              className="absolute z-10 rounded-lg object-cover object-center"
            />
            <div className="absolute bottom-0 z-20 p-4">
              <p className="text-[15px] font-medium">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Trending;
