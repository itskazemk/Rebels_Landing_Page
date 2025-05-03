interface photo{
  src:string,
  description:string
}

interface photos {
  photos: photo[];
}


export function Carousel({ photos = [] }: photos) {
  return (
    <div className="px-8 ">
      <div className="carousel w-full rounded-2xl">
        {photos.map((item, index) => (
        <>
        <div
            id={`item_${index + 1}`}
            key={`item_${index + 1}`}
            className={"carousel-item w-full md:h-[40em] bg-no-repeat md:bg-cover bg-contain flex relative"}
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          >
            {/* <div className={`bg-[url(${item})]`}></div> */}

            <span className="absolute  px-2 py-1  h-fit bottom-0 w-[50%] rounded-tl-3xl bg-gray-500/30 text-black">{item.description}</span>

          </div>

</>
))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2 flex-col">
        <div className="flex w-full justify-center">
          <button className="btn btn-primary" disabled>درخواست دمو</button>
        </div>
        <div className=" w-full justify-center hidden md:flex">
          {photos.map((item, index) => (
            <a
              href={`#item_${index + 1}`}
              key={`#item_${index + 1}`}
              className="btn btn-xs"
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
