import { useMemo, useState } from 'react';

const HomePage = () => {
  // States
  const [data, setData] = useState<{ id: number; title: string }[]>([
    { id: 1, title: 'javascript' },
    { id: 2, title: 'react' },
    { id: 3, title: 'typescript' },
  ]);
  const [count, setCount] = useState(0);
  // UseMemo
  const createDataItems = useMemo(() => {
    return data.map((dt) => {
      return (
        <p className="p-2 rounded-lg bg-gray-300 text-xl" key={dt.id}>
          {dt.id} . {dt.title}
        </p>
      );
    });
  }, [data]);
  return (
    <div className="flex flex-col space-y-10 mx-auto container m-6">
      <section className="flex flex-wrap items-center  space-x-5">
        <button
          className="px-4 py-2 rounded-lg bg-orange-500 text-xl w-fit"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          increment
        </button>
        <p>{count}</p>
      </section>
      <section className="flex flex-col space-y-5">{createDataItems}</section>
    </div>
  );
};

export default HomePage;
