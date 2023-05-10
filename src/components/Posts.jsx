import { useNavigate } from "react-router-dom";
import { useGetDataFromApiQuery } from "../services/ApiCalling";

export default function Posts() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetDataFromApiQuery();
  console.log(isLoading);
  // console.log(useGetDataFromApiQuery());

  {
    isError && <h1>There was an error</h1>;
  }
  return (
    <>
      <section>
        <button onClick={() => navigate("/posts/add")}>Add New Post</button>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data &&
          data.map(({ id, title, body }) => (
            <article key={id} onClick={() => navigate(`/posts/${id}`)}>
              <h3>Title: {title}</h3>
              <p> Desc: {body}</p>
            </article>
          ))
        )}
      </section>
    </>
  );
}
