import AnimatedNumbers from "react-animated-numbers";

export default function InfoCard(props) {
  let number = props.number;
  let text = props.text;
  let source = props.source;
  let url = props.url;

  return (
    <div className="card mx-auto my-64 w-[400px] h-[350px] shadow-xl">
      <div className="text-8xl py-5 mt-[15px] font-bold">
        <AnimatedNumbers
          animateToNumber={number}
          configs={(number, index) => {
            return { mass: 1, tension: 100 * (index + 1), friction: 50 };
          }}
        ></AnimatedNumbers>
      </div>
      <p className="text-2xl font-bold">{text}</p>
      <p className="text-md py-3 font-bold">on</p>
      <p className="text-2xl font-bold text-blue-800">
        <a href={url} target="_blank">
          {source}
        </a>
      </p>
    </div>
  );
}
