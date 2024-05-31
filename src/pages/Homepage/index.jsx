import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageCard from "../../components/HomepageCard";
import HomepageColumn from "../../components/HomepageColumn";
import HomepageColumn1 from "../../components/HomepageColumn1";
import HomepageRowhowtomaximiz from "../../components/HomepageRowhowtomaximiz";
import HomepageRowhowtomaximiz1 from "../../components/HomepageRowhowtomaximiz1";
import HomepageRownewyorkninet from "../../components/HomepageRownewyorkninet";

const data = [
  {
    userimage: "images/img_rectangle_1479.png",
    titletext: "How to maximize investment with mutual funds",
    datetext: "Indonesia,  22 Agust 2022 ",
    timetext: "- 15 minutes ago",
  },
  {
    userimage: "images/img_rectangle_1479_84x84.png",
    titletext: "john kennedy won 3rd oscar trophy at los angles",
    datetext: "Los Angles,  22 Agust 2022 ",
    timetext: "- 22 minutes ago",
  },
  {
    userimage: "images/img_rectangle_1479_1.png",
    titletext: "Miami Dolphins won the match and officially qualified for the final",
    datetext: "New York,  22 Agust 2022 ",
    timetext: "- 10 minutes ago",
  },
];
const data1 = [
  {
    userimage: "images/img_unsplash_376kn_isple.png",
    datetext: "Ukraine, 24 april 2022",
    headlinetext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readMore: "Read More",
  },
  {
    userimage: "images/img_unsplash_flrm0z3meoa.png",
    datetext: "Ukraine, 24 april 2022",
    headlinetext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readMore: "Read More",
  },
  {
    userimage: "images/img_unsplash_ef7hn40wbaq.png",
    datetext: "Ukraine, 24 april 2022",
    headlinetext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readMore: "Read More",
  },
];
const data2 = [
  {
    image: "images/img_unsplash_gr0wnd7pbjk.png",
    politicalbutton: "Political",
    ukrainetext: "Ukraine, 24 april 2022",
    zelenskytext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readmorebutton: "Read More",
  },
  {
    image: "images/img_unsplash_mwuod2cm8g4.png",
    politicalbutton: "Political",
    ukrainetext: "Ukraine, 24 april 2022",
    zelenskytext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readmorebutton: "Read More",
  },
  {
    image: "images/img_unsplash_stou35wzmso.png",
    politicalbutton: "Political",
    ukrainetext: "Ukraine, 24 april 2022",
    zelenskytext: "Zelensky accuses Russia of worst crimes since WW2 ",
    descriptiontext:
      "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
    readmorebutton: "Read More",
  },
];
const data3 = [
  {
    image: "images/img_rectangle_1479_84x121.png",
    title: "How to maximize investment with mutual funds",
    date: "Indonesia,  22 Agust 2022 ",
    duration: "- 15 minutes ago",
  },
  {
    image: "images/img_rectangle_1479_2.png",
    title: "How to maximize investment with mutual funds",
    date: "Indonesia,  22 Agust 2022 ",
    duration: "- 15 minutes ago",
  },
  {
    image: "images/img_rectangle_1479_3.png",
    title: "How to maximize investment with mutual funds",
    date: "Indonesia,  22 Agust 2022 ",
    duration: "- 15 minutes ago",
  },
  {
    image: "images/img_rectangle_1479_4.png",
    title: "How to maximize investment with mutual funds",
    date: "Indonesia,  22 Agust 2022 ",
    duration: "- 15 minutes ago",
  },
  {
    image: "images/img_rectangle_1479_5.png",
    title: "How to maximize investment with mutual funds",
    date: "Indonesia,  22 Agust 2022 ",
    duration: "- 15 minutes ago",
  },
];
const data4 = [{ image: "images/img_unsplash_irrbsnd5euc.png" }, { image: "images/img_unsplash_it6aov1scw0.png" }];
const data5 = [
  { image: "images/img_rectangle_17.png", title: "Avengers Age of Ultron", genres: "Genres : Action Adventure Sci-Fi" },
  { image: "images/img_rectangle_17_307x308.png", title: "Captain Marvel", genres: "Genres : Action Adventure Sci-Fi" },
  { image: "images/img_rectangle_17_1.png", title: "Avengers End Game", genres: "Genres : Action Adventure Sci-Fi" },
  {
    image: "images/img_rectangle_17_2.png",
    title: "Spiderman Far from Home",
    genres: "Genres : Action Adventure Sci-Fi",
  },
];

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <Header className="self-stretch" />
          <div className="mx-auto mt-[50px] flex w-full max-w-[1292px] flex-col gap-[49px] md:p-5">
            <div className="flex items-center gap-[50px] md:flex-col">
              <Img src="images/img_rectangle_5.png" alt="image" className="h-[255px] w-[48%] object-cover md:w-full" />
              <div className="flex flex-1 flex-col items-start gap-[43px] md:self-stretch">
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex w-[16%] items-start gap-2.5 md:w-full">
                    <div className="h-[15px] w-[15px] rounded-[7px] bg-blue_gray-900" />
                    <Text size="3xl" as="p" className="tracking-[-0.50px] !text-blue_gray-900">
                      Hot Topic
                    </Text>
                  </div>
                  <Heading size="3xl" as="h1" className="mt-5 w-full !font-bold leading-[43px] tracking-[-0.50px]">
                    Miami Dolphins won the match and officially qualified for the final
                  </Heading>
                  <Heading as="h2" className="mt-10 tracking-[-0.50px]">
                    New York, 22 Agust 2022{" "}
                  </Heading>
                </div>
                <Button
                  size="sm"
                  shape="square"
                  rightIcon={<Img src="images/img_arrow_1.svg" alt="arrow 1" className="h-px w-[27px]" />}
                  className="min-w-[108px] gap-[13px] tracking-[-0.50px] text-blue_gray-900"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="flex gap-[55px] md:flex-col">
              {data.map((d, index) => (
                <HomepageRowhowtomaximiz {...d} key={"listhowtomaximi" + index} />
              ))}
            </div>
          </div>
          <div className="container-xs mt-[118px] flex flex-col gap-[50px] md:p-5">
            <div className="flex items-center justify-between gap-5">
              <Heading size="3xl" as="h2" className="self-start tracking-[-0.50px]">
                Latest Release
              </Heading>
              <Button shape="round" className="min-w-[122px] self-end font-semibold tracking-[-0.50px] sm:px-5">
                View All
              </Button>
            </div>
            <div>
              <div className="flex gap-[50px] md:flex-col">
                <div className="flex w-[44%] flex-col items-start gap-[25px] md:w-full">
                  <div className="relative h-[270px] self-stretch md:h-auto">
                    <Img
                      src="images/img_unsplash_10mwi2uawfg.png"
                      alt="unsplash"
                      className="h-[270px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[190px] bg-gradient p-[13px] md:gap-[142px] sm:gap-[95px]">
                      <Button
                        size="md"
                        shape="square"
                        className="mr-2.5 mt-2.5 min-w-[88px] self-end font-bold tracking-[0.12px] md:mr-0"
                      >
                        Hot Topic
                      </Button>
                      <Text size="md" as="p" className="ml-[9px] tracking-[-0.50px] md:ml-0">
                        Ukraine, 24 april 2022
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <Heading size="2xl" as="h3" className="leading-[29px] tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text size="md" as="p" className="leading-[35px] tracking-[-0.50px] !text-black-900_7f">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    size="5xl"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_akariconsarrowupright.svg"
                        alt="akar-icons:arrow-up-right"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    className="min-w-[177px] gap-[5px] tracking-[-0.50px] sm:px-5"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-1 flex-col gap-[50px] md:self-stretch">
                  {[...Array(2)].map((d, index) => (
                    <HomepageRownewyorkninet
                      userimage="images/img_unsplash_j5keq1jlqzk.png"
                      datetext="New York, 19 april 2022"
                      titletext="Jhon Lorni has won 1st place in international match"
                      descriptiontext="this is his first victory in the international olympics, so his name is quite explosive on the international scene"
                      readmorebutton="Read More"
                      key={"listnewyorknine" + index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[120px] flex flex-col items-center gap-[50px] self-stretch">
            <div className="container-xs px-[373px] md:p-5 md:px-5">
              <Heading size="3xl" as="h2" className="text-center leading-[43px] tracking-[-0.50px]">
                The Audience&#39;s choice of the Best Films
              </Heading>
            </div>
            <div className="self-stretch">
              <div className="flex flex-col items-center gap-[50px]">
                <div className="flex flex-col items-center self-stretch">
                  <div className="h-[700px] self-stretch bg-[url(/public/images/img_group_105.png)] bg-cover bg-no-repeat md:h-auto">
                    <div className="flex justify-center bg-gradient3 py-[71px] md:py-5">
                      <div className="container-xs mb-[146px] mt-[249px] flex items-start justify-between gap-5 md:p-5">
                        <Button
                          size="8xl"
                          variant="outline"
                          shape="circle"
                          color="undefined_undefined"
                          className="mb-[103px] w-[60px] !rounded-[30px]"
                        >
                          <Img src="images/img_arrow.svg" />
                        </Button>
                        <div className="flex h-[15px] w-[115px]" />
                        <Button
                          size="8xl"
                          shape="circle"
                          className="w-[60px] rotate-[180deg] !rounded-[30px] border-2 border-solid border-white-A700"
                        >
                          <Img src="images/img_arrow_deep_orange_a400.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="container-xs relative mt-[-197px] flex gap-5 md:flex-col md:p-5">
                    {data5.map((d, index) => (
                      <HomepageCard {...d} key={"slider" + index} className="gap-[22px] md:w-full sm:pb-5" />
                    ))}
                  </div>
                </div>
                <div className="container-xs px-[586px] md:p-5 md:px-5">
                  <Button shape="round" className="w-full font-semibold tracking-[-0.50px] sm:px-5">
                    View All
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[120px] flex justify-center self-stretch bg-black-900 py-12 md:py-5">
            <div className="container-xs flex items-center justify-center gap-[50px] md:flex-col md:p-5">
              <div className="relative h-[600px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
                <div className="flex h-[600px] w-full max-w-[796px] bg-[url(/public/images/img_background.png)] bg-cover bg-no-repeat md:h-auto">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="mr-2.5 h-[15px] w-[15px] bg-white-A700" />
                      ) : (
                        <div className="mr-2.5 h-[15px] w-[15px] bg-white_A700_4f" />
                      );
                    }}
                    activeIndex={sliderState1}
                    onSlideChanged={(e) => {
                      setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex bg-gradient2 p-[45px] md:p-5">
                          <div className="mt-[226px] flex w-[51%] justify-center pb-[70px] md:w-full md:pb-5">
                            <div className="flex w-full flex-col items-center gap-[50px]">
                              <div className="flex flex-col items-center gap-3 self-stretch">
                                <div className="flex w-[42%] items-center gap-2.5 md:w-full">
                                  <div className="h-[15px] w-[15px] rounded-[7px] bg-blue_gray-900" />
                                  <Text size="md" as="p" className="tracking-[-0.50px]">
                                    Entertainment Topic
                                  </Text>
                                </div>
                                <Heading
                                  size="3xl"
                                  as="h2"
                                  className="w-full text-center leading-[43px] tracking-[-0.50px] !text-white-A700"
                                >
                                  Best Place for Vacation in Sydney
                                </Heading>
                              </div>
                              <Button
                                size="5xl"
                                variant="outline"
                                shape="round"
                                color="undefined_undefined"
                                className="min-w-[154px] !border font-semibold tracking-[-0.50px] text-white-A700 sm:px-5"
                              >
                                Read Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
              <div className="flex w-[36%] flex-col gap-[43px] md:w-full">
                {data3.map((d, index) => (
                  <HomepageRowhowtomaximiz1 {...d} key={"leftnews" + index} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-[120px] h-[500px] self-stretch md:h-auto">
            <div className="flex h-[500px] w-full max-w-[1440px] bg-[url(/public/images/img_background_500x1440.png)] bg-cover bg-no-repeat md:h-auto">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                renderDotsItem={(props) => {
                  return props?.isActive ? (
                    <div className="mr-2.5 h-[15px] w-[15px] bg-white-A700" />
                  ) : (
                    <div className="mr-2.5 h-[15px] w-[15px] bg-white_A700_4f" />
                  );
                }}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex bg-gradient1 py-16 md:py-5">
                      <div className="container-xs mt-[127px] flex items-start justify-between gap-5 pr-[7px] md:flex-col md:p-5">
                        <div className="flex w-[49%] flex-col items-start md:w-full">
                          <div className="flex w-[13%] items-center gap-2.5 md:w-full">
                            <div className="h-[15px] w-[15px] rounded-[7px] bg-deep_orange-A400" />
                            <Text size="md" as="p" className="tracking-[-0.50px]">
                              Life Topic
                            </Text>
                          </div>
                          <Heading
                            size="4xl"
                            as="h2"
                            className="mt-[7px] w-full leading-[58px] tracking-[-0.50px] !text-white-A700"
                          >
                            St Pete&#39;s most beautiful beach in Florida
                          </Heading>
                          <Button
                            size="5xl"
                            variant="outline"
                            shape="round"
                            color="undefined_undefined"
                            className="mt-[57px] min-w-[160px] !border font-semibold tracking-[-0.50px] text-white-A700 sm:px-5"
                          >
                            Read More
                          </Button>
                        </div>
                        <Button
                          size="8xl"
                          variant="outline"
                          shape="circle"
                          color="undefined_undefined"
                          className="mt-7 w-[60px] rotate-[180deg] !rounded-[30px]"
                        >
                          <Img src="images/img_arrow_white_a700.svg" />
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
          <div className="container-xs mt-[119px] flex flex-col gap-[49px] md:p-5">
            <div className="flex flex-col gap-7">
              <div className="flex items-start justify-between gap-5">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                  Entertaiment{" "}
                </Heading>
                <Button shape="round" className="min-w-[122px] font-semibold tracking-[-0.50px] sm:px-5">
                  View All
                </Button>
              </div>
              <div className="h-px bg-black-900_7f" />
            </div>
            <div className="flex gap-5 pb-[33px] md:flex-col sm:pb-5">
              {data1.map((d, index) => (
                <HomepageColumn {...d} key={"listtagone" + index} />
              ))}
            </div>
          </div>
          <div className="container-xs mt-[119px] flex flex-col gap-[49px] md:p-5">
            <div className="flex flex-col gap-7">
              <div className="flex items-start justify-between gap-5">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                  Political{" "}
                </Heading>
                <Button shape="round" className="min-w-[122px] font-semibold tracking-[-0.50px] sm:px-5">
                  View All
                </Button>
              </div>
              <div className="h-px bg-black-900_7f" />
            </div>
            <div className="flex gap-[19px] pb-[33px] md:flex-col sm:pb-5">
              {data2.map((d, index) => (
                <HomepageColumn1 {...d} key={"listpolitical" + index} />
              ))}
            </div>
          </div>
          <div className="container-xs mt-[123px] flex flex-col gap-[49px] md:p-5">
            <div className="flex flex-col gap-[26px]">
              <div className="flex items-center justify-between gap-5">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                  Sport{" "}
                </Heading>
                <Button shape="round" className="min-w-[122px] font-semibold tracking-[-0.50px] sm:px-5">
                  View All
                </Button>
              </div>
              <div className="h-px bg-black-900_7f" />
            </div>
            <div className="flex gap-5 pb-[33px] md:flex-col sm:pb-5">
              <div className="flex w-full flex-col gap-[21px]">
                <div className="relative h-[246px] md:h-auto">
                  <Img
                    src="images/img_unsplash_9hi8ujmsdza.png"
                    alt="image"
                    className="h-[246px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[163px] bg-gradient p-[17px] md:gap-[122px] sm:gap-[81px]">
                    <Button
                      size="md"
                      shape="square"
                      className="mr-1.5 mt-1.5 min-w-[64px] self-end font-bold tracking-[0.12px] md:mr-0"
                    >
                      Sport
                    </Button>
                    <Text as="p" className="tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <div className="self-stretch">
                    <Heading as="h3" className="leading-[21px] tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
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
                    Read More
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[21px]">
                <div className="relative h-[246px] md:h-auto">
                  <Img
                    src="images/img_unsplash_pf6e3o0gl4m.png"
                    alt="unsplash"
                    className="h-[246px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[163px] bg-gradient p-[17px] md:gap-[122px] sm:gap-[81px]">
                    <Button
                      size="md"
                      shape="square"
                      className="mr-1.5 mt-1.5 min-w-[64px] self-end font-bold tracking-[0.12px] md:mr-0"
                    >
                      Sport
                    </Button>
                    <Text as="p" className="tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <div className="self-stretch">
                    <Heading as="h4" className="leading-[21px] tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
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
                    Read More
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[21px]">
                <div className="relative h-[246px] self-stretch md:h-auto">
                  <Img
                    src="images/img_unsplash_wuehagqo5he.png"
                    alt="unsplash"
                    className="h-[246px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end gap-[163px] bg-gradient p-[17px] md:gap-[122px] sm:gap-[81px]">
                    <Button
                      size="md"
                      shape="square"
                      className="mr-1.5 mt-1.5 min-w-[64px] self-end font-bold tracking-[0.12px] md:mr-0"
                    >
                      Sport
                    </Button>
                    <Text as="p" className="tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
                <div className="self-stretch">
                  <Heading as="h5" className="leading-[21px] tracking-[-0.50px]">
                    Zelensky accuses Russia of worst crimes since WW2{" "}
                  </Heading>
                  <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                    The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                    thrown off the UN Security Council.
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
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[120px] flex flex-col gap-[119px] md:p-5">
            <div className="flex flex-1 flex-col gap-[49px]">
              <div className="flex flex-col gap-7">
                <div className="flex items-center justify-between gap-5">
                  <Heading size="3xl" as="h2" className="self-start tracking-[-0.50px]">
                    Health{" "}
                  </Heading>
                  <Button shape="round" className="min-w-[122px] self-end font-semibold tracking-[-0.50px] sm:px-5">
                    View All
                  </Button>
                </div>
                <div className="h-px bg-black-900_7f" />
              </div>
              <div className="flex gap-[19px] pb-[33px] md:flex-col sm:pb-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <div className="relative h-[247px] self-stretch md:h-auto">
                    <Img
                      src="images/img_unsplash_usfie5yc7py.png"
                      alt="image"
                      className="h-[247px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
                      <Button
                        size="md"
                        shape="square"
                        className="mr-[9px] mt-[9px] min-w-[70px] self-end font-bold tracking-[0.12px] md:mr-0"
                      >
                        Health
                      </Button>
                      <Text as="p" className="tracking-[-0.50px]">
                        Ukraine, 24 april 2022
                      </Text>
                    </div>
                  </div>
                  <div className="self-stretch">
                    <Heading as="h3" className="leading-[21px] tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
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
                    Read More
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-[21px]">
                  <div className="relative h-[247px] md:h-auto">
                    <Img
                      src="images/img_unsplash_kcrfw_hje8y.png"
                      alt="image"
                      className="h-[247px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
                      <Button
                        size="md"
                        shape="square"
                        className="mr-[9px] mt-[9px] min-w-[70px] self-end font-bold tracking-[0.12px] md:mr-0"
                      >
                        Health
                      </Button>
                      <Text as="p" className="tracking-[-0.50px]">
                        Ukraine, 24 april 2022
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="self-stretch">
                      <Heading as="h4" className="leading-[21px] tracking-[-0.50px]">
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Heading>
                      <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                        The Ukrainian leader says Russia must face an international trial as he calls for the country to
                        be thrown off the UN Security Council.
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
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[21px]">
                  <div className="relative h-[247px] md:h-auto">
                    <Img
                      src="images/img_unsplash_zuj2m7qxda0.png"
                      alt="image"
                      className="h-[247px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
                      <Button
                        size="md"
                        shape="square"
                        className="mr-[9px] mt-[9px] min-w-[70px] self-end font-bold tracking-[0.12px] md:mr-0"
                      >
                        Health
                      </Button>
                      <Text as="p" className="tracking-[-0.50px]">
                        Ukraine, 24 april 2022
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="self-stretch">
                      <Heading as="h5" className="leading-[21px] tracking-[-0.50px]">
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Heading>
                      <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                        The Ukrainian leader says Russia must face an international trial as he calls for the country to
                        be thrown off the UN Security Council.
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
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px]">
              <div className="flex flex-col gap-7">
                <div className="flex items-start justify-between gap-5">
                  <Heading size="3xl" as="h6" className="tracking-[-0.50px]">
                    Finance{" "}
                  </Heading>
                  <Button shape="round" className="min-w-[122px] font-semibold tracking-[-0.50px] sm:px-5">
                    View All
                  </Button>
                </div>
                <div className="h-px bg-black-900_7f" />
              </div>
              <div className="flex w-[66%] gap-[19px] pb-[33px] md:w-full md:flex-col sm:pb-5">
                {data4.map((d, index) => (
                  <div key={"homepage" + index} className="flex w-full flex-col gap-[21px]">
                    <div className="relative h-[247px] md:h-auto">
                      <Img src={d.image} alt="image" className="h-[247px] w-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[168px] bg-gradient p-3.5 md:gap-[126px] sm:gap-[84px]">
                        <Button
                          size="md"
                          shape="square"
                          className="mr-[9px] mt-[9px] min-w-[78px] self-end font-bold tracking-[0.12px] md:mr-0"
                        >
                          Finance
                        </Button>
                        <Text as="p" className="tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                      <div className="self-stretch">
                        <Heading as="h6" className="leading-[21px] tracking-[-0.50px]">
                          Zelensky accuses Russia of worst crimes since WW2{" "}
                        </Heading>
                        <Text as="p" className="!font-poppins leading-[25px] tracking-[-0.50px] !text-black-900_7f">
                          The Ukrainian leader says Russia must face an international trial as he calls for the country
                          to be thrown off the UN Security Council.
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
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container-xs mt-[120px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] bg-gray-900 p-[37px] md:p-5">
            <div className="flex w-[54%] flex-col gap-[37px] md:w-full">
              <Heading size="4xl" as="h2" className="text-center leading-[58px] tracking-[-0.50px] !text-white-A700">
                Get the Latest Notifications and Info from Us
              </Heading>
              <Text size="xl" as="p" className="text-center leading-[35px] tracking-[-0.50px] !text-white-A700_b2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </Text>
            </div>
            <Button
              size="6xl"
              className="mb-[5px] min-w-[196px] rounded-[26px] border border-solid border-blue_gray-900 font-semibold tracking-[-0.50px] text-blue_gray-900 sm:px-5"
            >
              Subscribe Now
            </Button>
          </div>
          <Footer className="mt-[120px]" />
        </div>
      </div>
    </>
  );
}
