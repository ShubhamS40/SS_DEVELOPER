import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

export default function SigleBlogCardnews({
  image = "images/img_unsplash_376kn_isple_246x418.png",
  tag,
  date = "Ukraine, 24 april 2022",
  title = "Zelensky accuses Russia of worst crimes since WW2 ",
  description = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  button = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full pb-[34px] gap-[21px] sm:pb-5`}>
      <div className="relative h-[246px] self-stretch md:h-auto">
        <Img src={image} alt="unsplash376kn" className="h-[246px] w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[163px] bg-gradient p-[17px] md:gap-[122px] sm:gap-[81px]">
          {!!tag ? (
            <Input
              shape="square"
              name="tag_one"
              placeholder={`Entertaiment `}
              className="mr-1.5 mt-1.5 w-[29%] self-end font-bold tracking-[0.12px] md:mr-0"
            />
          ) : null}
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
        className="ml-3 min-w-[151px] gap-[5px] tracking-[-0.50px] md:ml-0 sm:px-5"
      >
        {button}
      </Button>
    </div>
  );
}
