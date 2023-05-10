import { useParams } from "react-router-dom";
import { useGetDataFromApiQuery } from "../services/ApiCalling";
export default function Post() {
  const { id } = useParams();
  // const { data, isFetching } = useGetDataByIdQuery(id);
  const { data } = useGetDataFromApiQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data.find((item) => item.id == id),
    }),
  });

  return (
    <section>
      <article>
        <strong>Id:{data.id}</strong>
        <strong>User Id:{data.userId}</strong>
        <h1>Title:{data.title}</h1>
        <p>Desc:{data.body}</p>
      </article>
    </section>
  );
}
