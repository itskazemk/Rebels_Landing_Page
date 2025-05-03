import { Carousel } from "./Carousel";

export function Projects() {
  return (
    <div className="tabs tabs-lift px-10" id="projects">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="سامانه تیکتیوم"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="mt-4">
          <Carousel
            photos={[
              {
                src: "/images/concert/1-Home_page.jpeg",
                description: "صفحه اصلی",
              },
              {
                src: "/images/concert/2-Buy_ticket.jpeg",
                description: "گام اول خرید بلیط",
              },
              {
                src: "/images/concert/2.5-Buy_ticket.jpeg",
                description: "گام دوم خرید بلیط",
              },
              {
                src: "/images/concert/2.7-buy-ticket.jpeg",
                description: "گام سوم خرید بلیط",
              },
              {
                src: "/images/concert/2.8-buy-ticket.jpeg",
                description: "گام چهارم خرید بلیط",
              },
              {
                src: "/images/concert/7-my-tickets.jpeg",
                description: "حساب کاربری - رزروهای قبلی",
              },
              {
                src: "/images/concert/3-Panel.jpeg",
                description: "داشبورد پنل مدیریت",
              },
              {
                src: "/images/concert/4-Concert.jpeg",
                description: "پنل کنسرت‌ها",
              },
              {
                src: "/images/concert/5-Edit-Concert.jpeg",
                description: "ویرایش کنسرت‌ها",
              },
              {
                src: "/images/concert/6-places.jpeg",
                description: "پنل محل‌های برگزاری",
              }
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
       
      </div>
    </div>
  );
}
