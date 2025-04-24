import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="mt-24 mb-24 flex flex-row items-center justify-center space-x-6">
      <div className="max-w-md">
        <h1 className="mb-6 text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 hover:bg-blue-700 focus:outline-hidden dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
