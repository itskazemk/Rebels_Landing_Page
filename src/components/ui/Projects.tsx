import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel } from "./Carousel"

export function Projects() {
  return (
    <Tabs defaultValue="ticketium" className="w-full px-10" id="projects">
      <TabsList className="w-full justify-start gap-4 mb-4">
        <TabsTrigger value="ticketium">سامانه تیکتیوم</TabsTrigger>
        <TabsTrigger value="reservation">سامانه رزرواسیون</TabsTrigger>
      </TabsList>

      <TabsContent value="ticketium">
        <Carousel
          itemKey="ticketium"
          demoUrl=""
          demoIsEanbled={false}
          photos={[
            { src: "/images/concert/1-Home_page.jpeg", description: "صفحه اصلی" },
            { src: "/images/concert/2-Buy_ticket.jpeg", description: "گام اول خرید بلیط" },
            { src: "/images/concert/2.5-Buy_ticket.jpeg", description: "گام دوم خرید بلیط" },
            { src: "/images/concert/2.7-buy-ticket.jpeg", description: "گام سوم خرید بلیط" },
            { src: "/images/concert/2.8-buy-ticket.jpeg", description: "گام چهارم خرید بلیط" },
            { src: "/images/concert/7-my-tickets.jpeg", description: "حساب کاربری - رزروهای قبلی" },
            { src: "/images/concert/3-Panel.jpeg", description: "داشبورد پنل مدیریت" },
            { src: "/images/concert/4-Concert.jpeg", description: "پنل کنسرت‌ها" },
            { src: "/images/concert/5-Edit-Concert.jpeg", description: "ویرایش کنسرت‌ها" },
            { src: "/images/concert/6-places.jpeg", description: "پنل محل‌های برگزاری" },
          ]}
        />
      </TabsContent>

      <TabsContent value="reservation">
        <Carousel
          itemKey="reservation"
          demoIsEanbled={true}
          demoUrl="http://reservation.bytestack.ir"
          photos={[
            { src: "/images/reservation/1-login.jpeg", description: "صفحه ورود" },
            { src: "/images/reservation/2-Home.jpeg", description: "صفحه اصلی" },
            { src: "/images/reservation/3-buy.jpeg", description: "فرآیند خرید" },
            { src: "/images/reservation/4-account.jpeg", description: "حساب کاربری" },
            { src: "/images/reservation/5-relatives.jpeg", description: "اطلاعات همراهان" },
            { src: "/images/reservation/6-reserved.jpeg", description: "رزروهای انجام‌شده" },
            { src: "/images/reservation/7-admin.jpeg", description: "پنل ادمین" },
            { src: "/images/reservation/8-entities.jpeg", description: "مدیریت موجودیت‌ها" },
            { src: "/images/reservation/9-credit.jpeg", description: "مدیریت دوره اعتباری" },
            { src: "/images/reservation/10-users.jpeg", description: "کاربران" },
            { src: "/images/reservation/11-usermanagement.jpeg", description: "مدیریت کاربران" },
          ]}
        />
      </TabsContent>
    </Tabs>
  )
}
