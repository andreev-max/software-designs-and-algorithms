import { Account, Image, User } from 'types';
import { Row } from './components';

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  return users.map(({ userID, username, country, name }) => {
    let avatar = 'fallback-image';
    let lastPayments = 0;
    let posts = 0;

    const image = images.find(image => image.userID === userID);
    const account = accounts.find(acc => acc.userID === userID);

    if (image) {
      avatar = image.url;
    }

    if (account) {
      lastPayments = account?.payments?.[0]?.totalSum ?? 0;
      posts = account?.posts ?? 0;
    }

    return {
      avatar,
      username,
      country,
      name,
      lastPayments,
      posts,
    };
  });
};
