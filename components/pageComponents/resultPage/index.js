import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';
import { Layout, Button } from '../../common';
import { LoginContext } from '../../../context';
import Error from '../../../pages/_error';

const ResultPage = (props) => {
  const { name = '', description = '', options = [], active } = props;
  const { userProfile: { rol = '' } } = useContext(LoginContext);
  console.log('rol', rol);
  if (active && rol === 'User') return <Error statusCode='401' />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (rol) {
      if (!active || (active && rol === 'Admin')) {
        drawResult();
      }
    }

  }, [rol]);

  const brandColor = '#17AD8D';
  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const formatLongText = (text) => {
    const limit = 80;
    const longText = text.length >= limit;
    return longText ? `${text.substr(0, limit)}...` : text;
  };

  const drawResult = () => {
    let data = [];

    options.sort((a, b) => b.votesCount - a.votesCount).map(({ name, votesCount }) => data.push({
      name,
      votesCount,
      'fill': getRandomColor()
    }));

    const height = 60 * (data.length + 1);
    const factorX = 50;
    const GfactorY = 30;
    const TfactorY = 15;
    const radius = 20;

    const calcPercetage = (votesCount) => {
      const total = options.reduce((total, option) => total + option.votesCount, 0);

      return total !== 0 ? (votesCount / total).toFixed(2) * 100 : 0;
    };

    const svg = d3
      .select('#graphic')
      .append('svg')
      .attr('height', height)
      .style('background', '#fff');

    svg
      .append('g')
      .attr('class', 'bars')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', factorX)
      .attr('y', (d, i) => GfactorY * (i + i) + 25)
      .style('height', 25)
      .style('fill', '#fff')
      .style('cursor', 'pointer')
      .append('title')
      .text(d => d.name);

    svg
      .selectAll('.bar')
      .data(data)
      .transition()
      .duration(2000)
      .delay((d, i) => i * 100)
      .style('width', (d) => `${calcPercetage(d.votesCount) !== 0 ? calcPercetage(d.votesCount) : 100}%`)
      .style('fill', (d) => calcPercetage(d.votesCount) !== 0 ? d.fill : '#F1F1F1');

    svg
      .append('g')
      .attr('class', 'votes')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => `${d.votesCount} votes:  ${formatLongText(d.name)}`)
      .attr('y', (d, i) => TfactorY * (i + i + i + i) + 20)
      .style('opacity', 0)
      .transition()
      .duration(2000)
      .delay((d, i) => i * 400)
      .attr('x', factorX)
      .style('opacity', 1)
      .style('fill', '#263C47')
      .style('font-weight', 'bolder');

    svg
      .append('g')
      .attr('class', 'circles')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', radius)
      .attr('cy', (d, i) => TfactorY * (i + i + i + i) + 40)
      .style('transform', `translateY(-${radius / 2}px)`)
      .style('fill', brandColor)
      .transition()
      .duration(2000)
      .delay((d, i) => i * 100)
      .attr('r', radius);


    svg
      .append('g')
      .attr('class', 'positions')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d, i) => i + 1)
      .style('fill', '#fff')
      .attr('x', radius)
      .attr('y', (d, i) => TfactorY * (i + i + i + i) + 40)
      .style('transform', `translateY(-${radius / 2}px)`)
      .style('transform', `translateX(-${radius / 2}px)`)
      .style('font-size', '30px')
      .style('font-family', 'Chalkduster');

  };


  return (
    <Layout pageTitle='Results' className='result-page' title="Result">
      <h2>{name}</h2>
      <p>{description}</p>
      <div id="graphic" />
      <Link href="/polls">
        <a>
          <Button name="Back to list" className="button" />
        </a>
      </Link>
      <style jsx global>{`
          #graphic svg{
          width:calc(100% - 10px);
          }
      `}
      </style>
    </Layout>
  );
};

export default ResultPage;
