const images = import.meta.glob('../../assets/images/photo/*.{jpg,jpeg}', { eager: true });

const imageArray = Object.entries(images).map(([path, mod]) => {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  const [order, dateInfo] = fileName.split('_'); // ['order', 'date.jpeg']
  const [date, _] = dateInfo.split('.'); // ['date', 'jpeg']

  return {
    src: mod.default, // 실제 이미지 경로
    order: parseInt(order),
    date: date.replaceAll('-', '.'),
  };
});

imageArray.sort((a, b) => a.order - b.order);

export default imageArray;
