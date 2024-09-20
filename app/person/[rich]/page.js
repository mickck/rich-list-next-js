import style from "./rich.module.css";

export default async function RichPerson({ params }) {
  async function getRich() {
    const response = await fetch(
      `https://billions-api.nomadcoders.workers.dev/person/${params.rich}`
    );
    const json = await response.json();
    return json;
  }
  const rich = await getRich();

  return (
    <div className={style.container}>
      <h1 className="mb-3 font-semibold text-xl ">{rich.name}</h1>
      <div className="md:flex justify-between">
        <div className="md:w-[40%]">
          <img
            src={rich.squareImage}
            height={300}
            width={300}
            className="rounded-md mb-4 w-64 md:w-max"
          ></img>
        </div>
        <div className="md:w-[55%] md:text-lg">
          <p className="mb-1">
            <b>Where: </b>
            {rich.city} {rich.state} {rich.country}
          </p>
          <p className="mb-1">
            <b>Industries:</b>{" "}
            {rich.industries.map((element, index) => (
              <span className="text-black" key={index}>
                {element}
              </span>
            ))}
          </p>
          <p className="font-bold md:text-lg">Story</p>
          <p className="text-sm mb-1">{rich.bio}</p>
        </div>
      </div>
      <p className="font-bold my-2">Assets</p>
      <div className="flex flex-wrap justify-between">
        {rich.financialAssets.map((element, index) => (
          <div
            className="text-sm p-2 md:p-3 bg-gray-200 rounded-md mb-4 w-[100%] md:w-[48%] flex flex-col gap-1"
            key={index}
          >
            <b className="text-md mb-1">{element.exchange}</b>
            <p>
              <b>Ticker</b>: {element.ticker}
            </p>
            <p>
              <b>Company Name</b>: {element.companyName}
            </p>
            <p>
              <b>Number of Shares</b>: {element.numberOfShares}
            </p>
            <p>
              <b>Currency Code</b>: {element.currencyCode}
            </p>
            <p>
              <b>Exchange Rate</b>: {element.exchangeRate}
            </p>
            <p>
              <b>Interactive</b>: {element.interactive}
            </p>
            <p>
              <b>CurrentPrice</b>: {element.currentPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
