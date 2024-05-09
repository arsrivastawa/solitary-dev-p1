import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-screen">
        <h1 className="font-josefin uppercase text-2xl font-bold">
          Hover the Card to see the magic
        </h1>
        <Card
          ImgUrl={"/assets/bird-thumbnail.jpg"}
          title={"Solitary Dev"}
          twitterUrl={"https://x.com/solitarydev8"}
          subtitle={"Full Stack Developer"}
          linkedinUrl={"www.linkedin.com/in/aditya-srivastawa"}
          email={"solitarydev8@gmail.com"}
          instaUrl={"https://www.instagram.com/solitarydev8"}
        />
      </div>
    </>
  );
}

export default App;
