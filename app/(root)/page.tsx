import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const result = await fetchPosts(1, 30);
  // const user = await currentUser()

  let user: { id: string } | null = null;

  try {
    user = await currentUser();
  } catch (error) {
    console.error('Failed to fetch current user:', error);
  }

  if (!user) {
    console.log('no user');
  }


  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  )
}