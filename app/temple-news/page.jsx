
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
export const metadata = {
  title: "Temple Latest News | DivyaGyanam",
};
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function getImageUrl(image) {
  if (!image) return null;

  const path =
    image.formats?.medium?.url ||
    image.formats?.small?.url ||
    image.url;

  if (!path) return null;

  return path.startsWith("http") ? path : `${STRAPI_URL}${path}`;
}

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function TempleNewsPage() {
  let articles = [];

  try {
    const response = await fetchAPI(
      "/temple-news-articles?populate=*&sort=PublishedDate:desc"
    );

    articles = response.data || [];
  } catch (error) {
    console.error("Failed to load temple news:", error);
  }

  return (
    <main className="min-h-screen text-[#111111]  bg-primary-brown">
      {/* Page heading */}
      <section className="bg-[#111111] px-4 py-12 text-center text-white sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          DivyaGyanam Updates
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Temple News
        </h1>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#D4AF37]" />

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-300 sm:text-base">
          Stay connected with the latest temple news, spiritual events,
          festivals, and important updates.
        </p>
      </section>

      {/* News listing */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {articles.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="text-xl font-semibold">
              No temple news available
            </h2>
            <p className="mt-3 text-gray-600">
              Please check back later for the latest updates.
            </p>
          </div>
        ) : (
          <>
            

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const imageUrl = getImageUrl(article.FeatureImage);
                const articleUrl = `/temple-news/${article.Slug}`;

                return (
                  <article
                    key={article.documentId || article.id}
                    className="p-2 bg-[#1A160E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group flex h-full flex-col overflow-hidden rounded-xl  transition-all duration-300  hover:border-[#D4AF37] hover:shadow-lg"
                  style={{border:'1px solid rgb(129, 102, 48)'}}>
                    <Link
                      href={articleUrl}
                      className="relative block aspect-[16/9] overflow-hidden bg-gray-100"
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={article.Title || "Temple news"}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-400">
                          Temple News
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      {article.PublishedDate && (
                        <p className="mb-3 text-sm text-white">
                          {formatDate(article.PublishedDate)}
                        </p>
                      )}

                      <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#9B7920]">
                        <Link href={articleUrl}>
                          {article.Title}
                        </Link>
                      </h3>

                      <p className="mb-6 line-clamp-3 flex-1 text-sm leading-7 text-[#B3AB7C] sm:text-base">
                        {article.ShortDescription}
                      </p>

                      <Link
                        href={articleUrl}
                        className="inline-flex w-fit items-center gap-2  pb-1 text-sm font-semibold text-[#B3AB7C] transition-colors hover:text-[#9B7920]"
                      >
                        Read More
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
