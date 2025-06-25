const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log("slug", slug);
  return <div>DetailPage</div>;
};

export default Page;
