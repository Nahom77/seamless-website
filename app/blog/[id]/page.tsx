const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const blogId = (await params).id;

  return (
    <div>
      page
      <h1 className="text-primary text-lg">{blogId}</h1>
    </div>
  );
};

export default BlogDetail;
