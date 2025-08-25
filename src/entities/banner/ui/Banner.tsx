import { useGetBanners } from "../hook/useGetBanners";
import BannerCarousel from "./BannerCarousel";

export function Banner() {
  const { data: bannerItems } = useGetBanners({
    refetchInterval: 60000 * 30,
  });

  return <BannerCarousel slides={bannerItems} />;
}
