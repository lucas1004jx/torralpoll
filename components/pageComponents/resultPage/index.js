import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';
import { Layout, Button } from '../../common';
import { LoginContext } from '../../context';

const ResultPage = (props) => {
  const { name = '', description = '', options = [] } = props;
  const { loginState } = useContext(LoginContext);
  if(!loginState) return(
    <Layout>
      <div>YOU NEED TO LOG IN TO SEE POLL RESULT</div>
    </Layout>
  );
  useEffect(() => {
    drawResult();
  });

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const drawResult = () => {
    let data = [];

    options.map(({ name, votes }) => data.push({
      'name': name,
      'votes': votes.length,
      'fill': getRandomColor()
    }));

    const height = 50 * data.length;
    const width = '80%';
    const factorX = 0;
    const factorY = 40;

    const calcPercetage = (votes) => {
      const total = options.reduce((total, option) => total + option.votes.length, 0);

      return total !== 0 ? (votes / total).toFixed(2) * 100 : 0;
    };

    const svg = d3.select('#graphic').append('svg').attr('width', width).attr('height', height);
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', factorX)
      .attr('y', (d, i) => factorY * i)
      .attr('width', (d) => `${calcPercetage(d.votes)}%`)
      .attr('height', 25)
      .attr('fill', (d) => d.fill);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => `${d.name} ${d.votes} votes`)
      .attr('x', (d) => `${calcPercetage(d.votes) + 1}%`)
      .attr('y', (d, i) => factorY * i + 20)
      .attr('fill', '#263C47');
  };
  return (
    <Layout title='results' classnames='result-page'>
      <h2>{name}</h2>
      <p>{description}</p>
      <div id="graphic" />
      <Link href="/polls">
        <a>
          <Button name="Back to list" className="button" />
        </a>
      </Link>
      <style jsx>{`
        
      `}
      </style>
    </Layout>
  );
};

export default ResultPage;