import React from "react";

const SvgGtMetrix = props => (
  <svg width="1em" height="1em" {...props}>
    <linearGradient id="gt_metrix_svg__b" x2={0} y2="100%">
      <stop offset={0} stopColor="#bbb" stopOpacity={0.1} />
      <stop offset={1} stopOpacity={0.1} />
    </linearGradient>
    <clipPath id="gt_metrix_svg__a">
      <rect width={102} height={20} rx={3} fill="#fff" />
    </clipPath>
    <g clipPath="url(#gt_metrix_svg__a)">
      <path fill="#555" d="M0 0h59v20H0z" />
      <path fill="#3085ad" d="M59 0h43v20H59z" />
      <path fill="url(#gt_metrix_svg__b)" d="M0 0h102v20H0z" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
      fontSize={110}
    >
      <text
        x={305}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={490}
        transform="scale(.1)"
      >
        {"GTMetrix"}
      </text>
      <text x={305} y={140} textLength={490} transform="scale(.1)">
        {"GTMetrix"}
      </text>
      <text
        x={795}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={330}
        transform="scale(.1)"
      >
        {"100%"}
      </text>
      <text x={795} y={140} textLength={330} transform="scale(.1)">
        {"100%"}
      </text>
    </g>
  </svg>
);

export default SvgGtMetrix;

