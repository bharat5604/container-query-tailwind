import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" mx-auto shadow-lg p-8 relative resize-x flex flex-col overflow-hidden  max-w-[--max-width] min-w-[--min-width] ">
      <div className="grid gap-6">
        <div className="@container">
          <div className="grid @lg:grid @lg:grid-cols-2 gap-6">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="@3xl:flex h-full">
                <div className="@3xl:shrink-0">
                  <img
                    className="h-40 w-full object-cover @3xl:h-full @3xl:w-40"
                    src="https://eveout.s3.ap-south-1.amazonaws.com/uploads/fzig9q3n3asuzrnqq22t.jpg"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm tracking-wide text-sky-400 font-semibold uppercase">
                    container query
                  </div>
                  <a
                    href="#"
                    className="@ mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                  >
                    New first party tailwind css plugin
                  </a>
                  <p className="mt-2 text-slate-500">
                    Container query are comming. Browser support is getting real
                    start experimenting
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="@3xl:flex h-full">
                <div className="@3xl:shrink-0">
                  <img
                    className="h-40 w-full object-cover @3xl:h-full @3xl:w-40"
                    src="https://eveout.s3.ap-south-1.amazonaws.com/uploads/fzig9q3n3asuzrnqq22t.jpg"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm tracking-wide text-sky-400 font-semibold uppercase">
                    container query
                  </div>
                  <a
                    href="#"
                    className="@ mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                  >
                    New first party tailwind css plugin
                  </a>
                  <p className="mt-2 text-slate-500">
                    Container query are comming. Browser support is getting real
                    start experimenting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="@xl:flex h-full">
              <div className="@xl:shrink-0">
                <img
                  className="h-40 w-full object-cover @xl:h-full @xl:w-40"
                  src="https://eveout.s3.ap-south-1.amazonaws.com/uploads/fzig9q3n3asuzrnqq22t.jpg"
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="text-sm tracking-wide text-sky-400 font-semibold uppercase">
                  container query
                </div>
                <a
                  href="#"
                  className="@ mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                >
                  New first party tailwind css plugin
                </a>
                <p className="mt-2 text-slate-500">
                  Container query are comming. Browser support is getting real
                  start experimenting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
