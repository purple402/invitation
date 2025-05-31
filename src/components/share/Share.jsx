import BaseContainer from '@components/base/BaseContainer.jsx';

const KAKAO_KEY = import.meta.env.VITE_APP_KAKAO_KEY;

window.Kakao.init(KAKAO_KEY);

const Share = () => {
  const sharePage = () => {
    window.Kakao.Share.sendCustom({
      templateId: 121183,
    });
  };

  return (
    <BaseContainer background="white">
      <button onClick={sharePage}>카카오톡 공유하기</button>
    </BaseContainer>
  );
};

export default Share;
