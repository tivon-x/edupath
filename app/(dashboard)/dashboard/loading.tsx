export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-4 p-4 text-center text-gray-500 dark:text-gray-400'>
      <svg
        className='w-12 h-12 animate-spin text-gray-200 dark:text-gray-600'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path d='M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0 -20z' />
      </svg>
      <p>Loading...</p>
    </div>
  )
}
