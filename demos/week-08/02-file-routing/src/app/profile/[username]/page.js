//nested dynamic route --> "/profile/:username"
//in the client, we used useParams to destructure the value of the dynamic params
//I cannot use hooks in the server :(
// in the server, we had the request object, where params were stored
//in Next.js, we have access to the params object!

export default async function ProfilePage({ params }) {
  //params are async
  const { username } = await params; //username is the name of my folder
  // const usernameParams = params.username;

  console.log(username); //checking

  return (
    <>
      {/* we need to escape ' using &apos; */}
      <h1>{username}&apos;s Page</h1>
    </>
  );
}
