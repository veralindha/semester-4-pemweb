import Jumbotron from "../components/Jumbotron";
import Article from "../components/Article";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            From the Firehose
          </h3>

        </div>

        <Sidebar />
      </div>
    </Layout>
  );
}
