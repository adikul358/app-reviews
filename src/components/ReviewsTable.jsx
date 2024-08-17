import React from 'react';
import { MdFilterList } from "react-icons/md";

export default function ReviewsTable({ data }) {

  const headers = data.length ? Object.keys(data[0]) : [];
  const filter_headers = ["Month", "Sentiment", "Platform"]

  return (
    <div className="block overflow-x-auto">
      <table className="table table-auto w-full text-nowrap">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} className="relative text-white/60">
                <span>{header}</span>
                {(filter_headers.includes(header)) && (
                  <MdFilterList className="inline-block ml-3" size={20} />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map(header => (
                <td key={header} className={header == "Review Content" && "text-wrap min-w-[640px] border-b "}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
