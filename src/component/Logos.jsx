import LogoLoop from "../components/bits/LogoLoop";
import './Logos.css'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", title: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", title: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", title: "Company 3", href: "https://company3.com" },
];

function Logos() {
  return (
    <section>
        <div className="innerWidth paddings flexCenter lo-container">
          <div className="logos">
            <LogoLoop
        speed={40}
        scaleOnHover={false}
        logos={techLogos}
        fade={true}
      />
          </div>
        </div>

    </section>
  );
}
export default Logos