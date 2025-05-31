const images = import.meta.glob('../../assets/images/photo/*.{jpg,jpeg}', { eager: true });

const imageArray = Object.entries(images).map(([path, mod]) => {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  const name = fileName.slice(0, 10).replaceAll('-', '.');

  return {
    date: name,
    src: mod.default, // 실제 이미지 경로
  };
});
imageArray.sort((a, b) => new Date(b.date) - new Date(a.date));

export default imageArray;
