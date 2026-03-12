import React from "react";

function LastDiv(props) {
  return (
    <div className="flex  gap-3 h-[128px] flex-col justify-start items-start pl-5.5 pt-5.5 border-[rgba(255,255,255,0.2)] border  max-w-[255px] w-full  sm:flex-row sm:justify-between sm:h-150px  sm:items-center sm:p-4 ">
      <p className="text-[rgba(255,255,255,0.5)] text-[11px] font-bold tracking-[1px] leading-6.25">
        {props.text}
      </p>
      <h1 className="leading-[100%] font-normal tracking-[-1.5px] uppercase text-[35px] xl:text-[25px] sm:text-[15px] ]">
        {props.num}
      </h1>
    </div>
  );
}

export default LastDiv;
