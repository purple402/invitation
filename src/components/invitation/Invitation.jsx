import styles from './Invitation.module.scss';

const Invitation = () => {
  return (
    <div className={styles.invitation_container}>
      <div className={styles.invitation_card}>
        <h2>Since 2014</h2>

        <p>
          {`오랜 기다림 속에서 저희 두 사람,\n변함없는 사랑으로 믿음을 지키며\n아름다운 가정을 이루게 되었습니다.\n\n바쁘신 와중에도 귀한 걸음하시어\n저희의 시작을 축복해 주신다면\n더없는 기쁨이 되겠습니다.`}
        </p>

        <hr />

        <div className={styles.invitation_card_member}>
          <div>
            <span>이용열 · 서순옥의</span>
            <span>아들</span>
            <span>이성연</span>
          </div>
          <div>
            <span>이관기 · 장은숙의</span>
            <span>딸</span>
            <span>이기쁨</span>
          </div>
        </div>

        <hr />

        <div className={styles.invitation_card_info}>
          <span>2025. 08. 02 오후 12시 30분</span>
          <span>SY컨벤션웨딩홀</span>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
