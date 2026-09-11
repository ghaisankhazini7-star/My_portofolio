import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <Spline
        scene="https://prod.spline.design/your-scene-url-here.splinecode" 
      />
    </main>
  );
}
