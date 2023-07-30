type ProjectType = {
  name: string;
  link: string;
  image: string;
  description: string;
};
const Project = (props: ProjectType) => {
  return (
    <div className="p-4">
      <a href={props.link} target="_blank">
        <img src={props.image} alt="" className="rendering-pixelated h-32 w-32 mb-2"/>
        <h1 className="text-xl font-bold">{props.name}</h1>
        <div>{props.description}</div>
      </a>
    </div>
  );
};
export default Project;
