import React from 'react';

const Icons = (props) =>{
  switch (props.name) {
  case 'polygon':
    return <Polygon {...props} />;
  case 'logo':
    return <Logo {...props} />;
  case 'close':
    return <Close {...props} />;
  case 'clock':
    return <Clock {...props} />;
  case 'group':
    return <Group {...props} />;
  case 'result':
    return <Result {...props} />;
  case 'powerOff':
    return <PowerOff {...props} />;
  case 'delete':
    return <Delete {...props} />;
  case 'bcgHome':
    return <BcgHome {...props} />;
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

const Clock = ({
  width = '18',
  height = '18',
  viewBox = '0 0 12 12',
  stroke='#17AD8D',
  ...props
}) => (
  <svg 
    width={width}
    height={height}
    viewBox={viewBox}
    stroke={stroke}
    {...props}
  >
    <title>clock</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="poll-list" transform="translate(-43.000000, -573.000000)" stroke={stroke}>
        <g id="card" transform="translate(29.000000, 253.000000)">
          <g id="date" transform="translate(15.000000, 320.000000)">
            <g id="clock" transform="translate(0.000000, 1.000000)">
              <circle id="椭圆形" cx="5" cy="5" r="5" />
              <path d="M4.5,3 C4.5,4.12781913 4.5,4.87379542 4.5,5.23792887 C4.5,5.60206232 4.5,5.85608603 4.5,6" id="直线-2" strokeLinecap="square" />
              <path d="M6,5 C6,5.75187942 6,6.24919695 6,6.49195258 C6,6.73470822 6,6.90405736 6,7" id="直线-2备份" strokeLinecap="square" transform="translate(6.000000, 6.000000) rotate(-270.000000) translate(-6.000000, -6.000000) " />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const Group = ({
  width = '14',
  height = '14',
  viewBox = '0 0 12 12',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  >
    <title>group</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="poll-list" transform="translate(-134.000000, -573.000000)" stroke="#079AE0">
        <g id="card" transform="translate(29.000000, 253.000000)">
          <g id="participants" transform="translate(106.000000, 319.000000)">
            <g id="group" transform="translate(0.000000, 2.000000)">
              <g id="group_back" transform="translate(4.000000, 1.000000)" fill="#E6F7FF">
                <path d="M3,7.99342771 C4.65685425,7.99342771 6,8.15840051 6,6.83528073 C6,5.51216095 4.65685425,5 3,5 C1.34314575,5 0,5.51216095 0,6.83528073 C0,8.15840051 1.34314575,7.99342771 3,7.99342771 Z" id="椭圆形" />
                <circle id="椭圆形" cx="3.5" cy="2.5" r="2.5" />
              </g>
              <g id="group_front" fill="#FFFFFF">
                <path d="M4,9.75001398 C6.209139,9.75001398 8,9.94562045 8,8.37681159 C8,6.80800274 6.209139,5.53623188 4,5.53623188 C1.790861,5.53623188 0,6.80800274 0,8.37681159 C0,9.94562045 1.790861,9.75001398 4,9.75001398 Z" id="椭圆形" />
                <ellipse id="椭圆形" cx="3.75438596" cy="3.04347826" rx="3.15789474" ry="3.04347826" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const Result = ({
  width = '10',
  height = '10',
  viewBox = '0 0 10 10',
  ...props
}) => (
  <svg 
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  >
    <title>result</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="poll-list" transform="translate(-395.000000, -267.000000)" fill="#000000" fillRule="nonzero">
        <g id="result" transform="translate(395.000000, 267.000000)">
          <path d="M3.47177419,5.08064516 L2.50403226,5.08064516 C2.23790323,5.08064516 2.02016129,5.2983871 2.02016129,5.56451613 L2.02016129,7.5 C2.02016129,7.76612903 2.23790323,7.98387097 2.50403226,7.98387097 L3.47177419,7.98387097 C3.73790323,7.98387097 3.95564516,7.76612903 3.95564516,7.5 L3.95564516,5.56451613 C3.95564516,5.2983871 3.73790323,5.08064516 3.47177419,5.08064516 Z" id="路径" />
          <path d="M5.16532258,3.70967742 C4.89919355,3.70967742 4.68145161,3.92741935 4.68145161,4.19354839 L4.68145161,7.5 C4.68145161,7.76612903 4.89919355,7.98387097 5.16532258,7.98387097 L6.13306452,7.98387097 C6.39919355,7.98387097 6.61693548,7.76612903 6.61693548,7.5 L6.61693548,4.19354839 C6.61693548,3.92741935 6.39919355,3.70967742 6.13306452,3.70967742 L5.16532258,3.70967742 Z" id="路径" />
          <path d="M8.79435484,3.70967742 L7.8266129,3.70967742 C7.56048387,3.70967742 7.34274194,3.92741935 7.34274194,4.19354839 L7.34274194,7.5 C7.34274194,7.76612903 7.56048387,7.98387097 7.8266129,7.98387097 L8.79435484,7.98387097 C9.06048387,7.98387097 9.27822581,7.76612903 9.27822581,7.5 L9.27822581,4.19354839 C9.27822581,3.92741935 9.06048387,3.70967742 8.79435484,3.70967742 Z" id="路径" />
          <path d="M0.528225806,10 L9.55241935,10 C9.81854839,10 9.99596774,9.74193548 9.99596774,9.47580645 L9.99596774,9.31451613 C9.99596774,9.0483871 9.81854839,8.7983871 9.55241935,8.7983871 L1.6733871,8.7983871 C1.40725806,8.7983871 1.21370968,8.61290323 1.21370968,8.33879032 L1.21370968,0.443548387 C1.21370968,0.177419355 0.963709677,0 0.697580645,0 L0.536290323,0 C0.262096774,0 0.00403225806,0.177419355 0.00403225806,0.443548387 L0.00403225806,9.46774194 C0.00403225806,9.74193548 0.262096774,10 0.528225806,10 Z" id="路径" />
        </g>
      </g>
    </g>
  </svg>
);

const PowerOff = ({
  width = '12',
  height = '12',
  viewBox = '0 0 12 12',
  ...props
}) => (
  <svg 
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  >
    <title>close poll</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="poll-list" transform="translate(-421.000000, -266.000000)" fill="#000000" fillRule="nonzero">
        <g id="powerOff" transform="translate(421.000000, 266.000000)">
          <path d="M8.50073446,2.75497175 C8.33525424,2.58949153 8.06700565,2.58949153 7.90146893,2.75497175 C7.7359887,2.92045198 7.7359887,3.18870056 7.90146893,3.35418079 C8.67903955,4.13175141 9.10723164,5.16559322 9.10723164,6.26525424 C9.10723164,7.36485876 8.67903955,8.39864407 7.90146893,9.17615819 C7.09903955,9.97864407 6.04514124,10.3798305 4.99096045,10.3797175 C3.93677966,10.379661 2.88237288,9.97836158 2.07983051,9.17581921 C0.475028249,7.57101695 0.47519774,4.95971751 2.08011299,3.35480226 C2.24559322,3.18932203 2.24559322,2.92101695 2.08011299,2.75559322 C1.91463277,2.59011299 1.64638418,2.59011299 1.48084746,2.75559322 C-0.454463277,4.69090395 -0.454632768,7.83988701 1.48056497,9.77508475 C2.44847458,10.7429944 3.71966102,11.2268362 4.99101695,11.2268362 C6.2620339,11.2268362 7.53322034,10.7429944 8.50079096,9.77542373 C9.43836158,8.8379096 9.95468927,7.59129944 9.95468927,6.26531073 C9.95468927,4.93926554 9.43836158,3.69259887 8.50073446,2.75497175 Z" id="路径" />
          <path d="M4.99050847,5.48949153 C5.22457627,5.48949153 5.41423729,5.29977401 5.41423729,5.06576271 L5.41423729,0.423728814 C5.41423729,0.189717514 5.22457627,0 4.99050847,0 C4.75644068,0 4.56677966,0.189717514 4.56677966,0.423728814 L4.56677966,5.06576271 C4.56677966,5.29983051 4.75644068,5.48949153 4.99050847,5.48949153 Z" id="路径" />
        </g>
      </g>
    </g>
  </svg>
);

const Delete = ({
  width = '10',
  height = '12',
  viewBox = '0 0 10 12',
  ...props
}) => (
  <svg 
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  > 
    <title>delete</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="poll-list" transform="translate(-445.000000, -266.000000)" fill="#000000" fillRule="nonzero">
        <g id="delete" transform="translate(445.000000, 266.000000)">
          <polygon id="路径" points="7.77777778 4.48677699 7.23381441 4.44444444 6.66666667 9.95769042 7.21063004 10" />
          <rect id="矩形" x="5.29239766" y="4.44444444" width="1" height="5.55555556" />
          <polygon id="路径" points="3.33333333 9.95769042 2.76618614 4.44444444 2.22222222 4.48677699 2.78939576 10" />
          <path d="M9.74994331,1.48771622 L7.02793204,1.48771622 C6.97360231,0.660304947 6.08466464,0 5,0 C3.91509411,0 3.02615644,0.660304947 2.9718267,1.48771622 L0.250032569,1.48771622 C0.111843978,1.48771622 0,1.59344075 0,1.72411945 L0,2.89990842 C0,3.03056431 0.111843978,3.13631164 0.250032569,3.13631164 L0.697239606,3.13631164 L1.44354967,10.8961721 C1.45527447,11.0178409 1.56321018,11.1111111 1.69261724,11.1111111 L8.30711739,11.1111111 C8.43654857,11.1111111 8.54448428,11.0178409 8.55618495,10.8961721 L9.30251914,3.13631164 L9.74996743,3.13631164 C9.88818015,3.13631164 10,3.03056431 10,2.89990842 L10,1.72411945 C10,1.59341794 9.88818015,1.48771622 9.74994331,1.48771622 Z M8.07882154,10.6383047 L1.92093721,10.6383047 L1.19940363,3.13679065 L8.80037925,3.13679065 L8.07882154,10.6383047 Z M5,0.472806444 C5.80626095,0.472806444 6.46871215,0.921160529 6.52634703,1.48769341 L3.47341172,1.48769341 C3.5310466,0.921160529 4.19373905,0.472806444 5,0.472806444 Z M9.49991074,2.6635052 L0.500065138,2.6635052 L0.500065138,1.96052267 L9.49991074,1.96052267 L9.49991074,2.6635052 Z" id="形状" />
        </g>
      </g>
    </g>
  </svg>
);

const BcgHome = ({
  width = '975',
  height = '1039',
  viewBox = '0 0 975 1039',
  ...props
}) => (
  <svg 
    width={width} 
    height={height}
    viewBox={viewBox}
    {...props}
  >
    <title>bcg-home</title>
    <defs>
      <linearGradient x1="15.995641%" y1="2.33387792%" x2="86.9463608%" y2="97.8129165%" id="linearGradient-1">
        <stop stopColor="#17AD8D" stopOpacity="0.112625656" offset="0%" />
        <stop stopColor="#54C6FF" stopOpacity="0.253059441" offset="100%" />
      </linearGradient>
      <linearGradient x1="49.9989355%" y1="100.007923%" x2="49.9989355%" y2="0.00158453494%" id="linearGradient-2">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="50.0210463%" y1="100.023697%" x2="50.0210463%" y2="0.0296208531%" id="linearGradient-3">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="50.0196464%" y1="99.9904943%" x2="50.0196464%" y2="2.70168341e-14%" id="linearGradient-4">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="50.0210463%" y1="100.017773%" x2="50.0210463%" y2="0.0236966825%" id="linearGradient-5">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="42.8836346%" y1="93.5579874%" x2="57.1028893%" y2="6.44539069%" id="linearGradient-6">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="44.8740994%" y1="67.8464748%" x2="55.1081951%" y2="32.1467184%" id="linearGradient-7">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="50.0053619%" y1="100.013063%" x2="50.0053619%" y2="0.0326583932%" id="linearGradient-8">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="49.9534384%" y1="99.9808978%" x2="49.9534384%" y2="-0.0525310411%" id="linearGradient-9">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
      <linearGradient x1="49.9625468%" y1="100.082372%" x2="49.9625468%" y2="-0.00939044481%" id="linearGradient-10">
        <stop stopColor="#808080" stopOpacity="0.25" offset="0%" />
        <stop stopColor="#808080" stopOpacity="0.12" offset="54%" />
        <stop stopColor="#808080" stopOpacity="0.1" offset="100%" />
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="new-home-page" transform="translate(-465.000000, 0.000000)">
        <g id="bcg-home" transform="translate(465.893398, 0.000000)">
          <path d="M0,0 C41.7377348,101.666667 110.606602,168.5 206.606602,200.5 C350.606602,248.5 130.106602,739.886687 390.106602,819 C650.106602,898.113313 686.106602,809.588642 801.106602,930.268832 C877.773269,1010.72229 935.439936,1046.36204 974.106602,1037.18809 L974.106602,0 L0,0 Z" id="路径-2" fill="url(#linearGradient-1)" />
          <g id="secure_data" transform="translate(40.106602, 56.000000)" fillRule="nonzero">
            <g id="编组" opacity="0.5" transform="translate(162.000000, 86.000000)" fill="url(#linearGradient-2)">
              <rect id="矩形" x="0.9" y="0.1" width="469.7" height="631.1" />
            </g>
            <rect id="矩形" fill="#F2F2F2" x="169" y="94.7" width="455" height="609.1" />
            <rect id="矩形" fill="#E0E0E0" x="204.5" y="120.4" width="156.6" height="4.9" />
            <rect id="矩形" fill="#17AD8D" opacity="0.7" x="204.5" y="142.4" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="384.3" y="120.4" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="408.8" y="259.8" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="412.4" y="273.2" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="419.8" y="286.7" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="408.8" y="476.3" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="412.4" y="489.8" width="156.6" height="4.9" />
            <rect id="矩形" fill="#E0E0E0" x="419.8" y="503.2" width="156.6" height="4.9" />
            <g id="编组" opacity="0.5" transform="translate(205.000000, 209.000000)" fill="url(#linearGradient-3)">
              <rect id="矩形" x="0.7" y="0.6" width="166.3" height="168.8" />
            </g>
            <rect id="矩形" fill="#F5F5F5" x="206.8" y="213.3" width="163.7" height="161.5" />
            <g id="编组" opacity="0.5" transform="translate(212.000000, 223.000000)" fill="url(#linearGradient-4)">
              <rect id="矩形" x="0.5" y="0.1" width="152.7" height="105.2" />
            </g>
            <rect id="_x36_89f37f3-cc41-448d-b172-63ec123bc985" fill="#FFFFFF" x="213.6" y="224.3" width="150.6" height="101.5" />
            <g id="编组" transform="translate(195.000000, 228.000000)" fill="#17AD8D" opacity="0.4">
              <polygon id="路径" points="5.8 94.2 43.7 35.5 59.6 61.1 93.9 25.7 123.2 61.1 148.9 8.6 215 113.8 0.9 106.4" />
              <circle id="椭圆形" cx="35.2" cy="11" r="11" />
            </g>
            <g id="编组" opacity="0.5" transform="translate(205.000000, 426.000000)" fill="url(#linearGradient-5)">
              <rect id="矩形" x="0.7" y="0.1" width="166.3" height="168.8" />
            </g>
            <rect id="矩形" fill="#F5F5F5" x="206.8" y="429.8" width="163.7" height="161.5" />
            <g id="编组" opacity="0.5" transform="translate(212.000000, 439.000000)" fill="url(#linearGradient-4)">
              <rect id="矩形" x="0.5" y="0.6" width="152.7" height="105.2" />
            </g>
            <rect id="b429ac3a-f8a8-4171-bcce-5b6c002c0714" fill="#FFFFFF" x="213.6" y="440.8" width="150.6" height="101.5" />
            <g id="编组" transform="translate(195.000000, 444.000000)" fill="#BDBDBD" opacity="0.4">
              <polygon id="路径" points="5.8 94.7 43.7 36 59.6 61.6 93.9 26.2 123.2 61.6 148.9 9 215 114.2 0.9 106.9" />
              <circle id="椭圆形" cx="35.2" cy="11.5" r="11" />
            </g>
            <g id="编组" opacity="0.5" transform="translate(231.000000, 54.000000)" fill="url(#linearGradient-6)">
              <polygon id="路径" points="0.9 620 123.9 0.9 584.6 92.5 461.5 711.5" />
            </g>
            <rect id="矩形" fill="#FFFFFF" transform="translate(522.976835, 407.614780) rotate(-78.760860) translate(-522.976835, -407.614780) " x="218.433741" y="180.119939" width="609.086189" height="454.989683" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(544.070905, 132.411465) rotate(-78.760860) translate(-544.070905, -132.411465) " x="541.620961" y="-29.0348741" width="4.89988889" height="322.892678" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(453.855135, 585.852505) rotate(-78.760860) translate(-453.855135, -585.852505) " x="451.405191" y="424.406166" width="4.89988889" height="322.892678" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(412.431985, 606.331855) rotate(-78.760860) translate(-412.431985, -606.331855) " x="409.982041" y="481.584684" width="4.89988889" height="249.494343" />
            <rect id="矩形" fill="#17AD8D" opacity="0.7" transform="translate(330.189295, 618.707010) rotate(-78.760860) translate(-330.189295, -618.707010) " x="327.739351" y="572.208064" width="4.89988889" height="92.9978912" />
            <rect id="矩形" fill="#17AD8D" opacity="0.7" transform="translate(459.434895, 144.327235) rotate(-78.760860) translate(-459.434895, -144.327235) " x="456.984951" y="63.579066" width="4.89988889" height="161.496338" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(517.415465, 184.530745) rotate(-78.760860) translate(-517.415465, -184.530745) " x="514.965521" y="38.9840454" width="4.89988889" height="291.093399" />
            <rect id="矩形" fill="#3AD29F" opacity="0.7" transform="translate(404.035165, 190.625745) rotate(-78.760860) translate(-404.035165, -190.625745) " x="401.585221" y="155.176549" width="4.89988889" height="70.8983923" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(522.068035, 242.738755) rotate(-78.760860) translate(-522.068035, -242.738755) " x="519.618091" y="81.2924159" width="4.89988889" height="322.892678" />
            <g id="编组" opacity="0.5" transform="translate(359.000000, 325.000000)" fill="url(#linearGradient-7)">
              <polygon id="路径" points="0.7 163.6 33.1 0.5 317.5 57 285 220.1" />
            </g>
            <rect id="矩形" fill="#FFFFFF" transform="translate(518.248285, 434.716130) rotate(-78.760860) translate(-518.248285, -434.716130) " x="436.90013" y="291.619375" width="162.696311" height="286.19351" />
            <rect id="矩形" fill="#E0E0E0" transform="translate(516.588765, 270.349095) rotate(-78.760860) translate(-516.588765, -270.349095) " x="514.138821" y="108.902756" width="4.89988889" height="322.892678" />
            <rect id="矩形" fill="#17AD8D" transform="translate(424.733650, 416.099975) rotate(-78.760860) translate(-424.733650, -416.099975) " x="365.434995" y="398.350377" width="118.597311" height="35.499195" />
            <rect id="矩形" fill="#3AD29F" transform="translate(483.295425, 447.717575) rotate(-78.760860) translate(-483.295425, -447.717575) " x="443.546326" y="429.967977" width="79.4981973" height="35.499195" />
            <rect id="矩形" fill="#F55F44" transform="translate(542.027930, 478.043465) rotate(-78.760860) translate(-542.027930, -478.043465) " x="520.628415" y="460.293867" width="42.7990295" height="35.499195" />
            <rect id="矩形" fill="#FDD835" transform="translate(608.775590, 468.943295) rotate(-78.760860) translate(-608.775590, -468.943295) " x="565.376574" y="451.193697" width="86.7980318" height="35.499195" />
            <g id="编组" opacity="0.5" transform="translate(120.000000, 645.000000)" fill="#47E6B1">
              <rect id="矩形" x="8.6" y="0.1" width="3.7" height="20.8" />
              <rect id="矩形" x="0.1" y="8.7" width="20.8" height="3.7" />
            </g>
            <path d="M558.5,8.3 C556.4,7.4 555.3,5.1 556,2.9 C556.1,2.7 556.1,2.6 556.1,2.4 L556.1,2.4 C556.1,1.2 555.2,0.1 553.9,0.1 C553.2,0.1 552.5,0.4 552.1,0.9 L552.1,0.9 C552,1 551.9,1.2 551.9,1.3 C551,3.4 548.7,4.5 546.5,3.8 C546.3,3.7 546.2,3.7 546,3.7 L546,3.7 C544.8,3.7 543.7,4.6 543.7,5.9 C543.7,6.6 544,7.3 544.5,7.7 L544.5,7.7 C544.6,7.8 544.8,7.9 544.9,7.9 C547,8.8 548.1,11.1 547.4,13.3 C547.3,13.5 547.3,13.6 547.3,13.8 L547.3,13.8 C547.3,15 548.2,16.1 549.5,16.1 C550.2,16.1 550.9,15.8 551.3,15.3 L551.3,15.3 C551.4,15.2 551.5,15 551.5,14.9 C552.4,12.8 554.7,11.7 556.9,12.4 C557.1,12.5 557.2,12.5 557.4,12.5 L557.4,12.5 C558.6,12.5 559.7,11.6 559.7,10.3 C559.7,9.6 559.4,8.9 558.9,8.5 L558.9,8.5 C558.8,8.5 558.7,8.4 558.5,8.3 Z" id="路径" fill="#4D8AF0" opacity="0.5" />
            <path d="M145.4,112.2 C143.3,111.3 142.2,109 142.9,106.8 C143,106.6 143,106.5 143,106.3 L143,106.3 C143,105.1 142.1,104 140.8,104 C140.1,104 139.4,104.3 139,104.8 L139,104.8 C138.9,104.9 138.8,105.1 138.8,105.2 C137.9,107.3 135.6,108.4 133.4,107.7 C133.2,107.6 133.1,107.6 132.9,107.6 L132.9,107.6 C131.7,107.6 130.6,108.5 130.6,109.8 C130.6,110.5 130.9,111.2 131.4,111.6 L131.4,111.6 C131.5,111.7 131.7,111.8 131.8,111.8 C133.9,112.7 135,115 134.3,117.2 C134.2,117.4 134.2,117.5 134.2,117.7 L134.2,117.7 C134.2,118.9 135.1,120 136.4,120 C137.1,120 137.8,119.7 138.2,119.2 L138.2,119.2 C138.3,119.1 138.4,118.9 138.4,118.8 C139.3,116.7 141.6,115.6 143.8,116.3 C144,116.4 144.1,116.4 144.3,116.4 L144.3,116.4 C145.5,116.4 146.6,115.5 146.6,114.2 C146.6,113.5 146.3,112.8 145.8,112.4 L145.8,112.4 C145.7,112.3 145.6,112.2 145.4,112.2 Z" id="路径" fill="#FDD835" opacity="0.5" />
            <path d="M112.7,417.2 C110.6,416.3 109.5,414 110.2,411.8 C110.3,411.6 110.3,411.5 110.3,411.3 L110.3,411.3 C110.3,410.1 109.4,409 108.1,409 C107.4,409 106.7,409.3 106.3,409.8 L106.3,409.8 C106.2,409.9 106.1,410.1 106.1,410.2 C105.2,412.3 102.9,413.4 100.7,412.7 C100.5,412.6 100.4,412.6 100.2,412.6 L100.2,412.6 C99,412.6 97.9,413.5 97.9,414.8 C97.9,415.5 98.2,416.2 98.7,416.6 L98.7,416.6 C98.8,416.7 99,416.8 99.1,416.8 C101.2,417.7 102.3,420 101.6,422.2 C101.5,422.4 101.5,422.5 101.5,422.7 L101.5,422.7 C101.5,423.9 102.4,425 103.7,425 C104.4,425 105.1,424.7 105.5,424.2 L105.5,424.2 C105.6,424.1 105.7,423.9 105.7,423.8 C106.6,421.7 108.9,420.6 111.1,421.3 C111.3,421.4 111.4,421.4 111.6,421.4 L111.6,421.4 C112.8,421.4 113.9,420.5 113.9,419.2 C113.9,418.5 113.6,417.8 113.1,417.4 L113.1,417.4 C113,417.4 112.9,417.3 112.7,417.2 Z" id="路径" fill="#FDD835" opacity="0.5" />
            <circle id="椭圆形" fill="#F55F44" opacity="0.5" cx="337.8" cy="28.6" r="7.3" />
            <circle id="椭圆形" fill="#F55F44" opacity="0.5" cx="7.3" cy="317.5" r="7.3" />
            <circle id="椭圆形" fill="#F55F44" opacity="0.5" cx="863.8" cy="120.4" r="7.3" />
            <circle id="椭圆形" fill="#4D8AF0" opacity="0.5" cx="822.2" cy="339.3" r="7.3" />
            <circle id="椭圆形" fill="#47E6B1" opacity="0.5" cx="37.7" cy="145.2" r="7.3" />
            <circle id="椭圆形" fill="#47E6B1" opacity="0.5" cx="853.3" cy="647.3" r="7.3" />
            <circle id="椭圆形" fill="#47E6B1" opacity="0.5" cx="910.8" cy="431" r="7.3" />
            <rect id="矩形" fill="url(#linearGradient-8)" x="544.4" y="601" width="186.5" height="153.1" />
            <path d="M582.9,571.8 C582.9,541.7 607.4,517.3 637.5,517.3 C667.6,517.3 692,541.7 692,571.8 L692,606.7 L707.3,606.7 L707.3,571.8 C707.3,533.2 676,502 637.5,502 C598.9,502 567.7,533.3 567.7,571.8 L567.7,571.8 L567.7,606.7 L583,606.7 L582.9,571.8 Z" id="路径" fill="url(#linearGradient-9)" />
            <path d="M585.1,571 C585.1,542.1 608.5,518.6 637.5,518.6 C666.4,518.6 689.9,542 689.9,571 C689.9,571 689.9,571 689.9,571 L689.9,604.5 L704.6,604.5 L704.6,571 C704.6,534 674.6,504 637.6,504 C600.6,504 570.6,534 570.6,571 L570.6,604.5 L585.3,604.5 L585.3,571 L585.1,571 Z" id="路径" fill="#F5F5F5" />
            <rect id="矩形" fill="#17AD8D" x="546.3" y="602.5" width="182.2" height="148.7" />
            <rect id="矩形" fill="#F5F5F5" x="546.3" y="602.5" width="182.2" height="148.7" />
            <rect id="矩形" fill="#17AD8D" x="546.3" y="631.8" width="182.2" height="90.1" />
            <path d="M650.8,659.8 C650.8,652.4 644.8,646.4 637.5,646.4 C630.1,646.4 624.1,652.4 624.1,659.7 C624.1,663.1 625.4,666.4 627.7,668.9 L627.7,697.4 C627.7,702.8 632.1,707.1 637.4,707.1 C642.8,707.1 647.1,702.7 647.1,697.4 L647.1,669 C649.5,666.5 650.8,663.2 650.8,659.8 Z" id="路径" fill="url(#linearGradient-10)" />
            <path d="M649,662.2 C649,655.8 643.9,650.7 637.5,650.7 C631.1,650.7 626,655.8 626,662.2 C626,665.1 627.1,668 629.1,670.1 L629.1,694.7 C629.1,699.3 632.9,703.1 637.5,703.1 C642.1,703.1 645.9,699.3 645.9,694.7 L645.9,670 C647.8,667.9 649,665.1 649,662.2 Z" id="路径" fill="#000000" opacity="0.2" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);




