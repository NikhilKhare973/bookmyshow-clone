import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className="width:100% height:100% rounded-xl .slick-prev {left: -25px} {props.className}"
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className="width: 100%;
    height: 100%; {props.className}"
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
}
