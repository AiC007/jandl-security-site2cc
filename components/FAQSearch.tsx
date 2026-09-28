'use client';

import { useId, useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';

export interface FAQCategory {
  title: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface FAQSearchProps {
  categories: FAQCategory[];
}

/**
 * Filters the FAQ list as the visitor types. The full list is rendered on the
 * server (this component is server-rendered on first load and only filters
 * afterwards), so every question and answer is in the HTML for crawlers; the
 * FAQPage JSON-LD is emitted separately by the page.
 */
export default function FAQSearch({ categories }: FAQSearchProps) {
  const [query, setQuery] = useState('');
  const inputId = useId();
  const term = query.trim().toLowerCase();

  const visible = categories
    .map((category) => ({
      ...category,
      faqs: term
        ? category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(term) ||
              faq.answer.toLowerCase().includes(term)
          )
        : category.faqs,
    }))
    .filter((category) => category.faqs.length > 0);

  const total = categories.reduce((sum, category) => sum + category.faqs.length, 0);
  const shown = visible.reduce((sum, category) => sum + category.faqs.length, 0);

  return (
    <>
      <div className="mb-12">
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          Search the questions
        </label>
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5"
            aria-hidden="true"
          />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a word, for example servicing or CCTV"
            autoComplete="off"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" role="status" aria-live="polite">
          {term ? `Showing ${shown} of ${total} questions` : `${total} questions in ${categories.length} categories`}
        </p>
      </div>

      {visible.length === 0 && (
        <div className="border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No matching questions</h2>
          <p className="text-gray-700 mb-4">
            Try a different word, or ask us directly. Call{' '}
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600 font-semibold hover:underline">
              {COMPANY_INFO.phone}
            </a>{' '}
            or{' '}
            <a href={`tel:${COMPANY_INFO.phone2}`} className="text-primary-600 font-semibold hover:underline">
              {COMPANY_INFO.phone2}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-primary-600 font-medium hover:underline"
          >
            Clear the search
          </button>
        </div>
      )}

      {visible.map((category) => (
        <div key={category.title} className="mb-16 last:mb-0">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-primary-600 mr-4" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
          </div>

          <div className="space-y-6">
            {category.faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="text-primary-600 group-open:rotate-45 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
