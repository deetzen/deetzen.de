import React from 'react';

const SvgHeaders = props => (
  <svg width="1em" height="1em" {...props}>
    <linearGradient id="headers_svg__b" x2={0} y2="100%">
      <stop offset={0} stopColor="#bbb" stopOpacity={0.1} />
      <stop offset={1} stopOpacity={0.1} />
    </linearGradient>
    <clipPath id="headers_svg__a">
      <rect width={82} height={20} rx={3} fill="#fff" />
    </clipPath>
    <g clipPath="url(#headers_svg__a)">
      <path fill="#555" d="M0 0h55v20H0z" />
      <path fill="#3085ad" d="M55 0h27v20H55z" />
      <path fill="url(#headers_svg__b)" d="M0 0h82v20H0z" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
      fontSize={110}
    >
      <text
        x={285}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={450}
        transform="scale(.1)"
      >
        Headers
      </text>
      <text x={285} y={140} textLength={450} transform="scale(.1)">
        Headers
      </text>
      <text
        x={675}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={170}
        transform="scale(.1)"
      >
        A+
      </text>
      <text x={675} y={140} textLength={170} transform="scale(.1)">
        A+
      </text>
    </g>
  </svg>
);

export default SvgHeaders;
