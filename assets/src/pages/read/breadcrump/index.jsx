import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://127.0.0.1:8000/phantomblood/">
        partie 1
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://127.0.0.1:8000/phantomblood/diolenvahisseur">
        tome 1
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
