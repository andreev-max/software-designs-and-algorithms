import { Account, Image, User } from 'types';
import { Row } from './components';
import { DataWithUserId } from './types';

function transformDataToRow({
  avatar,
  username,
  country,
  name,
  lastPayments,
  posts,
}: User & { avatar: string; posts: number; lastPayments: number }): Row {
  return {
    avatar,
    username,
    country,
    name,
    lastPayments,
    posts,
  };
}

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  function addAccount<T extends DataWithUserId>(
    data: T
  ): T & { posts: number; lastPayments: number } {
    const foundAccount = accounts.find(({ userID }) => userID === data.userID);
    return {
      ...data,
      posts: foundAccount.posts ?? 0,
      lastPayments: foundAccount.payments?.[0]?.totalSum ?? 0,
    };
  }

  function addAvatar<T extends DataWithUserId>(
    data: T
  ): T & { avatar: string } {
    const foundImage = images.find(({ userID }) => userID === data.userID);
    return { ...data, avatar: foundImage.url ?? 'fallback-image-url' };
  }

  return users.map((user: User) =>
    transformDataToRow(addAvatar(addAccount(user)))
  );
};
