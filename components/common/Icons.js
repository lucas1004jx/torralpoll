import React from 'react';

const Icons = (props) =>{
  switch (props.name) {
  case 'polygon':
    return <Polygon {...props} />;
  case 'logo':
    return <Logo {...props} />;
  case 'close':
    return <Close {...props} />;
  default:
    return <div>{props.name}</div>;
  }
};



export default Icons;

const Styles=`
cursor:pointer;
transition:all 0.2s ease;
`;

const Polygon = ({
  style = {},
  width = '50',
  height = '57',
  viewBox = '0 0 50 57',
  className = '',
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  > 
    <title>Polygon</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
      <g id="Home" transform="translate(-23.000000, -13.000000)" strokeWidth="3">
        <g id="navbar" transform="translate(14.000000, 9.000000)">
          <g id="gs_icon" transform="translate(34.000000, 32.500000) rotate(-330.000000) translate(-34.000000, -32.500000) translate(8.000000, 10.000000)">
            <polygon id="Polygon" points="39 0 52 22.5 39 45 13 45 0 22.5 13 0" />
          </g>
        </g>
      </g>
    </g>
    <style jsx>
      {`
			svg{
				${Styles}
			}
			svg:hover{
				stroke:#3BBA90;
				transform:scale(1.1);
			}
			`}
    </style>
  </svg>
);

const Logo = ({
  style = {},
  width = '50',
  height = '57',
  viewBox = '0 0 50 57',
  className = '',
  
}) => (
  <svg 
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  >
    <title>gs_icon</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home" transform="translate(-23.000000, -13.000000)">
        <g id="navbar" transform="translate(14.000000, 9.000000)">
          <g id="gs_icon" transform="translate(34.000000, 32.500000) rotate(-330.000000) translate(-34.000000, -32.500000) translate(8.000000, 10.000000)">
            <polygon id="Polygon" stroke="#17AD8D" strokeWidth="3" points="39 0 52 22.5 39 45 13 45 0 22.5 13 0" />
            <circle id="Oval" fill="#17AD8D" cx="26" cy="23" r="4" />
            <g id="arrow" transform="translate(25.909903, 22.909903) rotate(-45.000000) translate(-25.909903, -22.909903) translate(6.409903, 11.909903)">
              <g transform="translate(19.500000, 11.000000) rotate(-23.000000) translate(-19.500000, -11.000000) translate(1.000000, 7.000000)">
                <path d="M0.701010127,4.00609665 L30.3218513,3.75" id="Line" stroke="#17AD8D" strokeLinecap="square" />
                <polygon id="Triangle" fill="#17AD8D" transform="translate(33.303990, 3.734325) rotate(-270.000000) translate(-33.303990, -3.734325) " points="33.3039897 0.976748951 36.6592529 6.49190047 29.9487266 6.49190047" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const Close = ({
  width = '70',
  height = '70',
  viewBox = '0 0 70 70',
  fill='#B85346',
  stroke='#FFFFFF',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  > 
    <title>close icon</title>
    <g id="close_icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Form" transform="translate(-1192.000000, -1114.000000)">
        <g id="CHOICES" transform="translate(84.000000, 1002.500000)">
          <g id="choice" transform="translate(0.000000, 98.000000)">
            <g id="x" transform="translate(1108.000000, 13.000000)">
              <circle id="Oval" fill={fill} cx="35" cy="35.5" r="35" />
              <path d="M19,19.5 L51,50.5 L19,19.5 Z" id="Line-5" stroke={stroke} strokeWidth="4" strokeLinecap="square" />
              <path d="M51,19.5 L19,50.5 L51,19.5 Z" id="Line-5-Copy" stroke={stroke} strokeWidth="4" strokeLinecap="square" />
            </g>
          </g>
        </g>
      </g>
    </g>
    <style jsx>
      {`
			svg{
				${Styles}
			}
			`}
    </style>
  </svg>
);




