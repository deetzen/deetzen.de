import React from "react";

const SvgPageSpeed = props => (
  <svg width="1em" height="1em" {...props}>
    <linearGradient id="page_speed_svg__b" x2={0} y2="100%">
      <stop offset={0} stopColor="#bbb" stopOpacity={0.1} />
      <stop offset={1} stopOpacity={0.1} />
    </linearGradient>
    <clipPath id="page_speed_svg__a">
      <rect width={104} height={20} rx={3} fill="#fff" />
    </clipPath>
    <g clipPath="url(#page_speed_svg__a)">
      <path fill="#555" d="M0 0h71v20H0z" />
      <path fill="#3085ad" d="M71 0h33v20H71z" />
      <path fill="url(#page_speed_svg__b)" d="M0 0h104v20H0z" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
      fontSize={110}
    >
      <text
        x={365}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={610}
        transform="scale(.1)"
      >
        {"PageSpeed"}
      </text>
      <text x={365} y={140} textLength={610} transform="scale(.1)">
        {"PageSpeed"}
      </text>
      <text
        x={865}
        y={150}
        fill="#010101"
        fillOpacity={0.3}
        textLength={230}
        transform="scale(.1)"
      >
        {"~98"}
      </text>
      <text x={865} y={140} textLength={230} transform="scale(.1)">
        {"~98"}
      </text>
    </g>
  </svg>
);

export default SvgPageSpeed;
