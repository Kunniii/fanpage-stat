import { useState, useEffect } from "react";

function App() {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    fetch("https://api.factmaven.com/xml-to-json/?xml=https://codechovui.dev/index.xml")
      .then((d) => d.json())
      .then((data) => {
        setPostCount(data.rss.channel.item.length);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="text-center mx-auto mt-5 w-[75vw] h-[30vh]">
      <div className="rounded bg-red-500 mx-auto">
        <p className="text-xl font-bold text-white">{postCount}</p>
      </div>
    </div>
  );
}

export default App;
