import React from 'react';

const SvgObservatory = props => (
  <svg width="1em" height="1em" {...props}>
    <linearGradient id="observatory_svg__b" x2={0} y2="100%">
      <stop offset={0} stopColor="#bbb" stopOpacity={0.1} />
      <stop offset={1} stopOpacity={0.1} />
    </linearGradient>
    <clipPath id="observatory_svg__a">
      <rect width={104} height={20} rx={3} fill="#fff" />
    </clipPath>
    <g clipPath="url(#observatory_svg__a)">
      <path fill="#555" d="M0 0h77v20H0z" />
      <path fill="#3085ad" d="M77 0h27v20H77z" />
      <path fill="url(#observatory_svg__b)" d="M0 0h104v20H0z" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
      fontSize={110}
    >
      <text
        x={395}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={670}
        transform="scale(.1)"
      >
        Observatory
      </text>
      <text x={395} y={140} textLength={670} transform="scale(.1)">
        Observatory
      </text>
      <text
        x={895}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={170}
        transform="scale(.1)"
      >
        A+
      </text>
      <text x={895} y={140} textLength={170} transform="scale(.1)">
        A+
      </text>
    </g>
  </svg>
);

export default SvgObservatory;
