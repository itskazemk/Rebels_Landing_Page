export function Carousel() {
  return (
    <div className="px-8 ">
      <div className="carousel w-full rounded-2xl">
        <div id="item1" className="carousel-item w-full  h-256">
          <img
            src="/images/concert/1-Home_page.jpeg"
            className="w-full  h-256"
          />
        </div>
        <div id="item2" className="carousel-item w-full  h-256">
          <img
            src="/images/concert/2-Buy_ticket.jpeg"
            className="w-full  h-256"
          />
        </div>
        <div id="item3" className="carousel-item w-full  h-256">
          <img src="/images/concert/3-Panel.jpeg" className="w-full  h-256" />
        </div>
        <div id="item4" className="carousel-item w-full  h-256">
          <img src="/images/concert/4-Concert.jpeg" className="w-full  h-256" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
