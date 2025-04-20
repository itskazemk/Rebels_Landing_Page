import { Carousel } from "./Carousel";

export function Samples() {
  return (
    <div className="tabs tabs-lift px-10">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="سامانه تیکتیوم"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <button className="btn btn-primary">درخواست دمو</button>

        <div className="mt-4">
          <Carousel
            photos={[
              "/images/concert/1-Home_page.jpeg",
              "/images/concert/2-Buy_ticket.jpeg",
              "/images/concert/3-Panel.jpeg",
              "/images/concert/4-Concert.jpeg",
              "/images/concert/5-Edit-Concert.jpeg",
              "/images/concert/6-places.jpeg",
            ]}
          />
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="سامانه رزرواسیون"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        تصاویر دیگر سامانه
      </div>
    </div>
  );
}
