import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';
import { Layout, Button } from '../../common';
import { LoginContext } from '../../../context';
import Error from '../../../pages/_error';

const ResultPage = (props) => {
  const { name = '', description = '', options = [], active } = props;
  const { userProfile: { rol='' } } = useContext(LoginContext);
  console.log('rol', rol);
  if(active && rol === 'User') return <Error statusCode='401' />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(!active || (active && rol=== 'Admin')) {
      drawResult();
    }
    
  }, [rol]);
  

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

    options.map(({ name, votesCount }) => data.push({
      name,
      votesCount,
      'fill': getRandomColor()
    }));

    const height = 50 * data.length*1.4;
    const width = '80%';
    const factorX = 0;
    const GfactorY = 30;
    const TfactorY = 15;

    const calcPercetage = (votesCount) => {
      const total = options.reduce((total, option) => total + option.votesCount, 0);

      return total !== 0 ? (votesCount / total).toFixed(2) * 100 : 0;
    };

    const svg = d3.select('#graphic').append('svg').attr('width', width).attr('height', height);
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', factorX)
      .attr('y', (d, i) => GfactorY * (i+i) + 25)
      .attr('width', (d) => `${calcPercetage(d.votesCount)}%`)
      .attr('height', 25)
      .attr('fill', (d) => d.fill);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => `${d.name} ${d.votesCount} votes`)
      .attr('x', 10)
      .attr('y', (d, i) => TfactorY * (i+i+i+i) + 20)
      .attr('fill', '#263C47');
  };
  return (
    <Layout title='results' className='result-page'>
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