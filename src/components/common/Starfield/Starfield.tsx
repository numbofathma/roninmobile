import * as React from 'react';

class Starfield extends React.Component {
  componentDidMount() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      const c = canvas.getContext('2d');

      if (c) {
        let w = 0;
        let h = 0;

        const setCanvasExtents = () => {
          w = document.body.clientWidth;
          h = document.body.clientHeight;
          canvas.width = w;
          canvas.height = h;
        };

        setCanvasExtents();

        window.onresize = () => {
          setCanvasExtents();
        };

        const makeStars = (count: number) => {
          const out = [];
          for (let i = 0; i < count; i++) {
            const s = {
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              z: Math.random() * 1000,
            };
            out.push(s);
          }
          return out;
        };

        const stars = makeStars(10000);

        const clear = () => {
          c.fillStyle = '#221f1f';
          c.fillRect(0, 0, canvas.width, canvas.height);
        };

        const putPixel = (x: number, y: number, brightness: number) => {
          const intensity = brightness * 255;
          const rgb = `rgb(${intensity},${intensity},${intensity})`;
          c.fillStyle = rgb;
          c.fillRect(x, y, 1, 1);
        };

        const moveStars = (distance: number) => {
          const count = stars.length;
          for (let i = 0; i < count; i++) {
            const s = stars[i];
            s.z -= distance;
            while (s.z <= 1) {
              s.z += 1000;
            }
          }
        };

        let prevTime: any;
        const tick = (time: any) => {
          const elapsed = time - prevTime;
          prevTime = time;

          moveStars(elapsed * 0.1);

          clear();

          const cx = w / 2;
          const cy = h / 2;

          const count = stars.length;
          for (let i = 0; i < count; i++) {
            const star = stars[i];

            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h) {
              continue;
            }

            const d = star.z / 1000.0;
            const b = 1 - d * d;

            putPixel(x, y, b);
          }

          requestAnimationFrame(tick);
        };

        const init = (time: any) => {
          prevTime = time;
          requestAnimationFrame(tick);
        };

        requestAnimationFrame(init);
      }
    }
  }

  render() {
    return (
      <canvas
        id="canvas"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 0,
        }}
      />
    );
  }
}

export default Starfield;
