import DetailSection from "@/app/_components/organisms/DetailSection";
import RecommendationSection from "@/app/_components/organisms/RecommendationSection";
import Reviews from "@/app/_components/organisms/Reviews";
import SimilarSection from "@/app/_components/organisms/SimilarSection";
import {
  getMovieDetail,
  getMovieRecommendations,
  getMovieReviews,
  getMovieSimilar,
} from "@/app/_services/movie";
import {
  MovieDetail,
  MovieListResponse,
  MovieReviewsResponse,
} from "@/app/_types/movie";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getMovieDetail<MovieDetail>(slug);
  const reviews = await getMovieReviews<MovieReviewsResponse>(slug);
  const similar = await getMovieSimilar<MovieListResponse>(slug);
  const recommendation = await getMovieRecommendations<MovieListResponse>(slug);

  return (
    <div>
      <DetailSection data={data} />;
      <SimilarSection
        data={similar.results}
        totalPage={similar.total_pages}
        id={slug}
      />
      <RecommendationSection
        data={recommendation.results}
        totalPage={similar.total_pages}
        id={slug}
      />
      <Reviews
        data={reviews.results}
        totalPage={reviews.total_pages}
        totalResults={reviews.total_results}
        id={slug}
      />
    </div>
  );
};

export default Page;
