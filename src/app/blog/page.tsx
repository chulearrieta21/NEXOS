import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historias cruzadas | NEXOS",
  description:
    "Historias cruzadas reúne relatos de usuarios, comunidades y experiencias cotidianas conectadas con la actualidad.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Historias cruzadas"
        description="Esta página reúne historias de usuarios y comunidades para mostrar cómo los hechos cotidianos se conectan con temas como movilidad, solidaridad, economía, cultura y vida de barrio."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <span className="bg-primary text-white flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm font-bold cursor-default">
                    1
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
