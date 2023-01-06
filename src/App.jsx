import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

function App() {
  const [postCount, setPostCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    fetch("https://api.factmaven.com/xml-to-json/?xml=https://codechovui.dev/index.xml")
      .then(d => d.json())
      .then(data => {
        setPostCount(data.rss.channel.item.length);
      })
      .catch(e => console.log(e.message));
  }, []);

  useEffect(() => {
    fetch(
      "https://graph.facebook.com/v15.0/103689481930421?access_token=EABQzgx2cvHMBAPOzpVmKqgPwXpTMRkIlBeQubTI4XZCarGaAok00hsePM5p3eJK3sExpjKyWUtG5rB5JqRwGZClSyAHrxFxyhhgdRiyzH18KJnWKTxufau8IVnGQxFLamGoqvwIVCFRuapNHU7qd7cmjG9xsmNAzxZCsKHh8b1hw4E350MRbm53KlkAMlQOyx2q8gkYNz9DNkyBXCJp&fields=fan_count%2Cfollowers_count&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors",
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          Referer: "https://developers.facebook.com/",
          "Referrer-Policy": "origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setFollowerCount(data.followers_count);
        setLikeCount(data.fan_count);
      })
      .catch(e => console.log(e.message));
  }, []);

  return (
    <>
    <div className="card text-center text-5xl font-bold text-slate-800 py-[10rem] mt-[10rem] mx-auto w-[400px] lg:w-[800px] lg:mt-[5rem]">
      CodeChoVui Status
    </div>
    <div className="mb-[15rem] lg:mb-[10rem] w-24 mx-auto pt-10 text-white animate-bounce">
      <img src="/scroll.png" />
    </div>
    <div className="text-center mx-auto mt-5 grid grid-cols-1">
      <InfoCard number={postCount} text="Posts" source="CodeChoVui Blog" url="https://codechovui.dev" />
      <InfoCard number={likeCount} text="Likes" source="CodeChoVui Facebook" url="https://fb.com/codechovui" />
      <InfoCard number={followerCount} text="Followers" source="CodeChoVui Facebook" url="https://fb.com/codechovui" />
    </div>
    </>
  );
}

export default App;
