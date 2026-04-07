import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.name} className="flex items-center">
              {index > 0 && (
                <span className="text-gray-400 mx-1" aria-hidden="true">/</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
