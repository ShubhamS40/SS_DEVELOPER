import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function SigleBlogCardnews1({
  financestatus = "Finance",
  date = "Ukraine, 24 april 2022",
  title = "Zelensky accuses Russia of worst crimes since WW2 ",
  description = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  readmorebutton = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full pb-[34px] gap-[21px] sm:pb-5`}>
      <div className="relative h-[247px] self-stretch md:h-auto">
        <Img
          src="images/img_unsplash_flrm0z3meoa_247x418.png"
          alt="unsplash"
          className="h-[247px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
          <Button
            size="md"
            shape="square"
            className="mr-[9px] mt-[9px] min-w-[78px] self-end font-bold tracking-[0.12px] md:mr-0"
          >
            {financestatus}
          </Button>
          <Text as="p" className="tracking-[-0.50px]">
            {date}
          </Text>
        </div>
      </div>
      <div className="self-stretch">
        <Heading as="h6" className="leading-[21px] tracking-[-0.50px]">
          {title}
        </Heading>
        <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
          {description}
        </Text>
      </div>
      <Button
        shape="round"
        rightIcon={
          <Img
            src="images/img_akariconsarrowupright.svg"
            alt="akar-icons:arrow-up-right"
            className="h-[18px] w-[18px]"
          />
        }
        className="min-w-[151px] gap-[5px] tracking-[-0.50px] sm:px-5"
      >
        {readmorebutton}
      </Button>
    </div>
  );
}
