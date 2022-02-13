import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";

{
  /*interface Props {
  allData: any;
}*/
}

const coinNames = ["BCH", "BNB", "BTC", "ETH", "LTC"];

const CoinTables = (/*{ allData }: Props*/) => {
  const allCoinData = useSelector(selectCount);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Last Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                  >
                    24h Change
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Markets
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allCoinData.length > 0 ?
                  allCoinData.map((data: any) =>
                    coinNames.map((names: any) => (
                      <tr key={data[0][names].id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                //src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {data[0][names].symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {data[0][names].quote.USD.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {data[0][names].quote.USD.percent_change_24h}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data[0][names].quote.USD.fully_diluted_market_cap}
                        </td>
                      </tr>
                    ))
                  )
                :<tr><td><div>Loading...</div></td></tr> 
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTables;
