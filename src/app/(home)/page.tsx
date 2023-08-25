import Image from 'next/image'

export default function page() {
  return (
    <div className="h-screen lg:grid lg:grid-cols-8 lg:grid-rows-4 flex flex-col p-6 justify-center">
      <div className="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3 w-full c">
        <div>
          <h1 className="text-9xl font-bold text-zinc-900">Gallery</h1>
        </div>
        <div className="mt-6">
          <span className="text-lg font-medium mt-6 text-zinc-500">
            A Gallery Search App that uses Unsplash and is made with React.
          </span>
        </div>
      </div>

      <div className="mt-6 lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4">
        <div className="p-2 lg:p-0 flex flex-col lg:flex-row gap-4">
          <button
            type="button"
            className="flex-1 disabled:cursor-not-allowed disabled:bg-zinc-400 focus-within:ring-4 focus-within:ring-zinc-400 bg-zinc-800 hover:bg-zinc-900 px-6 py-4 rounded-md font-bold text-zinc-100"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="flex-1 border-zinc-500 focus-within:ring-4 focus-within:ring-zinc-400 border hover:bg-zinc-600 px-6 py-4 rounded-md font-bold text-zinc-900 hover:text-zinc-100"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Image grid top */}
      <div className="hidden lg:block col-start-5 col-end-6 row-start-1 row-end-4 p-2">
        <div className="bg-white h-full relative rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Whangarei Falls, Whangarei, New Zealand"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="hidden lg:block col-start-6 col-end-7 row-start-1 row-end-3 p-2">
        <div className="bg-white h-full relative rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            alt="Whangarei Falls, Whangarei, New Zealand"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="hidden lg:block col-start-7 col-end-8 row-start-1 row-end-2 p-2">
        <div className="bg-white h-full relative rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1527527773165-340e532ca3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
            alt="Whangarei, New Zealand"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Image grid bottom */}

      <div className="hidden lg:block col-start-5 col-end-6 row-start-4 p-2">
        <div className="bg-white relative h-full rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80"
            alt="Hisma Desert – NEOM, Saudi Arabia"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="hidden lg:block col-start-6 col-end-7 row-start-3 row-end-5 p-2">
        <div className="bg-white h-full relative rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
            alt="Maldives"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="hidden lg:block col-start-7 col-end-8 row-start-2 row-end-5 p-2">
        <div className="bg-white relative h-full rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Ciucaș Peak, Romania"
            fill={true}
            objectFit="cover"
            loading="lazy"
            quality={80}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}
