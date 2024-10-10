import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full pt-10">
        <BentoGridItem
          id={1}
          title="I prioritize client collaboration, fostering open communication "
          description=""
          className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
          imgClassName="w-full h-full"
          titleClassName="justify-end"
          img="/b1.svg"
          spareImg=""
        />
        <BentoGridItem
          id={2}
          title="I'm very flexible with time zone communications"
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          imgClassName=""
          titleClassName="justify-start"
          img=""
          spareImg=""
        />
        <BentoGridItem
          id={3}
          title="My tech stack"
          description="I constantly try to improve"
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          imgClassName=""
          titleClassName="justify-center"
          img=""
          spareImg=""
        />
        <BentoGridItem
          id={4}
          title="Tech enthusiast with a passion for development."
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-1"
          imgClassName=""
          titleClassName="justify-start"
          img="/grid.svg"
          spareImg="/b4.svg"
        />
        <BentoGridItem
          id={5}
          title="Currently building a Payments Application"
          description="The Inside Scoop"
          className="md:col-span-3 md:row-span-2"
          imgClassName="absolute right-0 bottom-0 md:w-96 w-60 opacity-50 rounded-xl"
          titleClassName="justify-center md:justify-start lg:justify-center "
          img="/newproject.svg"
          spareImg="/grid.svg"
        />
        <BentoGridItem
          id={6}
          title="Do you want to start a project together?"
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-1"
          imgClassName="w-full h-full"
          titleClassName="justify-center md:max-w-full max-w-60 text-center"
          img=""
          spareImg=""
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
