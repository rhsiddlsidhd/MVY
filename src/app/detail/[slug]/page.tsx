const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <div>DetailPage</div>;
};

export default Page;
