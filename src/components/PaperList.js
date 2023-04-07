// src/components/CSVList.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PaperList = () => {
  const data = useStaticQuery(graphql`
    query CSVListQuery {
      allDataCsv {
        nodes {
          id
          letter
          value
        }
      }
    }
  `);

  return (
    <div>
      <h2>CSV Data List</h2>
      <ul>
        {data.allDataCsv.nodes.map((row) => (
          <li key={row.id}>
            {row.letter} - {row.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaperList;
