import { useState } from 'react';

import BaseContainer from '@components/base/BaseContainer';

import styles from './Accounts.module.scss';

const Accounts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const groomAccountList = [
    {
      order: 0,
      title: '신랑',
      name: '이성연',
      account: '카카오뱅크 3333-02-0504858',
    },
    // {
    //   order: 1,
    //   title: '신랑부',
    //   name: '이용렬',
    //   account: '카카오 3333-33-3333333',
    // },
    // {
    //   order: 2,
    //   title: '신랑모',
    //   name: '서순옥',
    //   account: '카카오 3333-33-3333333',
    // },
  ];

  const brideAccountList = [
    {
      order: 0,
      title: '신부',
      name: '이기쁨',
      account: '카카오뱅크 3333-06-2023685',
    },
    {
      order: 1,
      title: '신부부',
      name: '이관기',
      account: '국민은행 221-21-0108-932',
    },
    {
      order: 2,
      title: '신부모',
      name: '장은숙',
      account: '농협 207173-56-202204',
    },
  ];

  return (
    <BaseContainer background="sub">
      <div className={`${styles.accounts_card} ${isOpen ? styles.open : ''}`}>
        <div className={styles.accounts_card_header} onClick={() => setIsOpen(!isOpen)}>
          <h3>마음 전하실 곳</h3>
          <span className="material-icons">&#xE5CB;</span>
        </div>

        <AccountList type="groom" list={groomAccountList} />
        <hr />
        <AccountList type="bride" list={brideAccountList} />
      </div>
    </BaseContainer>
  );
};

export default Accounts;

const AccountList = ({ type, list }) => {
  const copyAccount = (account) => {
    try {
      navigator.clipboard.writeText(account);
      alert('복사되었습니다.');
    } catch (error) {
      alert('복사에 실패했습니다', error);
    }
  };

  return (
    <div className={styles.accounts_list}>
      <span>{type === 'groom' ? '신랑측' : '신부측'}</span>

      {list.map((item) => (
        <div className={styles.accounts_item} key={`account_${type}_${item.order}`}>
          <div>
            <span>
              {item.title} | {item.name}
            </span>
            <span
              className={`${styles.copy_icon} material-icons`}
              onClick={() => copyAccount(item.account)}>
              &#xE2EC;
            </span>
          </div>
          <span>{item.account}</span>
        </div>
      ))}
    </div>
  );
};
