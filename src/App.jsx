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
    <div className="w-[60em] text-center">
      <div className="rounded bg-red-500">
        <p className="text-3xl font-bold text-white px-5 py-2">{postCount}</p>
      </div>
    </div>
  );
}

export default App;
