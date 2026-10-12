
import Link from "next/link";
import TempleNewsGallery from "@/Components/TempleNewsGallery";
import TempleNewsShare from "@/Components/TempleNewsShare";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";



const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function getImageUrl(image) {
  if (!image?.url) return null;

  const url = image.url;

  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {
    const children = (block.children || []).map((child, childIndex) => {
      let content = child.text || "";

      if (child.bold) content = <strong key={childIndex}>{content}</strong>;
      if (child.italic) content = <em key={childIndex}>{content}</em>;
      if (child.underline) content = <u key={childIndex}>{content}</u>;

      return typeof content === "string"
        ? <span key={childIndex}>{content}</span>
        : content;
    });

    switch (block.type) {
      case "heading":
        const HeadingTag = `h${block.level || 2}`;
        return (
          <HeadingTag
            key={index}
            className="mb-4 mt-8 text-2xl font-bold text-gray-900"
          >
            {children}
          </HeadingTag>
        );

      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag
            key={index}
            className="mb-5 list-inside list-disc space-y-2 text-gray-700"
          >
            {(block.children || []).map((item, itemIndex) => (
              <li key={itemIndex}>
                {(item.children || []).map((child, childIndex) => (
                  <span key={childIndex}>{child.text || ""}</span>
                ))}
              </li>
            ))}
          </ListTag>
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="my-6 border-l-4 border-orange-500 pl-5 italic text-gray-600"
          >
            {children}
          </blockquote>
        );

      case "paragraph":
      default:
        return (
          <p
  key={index}
  className="mb-5 leading-8"
  style={{ color: "#D6D0B0" }}
>
  {children}
</p>
        );
    }
  });
}


function toAbsolute(url) {
  if (!url) return undefined;

  const absoluteUrl = url.startsWith("http")
    ? url
    : `${STRAPI_URL.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;

  return absoluteUrl.replace(
    /^http:\/\/localhost:1337/,
    "https://cms.divyagyanam.com"
  );
}

function getSocialImage(image) {
  const media = Array.isArray(image) ? image[0] : image;
  if (!media) return undefined;

  const MAX_KB = 250;

  const candidates = [media, ...Object.values(media.formats || {})]
    .filter(
      (item) =>
        item?.url &&
        typeof item.size === "number" &&
        item.size > 0 &&
        item.size <= MAX_KB
    )
    .sort((a, b) => (b.width || 0) - (a.width || 0));

  const pick = candidates[0];

  if (!pick) return undefined;

  return {
    url: toAbsolute(pick.url),
    width: pick.width,
    height: pick.height,
  };
}


const SITE_URL = "https://divyagyanam.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await fetchAPI(
      `/temple-news-articles?filters[Slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=*`
    );

    const article = response.data?.[0];

    if (!article) {
      return {
        title: "Temple News Not Found | DivyaGyanam",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const title = article.Title || "Temple News";
    const description =
      article.ShortDescription ||
      `Read the latest temple news and spiritual updates on DivyaGyanam.`;

   const socialImage = getSocialImage(article.FeatureImage);
    const pageUrl = `${SITE_URL}/temple-news/${encodeURIComponent(slug)}`;

    return {
      title: `${title} | DivyaGyanam`,
      description,
      alternates: {
        canonical: pageUrl,
      },
      
openGraph: {
  type: "article",
  url: pageUrl,
  siteName: "DivyaGyanam",
  title,
  description,
  publishedTime: article.PublishedDate
    ? new Date(article.PublishedDate).toISOString()
    : undefined,
  images: socialImage
    ? [
        {
          url: socialImage.url,
          width: socialImage.width,
          height: socialImage.height,
          alt: title,
        },
      ]
    : [],
},
twitter: {
  card: socialImage ? "summary_large_image" : "summary",
  title,
  description,
  images: socialImage ? [socialImage.url] : [],
},

    };
  } catch (error) {
    console.error("Failed to generate Temple News metadata:", error);

    return {
      title: "Temple News | DivyaGyanam",
      description:
        "Read the latest temple news, festivals, and spiritual updates on DivyaGyanam.",
    };
  }
}


export default async function TempleNewsDetailPage({ params }) {
  const { slug } = await params;

  let article;

  try {
    const response = await fetchAPI(
      `/temple-news-articles?filters[Slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=*`
    );

    article = response.data?.[0];
  } catch (error) {
    console.error("Failed to load temple news article:", error);
    throw error;
  }

  if (!article) {
    notFound();
  }

  const featureImage = getImageUrl(article.FeatureImage);
  const gallery = Array.isArray(article.Gallery)
    ? article.Gallery
    : article.Gallery
      ? [article.Gallery]
      : [];
 
  return (
    <main className="min-h-screen bg-primary-brown py-10">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/temple-news"
          className="mb-8 text-white inline-flex items-center gap-2 font-medium text-orange-600 hover:text-orange-700"
        >
          <span aria-hidden="true">←</span>
          Back to Temple News
        </Link>

        <header className="mb-8">
          {article.PublishedDate && (
            <p className="mb-4 text-sm text-white">
              {formatDate(article.PublishedDate)}
            </p>
          )}

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {article.Title}
          </h1>

          {article.ShortDescription && (
            <p className="mt-5 text-lg leading-8 text-[#B3AB7C]">
              {article.ShortDescription}
            </p>
          )}
          <TempleNewsShare title={article.Title} />
        </header>

        {featureImage && (
          <div className="mb-10 overflow-hidden rounded-xl">
            <img
              src={featureImage}
              alt={article.Title || "Temple news"}
              className="max-h-[520px] w-full object-cover"
            />
          </div>
        )}

        <div className="temple-news-content text-[#D6D0B0]">
          {renderBlocks(article.LongDescription)}
        </div>

        {gallery.length > 0 && (
           <TempleNewsGallery
  images={gallery}
  title={article.Title}
/>
        )}

        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link
            href="/temple-news"
            className="font-semibold text-orange-600 hover:text-orange-700"
          >
            ← View All Temple News
          </Link>
        </div>
      </article>
    </main>
  );
}
