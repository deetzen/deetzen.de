import React from "react";

const SvgSslLabs = props => (
  <svg width="1em" height="1em" {...props}>
    <linearGradient id="ssl_labs_svg__b" x2={0} y2="100%">
      <stop offset={0} stopColor="#bbb" stopOpacity={0.1} />
      <stop offset={1} stopOpacity={0.1} />
    </linearGradient>
    <clipPath id="ssl_labs_svg__a">
      <rect width={88} height={20} rx={3} fill="#fff" />
    </clipPath>
    <g clipPath="url(#ssl_labs_svg__a)">
      <path fill="#555" d="M0 0h61v20H0z" />
      <path fill="#3085ad" d="M61 0h27v20H61z" />
      <path fill="url(#ssl_labs_svg__b)" d="M0 0h88v20H0z" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
      fontSize={110}
    >
      <text
        x={315}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={510}
        transform="scale(.1)"
      >
        {"SSL Labs"}
      </text>
      <text x={315} y={140} textLength={510} transform="scale(.1)">
        {"SSL Labs"}
      </text>
      <text
        x={735}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={170}
        transform="scale(.1)"
      >
        {"A+"}
      </text>
      <text x={735} y={140} textLength={170} transform="scale(.1)">
        {"A+"}
      </text>
    </g>
  </svg>
);

export default SvgSslLabs;

