import React from 'react';
import { MdFilterList } from "react-icons/md";

export default function ReviewsTable({ data, headers, serialize }) {

  // const filter_headers = ["Month", "Sentiment", "Platform"]

  return (
    <div className="block overflow-x-auto">
      <table className="table table-auto w-full text-nowrap">
        <thead>
          <tr>
            {serialize && <th className="text-right">#</th>}
            {headers.map(v => (
              <th key={v.key} className="relative text-white/60">
                <span>{v.val}</span>
                {/* {(filter_headers.includes(header)) && (
                  <MdFilterList className="inline-block ml-3" size={20} />
                )} */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {serialize && <td className="text-right">{i+1}</td>}
              {headers.map((v, j) => (
                <td key={j} className={v.key == "content" && "text-wrap min-w-[640px] max-w-[640px] border-b "}>
                  {row[v.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
