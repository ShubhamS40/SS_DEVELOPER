import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function HomepageColumn1({
  image = "images/img_unsplash_gr0wnd7pbjk.png",
  politicalbutton = "Political",
  ukrainetext = "Ukraine, 24 april 2022",
  zelenskytext = "Zelensky accuses Russia of worst crimes since WW2 ",
  descriptiontext = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  readmorebutton = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-[21px]`}>
      <div className="relative h-[247px] self-stretch md:h-auto">
        <Img src={image} alt="image" className="h-[247px] w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
          <Button
            size="md"
            shape="square"
            className="mr-[9px] mt-[9px] min-w-[78px] self-end font-bold tracking-[0.12px] md:mr-0"
          >
            {politicalbutton}
          </Button>
          <Text as="p" className="tracking-[-0.50px]">
            {ukrainetext}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div className="self-stretch">
          <Heading as="h6" className="leading-[21px] tracking-[-0.50px]">
            {zelenskytext}
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
          className="min-w-[153px] gap-[5px] tracking-[-0.50px] sm:px-5"
        >
          {readmorebutton}
        </Button>
      </div>
    </div>
  );
}
