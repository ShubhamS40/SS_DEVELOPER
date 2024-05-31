import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomepageRowhowtomaximiz1({
  image = "images/img_rectangle_1479_84x121.png",
  title = "How to maximize investment with mutual funds",
  date = "Indonesia,  22 Agust 2022 ",
  duration = "- 15 minutes ago",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center gap-6 flex-1`}>
      <Img src={image} alt="image" className="h-[84px] w-[29%] object-cover sm:w-full" />
      <div className="flex flex-1 flex-col items-start gap-[26px] sm:self-stretch">
        <Heading as="h6" className="!font-bold leading-[21px] tracking-[-0.50px] !text-white-A700">
          {title}
        </Heading>
        <div className="flex flex-wrap gap-[7px]">
          <Heading size="s" as="p" className="tracking-[-0.50px] !text-white-A700">
            {date}
          </Heading>
          <Text as="p" className="tracking-[-0.50px] !text-white-A700_7f">
            {duration}
          </Text>
        </div>
      </div>
    </div>
  );
}
