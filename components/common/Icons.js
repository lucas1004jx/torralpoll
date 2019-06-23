import React from 'react';

const Icons = (props) =>{
  switch (props.name) {
  case 'polygon':
    return <Polygon className={props.className} style={props.style} />;
  case 'logo':
    return <Logo className={props.className} style={props.style} {...props} />;
  case 'panelUser':
    return <PanelUser className={props.className} />;
  case 'panelGraphic':
    return <PanelGraphic className={props.className} />;
  case 'pen':
    return <Pen className={props.className} />;
  case 'triangle':
    return <Triangle className={props.className} onClick={props.onClick} style={props.style} />;
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

const PanelUser = ({
  style = {},
  width = '24',
  height = '23',
  viewBox = '0 0 24 23',
  className = '',
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  > 
    <g id="User" strokeWidth="1" transform="translate(0.000000, 1.000000)">
      <path d="M23,17.925 C23,13.825 19.73,10.5 15.696,10.5 C11.662,10.5 8.391,13.824 8.391,17.925 C8.391,22.025 23,22.025 23,17.925 Z" id="Path" strokeWidth="1.05" fill="none" />
      <ellipse id="Oval" strokeWidth="1.05" cx="15.696" cy="4.2" rx="4.174" ry="4.2" fill="none" />
      <polygon id="plus" points="3.522 6.694 3.522 3.15 5.87 3.15 5.87 6.694 9.39 6.694 9.39 9.056 5.87 9.056 5.87 12.6 3.522 12.6 3.522 9.056 0 9.056 0 6.694" />
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
			svg:hover #plus{
				fill:#3BBA90;
				animation:scale 1s infinite ease forwards;
			}
			@keyframes scale{
				0%{transform:scale(0.9)}
				50%{transform:scale(1)}
				100%{transform:scale(0.9)}
			}
			`}
    </style>
  </svg>
);

const PanelGraphic = ({
  style = {},
  width = '26',
  height = '26',
  viewBox = '0 0 26 26',
  className = '',
}) =>(
  <svg 
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  >
    <defs>
      <path d="M14.23,0.5 L14.23,11.493 L23.5,11.493 L23.5,21.5 C23.5,22.6045695 22.6045695,23.5 21.5,23.5 L2.5,23.5 C1.3954305,23.5 0.5,22.6045695 0.5,21.5 L0.5,2.5 C0.5,1.3954305 1.3954305,0.5 2.5,0.5 L14.23,0.5 Z" id="path-graphic" />
    </defs>
    <g strokeWidth="1" fillRule="evenodd">
      <g>
        <g id="Rectangle" fill="none">
          <mask id="mask-graphic" fill="white">
            <use xlinkHref="#path-graphic" />
          </mask>
          <g id="Mask" />
          <rect mask="url(#mask-graphic)" x="0.5" y="0.5" width="23" height="23" rx="2" />
        </g>
        <g id="columns" transform="translate(6.000000, 7.000000)" fillRule="nonzero">
          <polygon className="column" points="0 3 2 3 2 13 0 13" />
          <polygon className="column" points="5 0 7 0 7 13 5 13" />
          <polygon className="column" points="10 6 12 6 12 13 10 13" />
        </g>
        <g id="plus" transform="translate(14.000000, 0.000000)">
          <polygon className="plus" points="4 0 6 0 6 10 4 10" />
          <polygon className="plus" points="0 4 10 4 10 6 0 6" />
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
			svg:hover #columns{
				fill:#3BBA90;
			}
			svg:hover .plus{
				fill:#3BBA90;
			}
			svg:hover #plus{
				transform:translate(15px, 0px);
			}
			svg:hover .column{
				animation:move 2s infinite ease;
				animation-fill-mode: forwards;
			}
			svg:hover .column:nth-of-type(1){
				animation-delay: 0s;
			}
			svg:hover .column:nth-of-type(2){
				animation-delay: 0.5s;
			}
			svg:hover .column:nth-of-type(3){
				animation-delay: 1s;
			}
			@keyframes move{
				0%{transform:translateY(0px);}
				25%{transform:translateY(-2px);}
				50%{transform:translateY(0px);}
				75%{transform:translateY(0px);}
				100%{transform:translateY(0px);}
			}
			`}
    </style>
  </svg>
);

const Pen = ({
  style = {},
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  className = '',
}) => (
  <svg 
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  >
    <g id="Page-1" strokeWidth="1" fillRule="evenodd">
      <g id="pen">
        <rect id="container" strokeOpacity="0.0110394022" stroke="#FFFFFF" x="0.5" y="0.5" width="23" height="23" fill="none" />
        <rect id="Rectangle" fill="none" transform="translate(11.598076, 10.160254) rotate(-360.000000) translate(-11.598076, -10.160254) " x="9.09807621" y="0.660254038" width="5" height="19" rx="1" />
        <polygon id="Triangle" stroke="none" transform="translate(11.584818, 21.424427) rotate(-180.000000) translate(-11.584818, -21.424427) " points="11.6696367 19.8488535 14.2411589 23 8.92847781 23" />
        <path d="M13.5,4.5 L11.5,4.5" id="Line" strokeLinecap="square" />
      </g>
    </g>
    <style jsx>
      {`
			svg{
				stroke:#979797;
				fill:#979797;
			}
			svg:hover{
				stroke:#3BBA90;
				fill:#3BBA90;
				transform:scale(1.1);
			}
			`}
    </style>
  </svg>
);

const Triangle = ({
  style = {},
  width = '10',
  height = '10',
  viewBox = '0 0 10 10',
  className= '',
  onClick,
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={onClick}
  >
    <polygon id="Triangle" transform="translate(5.000000, 5.000000) rotate(-90.000000) translate(-5.000000, -5.000000) " points="5 0 10 10 -1.13686838e-13 10" />
    <style jsx>
      {`
			svg{
				width:10px;
				height:10px;
				fill:#3BBA90;
				cursor:pointer;
				transition:transform 0.3s ease;
				vertical-algin:center;
			}
		
			.left{
				transform: rotate(0deg);
			}
			.left:hover{
				transform:rotate(0deg) translateX(-2px);
			}
			.right{
				transform: rotate(180deg);
			}
			.right:hover{
				transform:rotate(180deg) translateX(-2px);
			}
			.gris{
				fill:#979797;
				cursor:not-allowed;
			}
			.right.gris:hover{
				transform:rotate(180deg) translateX(0);
			}
			`}
    </style>
  </svg>
);


