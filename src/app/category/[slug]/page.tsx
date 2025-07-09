import { getFilteredMovies } from "@/app/_services/movie";
import { MovieListResponse } from "@/app/upcoming/page";
import BannerList from "@/app/_components/organisms/BannerList";

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const categoryDetailRes = await getFilteredMovies<MovieListResponse>(
    Number(slug)
  );

  return (
    <BannerList
      data={categoryDetailRes.results}
      totalPage={categoryDetailRes.total_pages}
      slug={Number(slug)}
    />
  );
};

export default CategoryDetailPage;
