import MainLayout from "./layouts/MainLayout";
import Grid from "./components/Grid";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Header title="Hi, I'm CherryYeti!" />
        <img src="fs64.png" alt="" className="w-[200px] h-[200px] rendering-pixelated" />
        <Header title="About me" />
        <p className="text-xl">
          Hello! My name is Jason Javandel. I am a second year college student
          who believes in open source projects. I am majoring in computer
          science, and I love creating!
        </p>
        <Header title="My Projects" />
        <Grid />
        <Header title="Contact Me"/>
        <p>
          Go ahead and shoot me an&nbsp;
          <a href="mailto:jasonjavandel@protonmail.com" className="text-[#0000EE] underline">email</a>
          .
        </p>
        <p className="mt-2">&copy; 2023 Jason Javandel</p>

      </MainLayout>
    </div>
  );
}

export default App;
