import { getMovieDetail } from "@/app/_services/movie";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await getMovieDetail(Number(slug));
  console.log("res", res);

  return <div>DetailPage</div>;
};

export default Page;
