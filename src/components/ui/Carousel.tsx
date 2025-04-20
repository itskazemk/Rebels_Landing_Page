interface photos {
  photos: string[];
}

export function Carousel({ photos = [] }: photos) {
  return (
    <div className="px-8 ">
      <div className="carousel w-full rounded-2xl">
        {photos.map((item, index) => (
          <div
            id={`item_${index + 1}`}
            key={`item_${index + 1}`}
            className="carousel-item w-full  h-256"
          >
            <img src={item} className="w-full  h-256" />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
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
  );
}
