import { FunctionComponent, useState } from "react";
import { Autocomplete, TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const CoverFrame: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full h-[960px] overflow-hidden text-left text-xl text-primary-contrast font-components-button-large">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[1920px] h-[960px]" />
        <img
          className="absolute top-[0px] left-[297.9px] w-[1302.1px] h-[960px] object-cover"
          alt=""
          src="/group-16@2x.png"
        />
        <img
          className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/weblogo-1.svg"
        />
        <div className="absolute top-[875.25px] left-[1173.29px] text-skyblue">
          Made by Team Locofy
        </div>
        <div className="absolute top-[827.38px] left-[1173.29px] text-[34px] font-medium">
          Travel Website
        </div>
        <div className="absolute top-[53.25px] left-[56px] rounded-2xl bg-primary-contrast w-[1076.45px] h-[850.71px] overflow-hidden flex flex-col items-center justify-start gap-[51.58px] text-center text-[13.46px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
          <div className="self-stretch flex flex-col items-center justify-start text-[45.6px] font-baloo-bhai">
            <header className="self-stretch bg-primary-contrast h-[57.56px] flex flex-row py-[16.445871353149414px] px-[59.803165435791016px] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[10.47px] text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
              <div className="flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className="flex flex-row items-center justify-end gap-[26.91px] sm:flex">
                  <div className="flex flex-row items-center justify-end gap-[22.43px] md:hidden">
                    <div className="relative text-cornflowerblue-200 inline-block w-[35.13px] h-[11.96px] shrink-0">
                      Explore
                    </div>
                    <div className="relative inline-block w-[32.14px] h-[11.96px] shrink-0">
                      Search
                    </div>
                    <div className="relative inline-block w-[30.65px] h-[11.96px] shrink-0">
                      Hotels
                    </div>
                    <div className="relative inline-block w-[29.15px] h-[11.96px] shrink-0">
                      Offers
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[8.97px]">
                    <img
                      className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden md:flex"
                      alt=""
                      src="/notification2.svg"
                    />
                    <img
                      className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                      alt=""
                      src="/notification3.svg"
                    />
                    <img
                      className="rounded-[28.41px] w-[26.91px] h-[26.91px] object-cover"
                      alt=""
                      src="/top_avatar1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="self-stretch relative h-[478.43px]">
              <div className="absolute w-[calc(100%_+_0.01px)] top-[0px] right-[-0.01px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[478.36px]" />
              <img
                className="absolute w-[calc(100%_+_0.01px)] top-[0.3px] right-[-0.01px] left-[0px] max-w-full overflow-hidden h-[478.43px] object-cover"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] w-full h-[478.43px] flex flex-col py-0 px-[104.6555404663086px] box-border items-center justify-center gap-[32.14px] md:pl-[30px] md:pr-[30px] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[3.74px]">
                  <div className="self-stretch relative leading-[50.09px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-[17.94px] leading-[23.92px] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-[7.48px] bg-primary-contrast flex flex-row p-[14.950791358947754px] items-start justify-start text-left text-[8.97px] text-gray-300 font-components-button-large md:flex-col">
                  <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                    <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <Autocomplete
                        className="self-stretch"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch h-[41.86px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-[2.99px] box-border h-[41.86px] flex flex-col py-0 px-[8.970474243164062px] items-start justify-start border-[0.7px] border-solid border-gray-400">
                          <div className="bg-primary-contrast h-[1.5px] flex flex-row py-0 px-[2.9901583194732666px] box-border items-center justify-start">
                            <div className="relative tracking-[0.11px] leading-[8.97px] flex items-center w-[26.16px] h-[8.97px] shrink-0">
                              Arrival
                            </div>
                          </div>
                          <div className="self-stretch overflow-hidden flex flex-row py-[11.213094711303711px] px-0 items-center justify-start gap-[5.98px] text-center text-dimgray-200">
                            <div className="hidden flex-row items-start justify-start gap-[5.98px]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-gray-500">
                                    <div className="relative tracking-[0.12px] leading-[13.46px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel1.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-gray-500">
                                    <div className="relative tracking-[0.12px] leading-[13.46px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 relative text-[11.96px] tracking-[0.11px] leading-[17.94px] text-gray-500 text-left">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch">
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              size: "medium",
                              fullWidth: true,
                              color: "primary",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    name="search"
                    id="search"
                    color="primary"
                  >
                    Search flights
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-0 px-[59.803165435791016px] box-border items-center justify-start gap-[59.8px] max-w-[1280px] text-left text-darkslategray-300 md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14.95px] md:block">
              <b className="relative tracking-[0.04em] uppercase inline-block w-[947.92px]">
                Upcoming Flight
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[26.91px] text-[17.94px] text-cornflowerblue-300 md:flex-col">
                <div className="rounded-[5.98px] flex flex-col p-[14.950791358947754px] items-start justify-start gap-[15.7px] border-[0.7px] border-solid border-whitesmoke-200 lg:w-[520px] md:w-full md:block md:mb-[30px]">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative w-[53.82px] h-[34.39px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[33.44px] h-[20.93px]">
                        SIN
                      </b>
                      <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[53.82px] h-[11.96px]">
                        Singapore
                      </div>
                    </div>
                    <div className="relative w-[87.72px] h-[32.96px] text-[10.47px] text-gray-100">
                      <b className="absolute top-[20.99px] left-[17.71px] tracking-[0.02em] capitalize inline-block w-[49.08px] h-[11.96px]">
                        15H 55M
                      </b>
                      <img
                        className="absolute top-[0px] left-[0px] w-[87.72px] h-[17.94px]"
                        alt=""
                        src="/group-17.svg"
                      />
                    </div>
                    <div className="relative w-[65.24px] h-[34.39px] text-right">
                      <b className="absolute top-[0px] left-[26.91px] tracking-[0.04em] capitalize inline-block w-[38.33px] h-[20.93px]">
                        LAX
                      </b>
                      <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[65.24px] h-[11.96px]">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[0.75px] border-t-[0.7px] border-solid border-whitesmoke-200 md:w-full" />
                  <div className="self-stretch flex flex-row items-center justify-between text-[10.47px] text-gray-100">
                    <div className="relative tracking-[0.02em] capitalize inline-block w-[152.42px] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative tracking-[0.02em] text-right inline-block w-[65.21px] shrink-0">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[0.75px] h-[109.13px] border-r-[0.7px] border-solid border-whitesmoke-200 md:hidden" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[14.95px] text-[13.46px] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative tracking-[0.04em] uppercase">
                    Prepare for your trip
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[48.88px] h-[48.88px]"
                        alt=""
                        src="/group-21.svg"
                      />
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[29.15px] h-[13.46px] shrink-0">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.88px] h-[48.88px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-sandybrown w-[48.88px] h-[48.88px]" />
                        <img
                          className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector8.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[59.8px] h-[13.46px] shrink-0">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[48.88px] h-[48.88px]"
                        alt=""
                        src="/group-211.svg"
                      />
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[23.92px] h-[13.46px] shrink-0">
                        Eats
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.88px] h-[48.88px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-gold w-[48.88px] h-[48.88px]" />
                        <img
                          className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector9.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[52.33px] h-[13.46px] shrink-0">
                        Commute
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[52.33px] h-[48.88px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-cornflowerblue-100 w-[52.33px] h-[48.88px]" />
                        <img
                          className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector10.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[24.01px]">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.88px] h-[48.88px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-yellowgreen w-[48.88px] h-[48.88px]" />
                        <img
                          className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector11.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[38.87px] h-[13.46px] shrink-0">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[17.94px] text-cornflowerblue-300">
              <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px] sm:flex-[unset] sm:self-stretch">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    Plan your next trip
                  </b>
                  <b className="self-stretch relative text-[22.43px] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
                    Most Popular Destinations
                  </b>
                </div>
                <a
                  className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[172.97px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[inherit] md:hidden"
                  href="#"
                >
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[147.51px] shrink-0">
                    View all destinations
                  </div>
                  <img
                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright6.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.05px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashnnzkznywhau@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.44px)] top-[0px] right-[0.22px] left-[0.22px] flex flex-row py-[5.980316638946533px] px-[8.970474243164062px] box-border items-start justify-start">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Paris
                      </b>
                      <div className="relative w-[67.97px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[67.97px] h-[28.41px]">
                          $699
                        </div>
                        <div className="absolute top-[0px] left-[28.7px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.27px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.05px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashyc8qqp50bda@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.44px)] top-[0px] right-[0.22px] left-[0.22px] flex flex-row py-[5.980316638946533px] px-[8.970474243164062px] box-border items-start justify-start">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Greece
                      </b>
                      <div className="relative w-[74.7px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[74.01px] h-[28.41px]">
                          $1079
                        </div>
                        <div className="absolute top-[0px] left-[35.43px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.27px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.05px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashltnpejwdsay@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.44px)] top-[0px] right-[0.22px] left-[0.22px] flex flex-row py-[5.980316638946533px] px-[8.970474243164062px] box-border items-start justify-start">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Norway
                      </b>
                      <div className="relative w-[67.97px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[67.97px] h-[28.41px]">
                          $895
                        </div>
                        <div className="absolute top-[0px] left-[28.7px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.27px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.05px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashm0oiyn5u8zm@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.44px)] top-[0px] right-[0.22px] left-[0.22px] flex flex-row py-[5.980316638946533px] px-[8.970474243164062px] box-border items-start justify-start">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Tuscany
                      </b>
                      <div className="relative w-[75.22px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[75.22px] h-[28.41px]">
                          $1245
                        </div>
                        <div className="absolute top-[0px] left-[35.95px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.27px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[172.97px] hidden flex-row items-start justify-start gap-[7.48px] text-right md:flex md:mt-4">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[147.51px] shrink-0 md:w-auto">
                  View all destinations
                </div>
                <img
                  className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright7.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[17.94px] text-[22.43px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
                  Recommended Holidays
                </b>
                <a
                  className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[149.43px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:hidden"
                  href="#"
                >
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0">
                    View all holidays
                  </div>
                  <img
                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright8.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
                    alt=""
                    src="/unsplash5mv818tzxeo1@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
                        <div className="self-stretch relative text-[14.95px] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Bali
                        </div>
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[53.82px] h-[25.42px] shrink-0">
                        $899
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
                    alt=""
                    src="/unsplashj82dskoxvy8@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
                        <div className="self-stretch relative text-[14.95px] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Switzerland
                        </div>
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          6D5N
                        </div>
                      </div>
                      <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[56.07px] h-[25.42px] shrink-0">
                        $900
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
                    alt=""
                    src="/unsplash4ezkckxolre@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
                        <div className="self-stretch relative text-[14.95px] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Boracay
                        </div>
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          5D4N
                        </div>
                      </div>
                      <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[53.82px] h-[25.42px] shrink-0">
                        $699
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
                    alt=""
                    src="/unsplashuyqmxhjr3ne@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
                        <div className="self-stretch relative text-[14.95px] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Palawan
                        </div>
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[52.33px] h-[25.42px] shrink-0">
                        $789
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[149.43px] hidden flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <img
                  className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright9.svg"
                />
              </div>
            </div>
            <form className="self-stretch flex flex-col items-start justify-start gap-[14.95px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <b className="relative text-[22.43px] tracking-[0.04em] capitalize inline-block font-components-button-large text-darkslategray-300 text-left w-[826.29px] h-[26.16px] shrink-0 sm:text-3xl">
                  Popular Stays
                </b>
                <a
                  className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[7.48px] md:hidden"
                  href="#"
                >
                  <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.15px] shrink-0">
                    View all stays
                  </div>
                  <img
                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright10.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
                <div className="self-stretch flex-1 flex flex-row py-0 px-[8.970474243164062px] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[11.213094711303711px] px-[9.71801471710205px] items-start justify-start gap-[17.19px] w-3/12 border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.51px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc2@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8.22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Entire bungalow
                        </div>
                        <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left sm:text-xl">
                          Matterhorn Suites
                        </b>
                        <div className="self-stretch relative text-[13.46px] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $575/night
                        </div>
                      </div>
                      <img
                        className="relative w-[18.69px] h-[18.69px] overflow-hidden shrink-0"
                        alt=""
                        src="/video3.svg"
                      />
                    </div>
                    <div className="self-stretch relative h-[14.2px]">
                      <div className="absolute top-[0px] left-[40.09px] text-[11.96px] tracking-[0.04em] font-components-button-large text-cornflowerblue-200 text-left inline-block w-[161.74px] h-[14.2px]">
                        (60 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[33.15px] h-[14.2px]">
                        <div className="absolute top-[0px] left-[15.21px] text-[11.96px] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[17.94px] h-[14.2px]">
                          4.9
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector12.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.39px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.48px] h-[19.44px] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-[8.970474243164062px] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[11.213094711303711px] px-[9.71801471710205px] items-start justify-start gap-[17.19px] w-3/12 border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.51px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashtsn8bpopveo1@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          2-Story beachfront suite
                        </div>
                        <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left sm:text-xl">
                          Discovery Shores
                        </b>
                        <div className="self-stretch relative text-[13.46px] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $360/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-[14.2px]">
                      <div className="absolute top-[0px] left-[40.09px] text-[11.96px] tracking-[0.04em] font-components-button-large text-cornflowerblue-200 text-left inline-block w-[161.74px] h-[14.2px]">
                        (116 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[33.15px] h-[14.2px]">
                        <div className="absolute top-[0px] left-[15.21px] text-[11.96px] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[17.94px] h-[14.2px]">
                          4.8
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector13.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.39px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.48px] h-[19.44px] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-[8.970474243164062px] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[11.213094711303711px] px-[9.71801471710205px] items-start justify-start gap-[17.19px] w-3/12 border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.51px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc3@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Single deluxe hut
                        </div>
                        <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left">{`Arctic Hut `}</b>
                        <div className="self-stretch relative text-[13.46px] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $420/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-[14.2px]">
                      <div className="absolute top-[0px] left-[40.17px] text-[11.96px] tracking-[0.04em] font-components-button-large text-cornflowerblue-200 text-left inline-block w-[161.67px] h-[14.2px]">
                        (78 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[33.18px] h-[14.2px]">
                        <div className="absolute top-[0px] left-[15.23px] text-[11.96px] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[17.94px] h-[14.2px]">
                          4.7
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.58%] top-[0%] right-[62.42%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector14.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.39px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.48px] h-[19.44px] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-[8.970474243164062px] box-border items-start justify-center w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[11.213094711303711px] px-[9.71801471710205px] items-start justify-start gap-[17.19px] w-3/12 border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.51px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashyqrybvxug5q1@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8.22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
                        <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Deluxe King Room
                        </div>
                        <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left">
                          Lake Louise Inn
                        </b>
                        <div className="self-stretch relative text-[13.46px] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $244/night
                        </div>
                      </div>
                      <img
                        className="relative w-[18.69px] h-[18.69px] overflow-hidden shrink-0"
                        alt=""
                        src="/video4.svg"
                      />
                    </div>
                    <div className="self-stretch relative h-[14.2px]">
                      <div className="absolute top-[0px] left-[40.09px] text-[11.96px] tracking-[0.04em] font-components-button-large text-cornflowerblue-200 text-left inline-block w-[161.74px] h-[14.2px]">
                        (63 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[33.15px] h-[14.2px]">
                        <div className="absolute top-[0px] left-[15.21px] text-[11.96px] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[17.94px] h-[14.2px]">
                          4.6
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector15.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.39px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.48px] h-[19.44px] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[7.48px] md:flex md:mt-4">
                <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.15px] shrink-0 md:w-auto">
                  View all stays
                </div>
                <img
                  className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright11.svg"
                />
              </div>
            </form>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
            <div className="self-stretch relative bg-aliceblue h-[395.45px] overflow-hidden shrink-0">
              <img
                className="absolute w-[calc(100%_+_0.01px)] top-[0px] right-[-0.01px] left-[0px] max-w-full overflow-hidden h-[396.2px] object-cover"
                alt=""
                src="/rectangle-186@2x.png"
              />
              <div className="[position:relative!important] top-[38.87px] left-[auto!important] w-[410.4px] flex flex-col p-[14.950791358947754px] box-border items-center justify-start gap-[22.43px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[5.23px]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-[22.43px] text-darkslategray-100">
                    Get weekly updates
                  </b>
                </div>
                <div className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[20.931108474731445px] px-[22.426189422607422px] items-start justify-start gap-[12.71px] text-left text-slategray border-[0.7px] border-solid border-whitesmoke-200">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[25.42px]">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7.48px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                    <div className="overflow-hidden flex flex-col py-[5.980316638946533px] px-[16.445871353149414px] items-start justify-start">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                        submit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[24.668806076049805px] px-[62.7933235168457px] items-start justify-start gap-[32.89px] text-left text-[13.46px] text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.47px] mb-[40px!important] md:flex-[unset] md:self-stretch">
                <img
                  className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
                  alt=""
                  src="/logo3.svg"
                />
                <div className="self-stretch relative leading-[20.18px]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[97.18px] h-[22.43px]"
                  alt=""
                  src="/social-icons3.svg"
                />
              </div>
              <div className="relative box-border w-[0.75px] h-[118.02px] border-r-[0.7px] border-solid border-gray-600 md:hidden" />
              <div className="flex-1 flex flex-row items-start justify-between text-[11.96px] md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="relative w-[147.51px] h-[119.43px] sm:mb-[40px!important]">
                  <a className="[text-decoration:none] absolute top-[35.7px] left-[0px] text-[inherit] inline-block w-[101.42px] h-[14.2px]">
                    About Us
                  </a>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[130.61px] h-[20.18px]">
                    Company
                  </div>
                  <div className="absolute top-[58.87px] left-[0px] inline-block w-[63px] h-[14.2px]">
                    News
                  </div>
                  <div className="absolute top-[82.05px] left-[0px] inline-block w-[86.05px] h-[14.2px]">
                    Careers
                  </div>
                  <div className="absolute top-[105.22px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
                    How we work
                  </div>
                </div>
                <div className="relative w-[147.51px] h-[119.43px] sm:mb-[40px!important]">
                  <div className="absolute top-[35.7px] left-[0px] inline-block w-[81.95px] h-[14.2px]">
                    Account
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[98.34px] h-[20.18px]">
                    Support
                  </div>
                  <div className="absolute top-[58.87px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
                    Support Center
                  </div>
                  <div className="absolute top-[82.05px] left-[0px] inline-block w-[39.61px] h-[14.2px]">
                    FAQ
                  </div>
                  <div className="absolute top-[105.22px] left-[0px] inline-block w-[122.93px] h-[14.2px]">
                    Accessibility
                  </div>
                </div>
                <div className="relative w-[147.51px] h-[119.43px]">
                  <div className="absolute top-[35.7px] left-[0px] inline-block w-[129.23px] h-[14.2px]">
                    Covid Advisory
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[57.3px] h-[20.18px]">
                    More
                  </div>
                  <div className="absolute top-[58.87px] left-[0px] inline-block w-[101.19px] h-[14.2px]">
                    Airline Fees
                  </div>
                  <div className="absolute top-[82.05px] left-[0px] inline-block w-[37.79px] h-[14.2px]">
                    Tips
                  </div>
                  <div className="absolute top-[105.22px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
                    Quarantine Rules
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
