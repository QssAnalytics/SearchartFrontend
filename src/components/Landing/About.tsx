import { aboutData } from "../constants/LandingConstants";

const About = () => {
  return (
    <section className="relative grid gap-24">
      {aboutData().map(({ id, frame, content }) => (
        <div
          key={id}
          className="flex gap-24 w-full items-center even:flex-row-reverse"
        >
          <div>{frame}</div>
          <p className="max-w-xl text-justify leading-normal">
            {content.split("_")[0]}
            <p className="mt-1">{content.split("_")?.[1]}</p>
          </p>
        </div>
      ))}
    </section>
  );
};

export default About;
