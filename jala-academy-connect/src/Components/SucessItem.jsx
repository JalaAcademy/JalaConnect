/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function SucessItem({ ...props }) {
  return (
    <>
      <div className="successItem text-center flex flex-col justify-center gap-3 ">
        <div className="icon h-[50px]">
            <img src={props.icon} alt="icon" className="w-full h-full object-contain" />
        </div>
        <h1>{props.mainText}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default SucessItem;
