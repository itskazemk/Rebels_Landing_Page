import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "images/abas2.jpg",
    name: "عباس یاور",
    position: "FullStack Developer",
    description: "دانشجوی کارشناسی ارشد هوش مصنوعی دانشگاه یزد",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/abbas-yavar-aa3725248",
      },
      {
        name: "Github",
        url: "https://github.com/Mr-Yavar",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sir_yavar",
      },
    ],
  },
  {
    imageUrl: "images/kazem.png",
    name: "کاظم کمالی",
    position: "FrontEnd Developer",
    description: "مهندس برق و آچار فرانسه تیم",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/kazem-kamali/",
      },
      {
        name: "Github",
        url: "https://github.com/itskazemk",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/thisis_kazem",
      },
    ],
  },
  {
    imageUrl: "images/amin.jpg",
    name: "امین حلوایی",
    position: "Backend Developer",
    description: "دانشجوی کارشناسی ارشد نرم‌افزار در دانشگاه شریف",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/amin-halvaei/",
      },
      {
        name: "Github",
        url: "https://github.com/aminhalvaei",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/aminhalvaei",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Github":
        return <Github size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          تیم ما
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground"></p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            socialNetworks,
            description,
          }: TeamProps) => (
            <Card
              key={name}
              className="bg-base-100 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <a
                    key={name}
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className="p-3 hover:bg-base-300 rounded-2xl"
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
