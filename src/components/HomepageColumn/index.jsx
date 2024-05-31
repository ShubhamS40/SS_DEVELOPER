import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

export default function HomepageColumn({
  userimage = "images/img_unsplash_376kn_isple.png",
  datetext = "Ukraine, 24 april 2022",
  headlinetext = "Zelensky accuses Russia of worst crimes since WW2 ",
  descriptiontext = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  readMore = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-[21px]`}>
      <div className="relative h-[246px] self-stretch md:h-auto">
        <Img src={userimage} alt="image" className="h-[246px] w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[163px] bg-gradient p-[17px] md:gap-[122px] sm:gap-[81px]">
          <Input
            shape="square"
            name="tag_one"
            placeholder={`Entertaiment `}
            className="mr-1.5 mt-1.5 w-[29%] self-end font-bold tracking-[0.12px] md:mr-0"
          />
          <Text as="p" className="tracking-[-0.50px]">
            {datetext}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div className="self-stretch">
          <Heading as="h6" className="leading-[21px] tracking-[-0.50px]">
            {headlinetext}
          </Heading>
          <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
            {descriptiontext}
          </Text>
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
          className="ml-[11px] min-w-[153px] gap-[5px] tracking-[-0.50px] md:ml-0 sm:px-5"
        >
          {readMore}
        </Button>
      </div>
    </div>
  );
}
