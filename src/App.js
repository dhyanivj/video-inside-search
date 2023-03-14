import "./App.css";
import SearchBar from "./SearchBar";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div>
      <SearchBar />

      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <VideoCard
          thumbnail="https://www.shutterstock.com/shutterstock/videos/1045628542/thumb/4.jpg"
          title="Introduction to Computers"
          duration="15:00"
          tag="Technology"
          description="lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !"
        />
        <VideoCard
          thumbnail="https://mllerouge.com/wp-content/uploads/2017/05/MR_Netflix_Abstract.jpg"
          title="Introduction to Graphic Design"
          duration="09:09"
          tag="Technology"
          description="lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !"
        />
      </div>
    </div>
  );
}

export default App;
