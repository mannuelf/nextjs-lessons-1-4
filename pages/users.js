import axios from "axios";
export default function users({ user }) {
  return (
    <>
      {user.id} with the name of {user.username}
    </>
  );
}

export async function getStaticProps() {
  const url = `http://localhost:3000/api/users`;
  let user = [];

  try {
    const res = await axios.get(url);
    user = res.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      user: user,
    },
  };
}
