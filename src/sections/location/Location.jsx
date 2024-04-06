import LocationBg from "./location.webp";
const getDirections =
  "https://www.google.com/maps/dir//S+MART,+Mahbubabad+-+Warangal+Rd,+Mahabubabad,+Telangana+506101/@17.6033214,80.005098,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3a348fda3fff6fad:0xc28652cb311e13ee!2m2!1d80.0050942!2d17.6032212!3e0?entry=ttu";

const Location = () => {
  return (
    <section id="location" className="mb-6">
      <h1 className="stroke bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
        LOCATION
      </h1>
      <div className="relative mx-auto flex flex-col items-center md:max-w-2xl lg:max-w-4xl">
        <div className="relative flex w-full flex-col items-center justify-start gap-8 lg:w-4/5">
          <div
            style={{ backgroundImage: `url(${LocationBg})` }}
            className="relative aspect-square w-full rounded bg-cover bg-center lg:aspect-video"
          >
            <a
              href={getDirections}
              target="_blank"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className=" flex h-10 w-10 ">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              </span>
            </a>
          </div>

          <button>
            <a
              target="_blank"
              href={getDirections}
              className="mx-auto rounded bg-primary px-8 py-4 font-bold tracking-[0.3rem] text-black md:w-max md:font-bold md:tracking-[0.4rem]"
            >
              GET DIRECTIONS
            </a>
          </button>

          <div className="mt-4 w-4/5">
            <table className="mx-auto w-full md:w-4/5">
              <caption className="mb-4 text-center text-2xl font-semibold tracking-[0.4rem] text-primary md:font-bold">
                <span className="text-white">TIMIN</span>
                <span className="text-gray-500">GS</span>
              </caption>
              <tbody className="lg:text-lg">
                <tr>
                  <th
                    rowSpan={2}
                    className="text-left align-top font-semibold tracking-widest text-primary md:tracking-[0.3rem]"
                  >
                    MONDAY - SATURDAY
                  </th>
                  <td>
                    <p className="flex justify-between font-medium">
                      <time>
                        5{" "}
                        <span className="tracking-wide text-gray-500">AM</span>{" "}
                      </time>{" "}
                      <span className="text-primary">-</span>{" "}
                      <time>
                        {" "}
                        11{" "}
                        <span className="tracking-wide text-gray-500">AM</span>
                      </time>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <p className="flex justify-between font-medium">
                      <time>
                        5{" "}
                        <span className="tracking-wide text-gray-500">PM</span>
                      </time>{" "}
                      <span className="text-primary">-</span>{" "}
                      <time>
                        9{" "}
                        <span className="tracking-wide text-gray-500">PM</span>
                      </time>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="text-left align-top font-semibold tracking-widest text-primary md:tracking-[0.3rem]">
                    SUNDAY
                  </th>
                  <td>
                    <p className="flex justify-between font-medium">
                      <time>
                        5{" "}
                        <span className="tracking-wide text-gray-500">AM</span>{" "}
                      </time>{" "}
                      <span className="text-primary">-</span>{" "}
                      <time>
                        {" "}
                        11{" "}
                        <span className="tracking-wide text-gray-500">AM</span>
                      </time>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
