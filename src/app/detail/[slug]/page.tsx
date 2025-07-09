import DetailSection from "@/app/_components/organisms/DetailSection";
import { getMovieDetail } from "@/app/_services/movie";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getMovieDetail(Number(slug));

  return <DetailSection data={data} />;
};

export default Page;
