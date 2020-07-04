interface Options {
  bgColor?: string;
  name?: string;
  sides?: number;
}

export default function Dice3D({
  bgColor = '#fff',
  name = 'dice3d-container',
  sides = 6,
}: Options) {
  const render = () => {
    console.info(bgColor);
    console.info(name);
    console.info(sides);
  };

  render();
}
