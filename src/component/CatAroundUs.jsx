import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function CatAroundUs() {
  const [page, setPage] = useState(1);
  const [cats, setCats] = useState([]);

  let url = `https://api.freeapi.app/api/v1/public/cats?page=${page}`;
  const getCat = async () => {
    const res = await axios.get(url);
    setCats(res?.data.data.data);
  };

  useEffect(() => {
    getCat();
    console.log(page);
  }, [page]);

  return (
    <>
      <div className="p-4 flex gap-5 overflow-x-scroll">
        {cats?.map((cat) => (
          <div
            key={cat.id}
            className="border h-[550px] shadow-md min-w-[300px] bg-white rounded-xl overflow-hidden"
          >
            <img className="h-[250px] w-full object-cover" src={cat.image} />
            <div className="p-3 flex flex-col gap-2">
              <p className="text-xl font-bold">{cat.name}</p>
              <p className="text-sm leading-4 max-h-[100px] line-clamp-4">
                {cat.description}
              </p>
              <div className="flex gap-20">
                <i className="font-semibold">Origin</i>
                <p>{cat.origin}</p>
              </div>
              <div>
                <i className="font-semibold">Temperament</i>
                <div className="flex gap-2 mt-2">
                  {cat.temperament.split(",").map((ele, i) => {
                    if (i < 3) {
                      return (
                        <p
                          key={i}
                          className="bg-zinc-200 text-sm px-2 rounded-full"
                        >
                          {ele}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex gap-20">
                <i className="font-semibold">LifeSpan</i>
                <p>{cat.life_span} years</p>
              </div>
              <a
                className="text-blue-600"
                target="_blank"
                href={cat.wikipedia_url}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around w-[500px] m-auto">
        {[1, 2, 3, 4, 5, 6, 7].map((data) => (
          <input type="button"
            key={data}
            className="bg-blue-500 text-white px-2 rounded-sm"
            onClick={(e) => setPage(e.target.value)}
            value = {data}
          />
        ))}
      </div>
    </>
  );
}

export default CatAroundUs;
