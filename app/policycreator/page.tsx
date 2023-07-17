import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';

export default async function PolicyCreator({ searchParams }: Props) {
  // if the user is logged in redirect

  const sessionTokenCookie = cookies().get('sessionToken');

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  if (session) redirect('/PolicyCreator');

  console.log('My search params', searchParams);
  return <LoginForm returnTo={searchParams.returnTo} />;
}
