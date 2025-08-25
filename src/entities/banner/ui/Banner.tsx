import { useGetBanners } from "../hook/useGetBanners";
import BannerCarousel from "./BannerCarousel";

export function Banner() {
  const { data: bannerItems } = useGetBanners({
    refetchInterval: 3000,
    staleTime: 2000,
  });

  return <BannerCarousel slides={bannerItems} />;
}
