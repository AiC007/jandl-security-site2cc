import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { generateBlogPostingSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema';
import { blogPosts, getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `${COMPANY_INFO.website}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [COMPANY_INFO.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.description,
    },
    alternates: {
      canonical: `${COMPANY_INFO.website}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const blogPostingSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    wordCount: post.wordCount,
    keywords: post.keywords,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Blog', url: `${COMPANY_INFO.website}/blog` },
    { name: post.title, url: `${COMPANY_INFO.website}/blog/${post.slug}` },
  ]);

  const schemaPayload: object[] = [blogPostingSchema, breadcrumbSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemaPayload.push(generateFAQPageSchema(post.faqs));
  }

  // Find other posts for the "More articles" section
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaPayload),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title },
        ]}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-primary-200 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="mx-2">|</span>
            <span>{Math.ceil(post.wordCount / 250)} min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-primary-600 prose-a:font-medium hover:prose-a:text-primary-700 prose-strong:text-gray-900 prose-table:border-collapse prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-gray-300 prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* More Articles */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((otherPost) => (
                <Link
                  key={otherPost.slug}
                  href={`/blog/${otherPost.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    {otherPost.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {Math.ceil(otherPost.wordCount / 250)} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Book a free, no-obligation security survey with one of our experienced engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Call {COMPANY_INFO.phone}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="text-primary-200 hover:text-white text-sm text-center transition-colors"
              >
                or call {COMPANY_INFO.phone2}
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
