import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function HomepageRownewyorkninet({
  userimage = "images/img_unsplash_j5keq1jlqzk.png",
  datetext = "New York, 19 april 2022",
  titletext = "Jhon Lorni has won 1st place in international match",
  descriptiontext = "this is his first victory in the international olympics, so his name is quite explosive on the international scene",
  readmorebutton = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col items-center gap-[22px] flex-1`}>
      <Img src={userimage} alt="image" className="h-[229px] w-[45%] object-cover md:w-full" />
      <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <Text size="md" as="p" className="tracking-[-0.50px] !text-black-900">
            {datetext}
          </Text>
          <div className="flex flex-col gap-2.5 self-stretch">
            <Heading size="xl" as="h5" className="!font-poppins leading-[30px] tracking-[-0.50px]">
              {titletext}
            </Heading>
            <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
              {descriptiontext}
            </Text>
          </div>
        </div>
        <Button
          shape="round"
          rightIcon={
            <Img
              src="images/img_akariconsarrowupright.svg"
              alt="akar-icons:arrow-up-right"
              className="h-[20px] w-[20px]"
            />
          }
          className="min-w-[153px] gap-[5px] tracking-[-0.50px] sm:px-5"
        >
          {readmorebutton}
        </Button>
      </div>
    </div>
  );
}
