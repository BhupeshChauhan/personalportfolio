import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import InpageNavigation from "../InpageNavigation";
import BlogCard from "../BlogCard";
import BlogMiniCard from "../BlogMiniCard";
import CustomPagination from "../CustomPagination";
export default async function BlogSection({ searchParams }: any) {
  let latestPosts: any = [
    {
      activity: {
        total_likes: 0,
        total_comments: 0,
        total_reads: 57,
        total_parent_comments: 0
      },
      _id: '65d6f2b04e360db0bc211531',
      id: '1',
      title: 'The Clean Architecture — Beginner’s Guide',
      banner: 'http://res.cloudinary.com/dpjbpu3v5/image/upload/v1708583232/jig7s5fz7crnhbkihekg.jpg',
      des: 'The Clean Architecture is the system architecture guideline proposed by Robert C. Martin (Uncle Bob) derived from many architectural guidelines like Hexagonal Architecture, Onion Architecture, etc... over the years. This is one of the guidelines adhered to by software engineers to build scalable, testable, and maintainable software.',
      categories: [ 'HTML' ],
      author: { personal_info: [Object], _id: '65d6def296c2dd59c3075464' },
      publishedAt: '2024-02-22T07:07:28.071Z'
    }
  ];
  let trandingPosts: any = [
    {
      _id: '65d6f2b04e360db0bc211531',
      id: '1',
      title: 'The Clean Architecture — Beginner’s Guide',
      author: { personal_info: [Object], _id: '65d6def296c2dd59c3075464' },
      publishedAt: '2024-02-22T07:07:28.071Z'
    }
  ];
  let categories: any = [
    {
      _id: '65d6e15f0e736258470aae8e',
      id: '1',
      name: 'HTML',
      featuredImage: 'http://res.cloudinary.com/dpjbpu3v5/image/upload/v1708579290/docnta866fnosdfugfoc.jpg',
      slug: 'HTML',
      description: 'HTML related documentations.',
      inActive: false,
      type: [ 'blog' ],
      createdDate: '2024-02-22T05:53:35.842Z',
      createdAt: '2024-02-22T05:53:35.847Z',
      updatedAt: '2024-02-22T05:53:35.847Z',
      __v: 0
    }
  ];

  return (
    <div style={{ width: "100%" }} className="bg-white">
        <section className="h-cover flex justify-center gap-10 container m-auto mt-10">
          {/* latest blogs */}
          <div className="w-full">
            <InpageNavigation
              tabs={["Home", "Trending Blogs"]}
              defaultHidden={["Trending Blogs"]}
            >
              <>
                {latestPosts.map((post: any, i: any) => {
                  return (
                    <>
                        <BlogCard post={post} />
                    </>
                  );
                })}
                  <CustomPagination page={1} total={1} />
              </>
              {trandingPosts.map((post: any, i: any) => {
                return (
                    <BlogMiniCard key={i} post={post} index={i} />
                );
              })}
            </InpageNavigation>
          </div>

          {/* filters and trending blogs */}
          <div className="m-w-[40%] lg:min-w-[400px] max-w-min border-1 border-grey pl-8 pt-3 max-md:hidden">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-medium text-xl mb-8">
                  Stories form all interests
                </h1>
                <div className="flex gap-3 flex-wrap">
                  {categories.map((data: any, i: any) => {
                    return (
                        <Link
                          href={"/"}
                          key={i}
                        >
                          <button
                            className={"bg-black text-white"}
                          >
                            {data.name}
                          </button>
                        </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-medium text-xl mb-8">
                  Tranding <FaArrowTrendUp />
                </h1>
                {trandingPosts.map((post: any, i: any) => {
                  return (
                      <BlogMiniCard key={i} post={post} index={i} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
