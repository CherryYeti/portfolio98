import Project from "./Project";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <Project
        name="FireStarter"
        link="https://github.com/CherryYeti/firestarter"
        image="fs64.png"
        description="FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js."
      />
      <Project
        name="This Portfolio"
        link="https://github.com/CherryYeti/portfolio98"
        image="website.png"
        description="This portfolio was created entirely from scratch in react in a day."
      />
      <Project
        name="My Mother's Portfolio"
        link="https://github.com/CherryYeti/kate"
        image="website.png"
        description="My mother's old portfolio was running extremely slowly, so I decided to rebuild the entire website."
      />
      <Project
        name="My Github"
        link="https://github.com/CherryYeti"
        image="github.png"
        description="You can visit my github to see the source code for all of my projects."
      />
    </div>
  );
};
export default Grid;
