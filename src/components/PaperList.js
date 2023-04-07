// src/components/CSVList.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PaperList = () => {
  const data = useStaticQuery(graphql`
    query CSVListQuery {
      allPapersCsv(sort: { fields: Year, order: DESC }) {
        nodes {
          Year
          Authors
          Title
          URL
          Conference
        }
      }
    }
  `);

  return (
    <div>
      <h2>CSV Data List</h2>
      <ul>
        {data.allPapersCsv.nodes.map((row) => (
          <li key={row.id}>
            {row.Year},{" "}
            {row.URL ? <a href={row.URL}>{row.Title}</a> : row.Title},{" "}
            {row.Authors}, {row.Conference}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaperList;
