import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib-router`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      setdataResponse(res.posts);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  useEffect(() => {
    console.log(dataResponse);
  }, [dataResponse]);

  return (
    <div className={styles.container}>
      {dataResponse.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div className={styles.photo}>
              <img src={`/images/${post.image}`} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

