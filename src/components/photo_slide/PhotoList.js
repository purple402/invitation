const images = import.meta.glob('../../assets/images/photo/*.{jpg,jpeg}', { eager: true });

const imageArray = Object.entries(images).map(([path, mod]) => {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  const name = fileName.slice(0, 10).replaceAll('-', '.');
  const order = fileName.match(/\((\d+)\)/); // () 으로 순서가 정해져있는지 확인F

  return {
    date: name,
    src: mod.default, // 실제 이미지 경로
    order: order ? parseInt(order[1], 10) : 1,
  };
});
imageArray.sort((a, b) => {
  if (b.date !== a.date) {
    return new Date(b.date) - new Date(a.date);
  } else {
    return a.order - b.order;
  }
});

export default imageArray;
