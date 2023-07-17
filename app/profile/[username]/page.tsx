import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserByUsername } from '../../../database/users';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/home');
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }
  return (
    <>
      <div>id: {user.id}</div>
      <div>username: {user.username}</div>
    </>
  );
}
