import axios from "axios";
export default function users({ users }) {
  return (
    <>
      {users
        ? users.map((user) => {
            return (
              <div key={user.id}>
                {user.id}, {user.username}, {user.age}
              </div>
            );
          })
        : "No users found."}
    </>
  );
}

export async function getStaticProps() {
  const url = `http://localhost:3000/api/users`;
  let users = [];

  try {
    const res = await axios.get(url);
    users = res.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: {
      users: users,
    },
  };
}
