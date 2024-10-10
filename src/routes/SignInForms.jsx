import { useContext } from "react";
import SignInContext from "@/context/SignInContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SignInForms() {
  const SignInList = useContext(SignInContext);

  return (
    <div className="signin-container">
      <Carousel className="w-full max-w-xs ">
        <CarouselContent>
          {SignInList.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent
                    className={`flex aspect-square items-center justify-center p-6 border-2 rounded`}
                    style={{
                      backgroundColor: item.style.bgColor,
                      color: item.style.color,
                    }}
                  >
                    <span className="text-4xl font-semibold">
                      {item[index]}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
