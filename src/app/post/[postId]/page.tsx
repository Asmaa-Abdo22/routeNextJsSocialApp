import { use } from "react";

export default function page(
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = use(params);

  return (
    <div>
      page | {postId}
    </div>
  );
}
