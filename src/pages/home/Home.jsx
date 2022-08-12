import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Subject from "../../components/subject/Subject";
import Submit from "../../components/submit/Submit";
import Texteditor from "../../components/texteditor/Texteditor";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <h1 className="textheader">type and send email here</h1>
        <Subject/>
        <div className="textedit">
          <Texteditor />
        </div>
        <Submit/>
      </div>
    </div>
  );
};

export default Home;
