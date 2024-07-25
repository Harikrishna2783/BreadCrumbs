import { Link, useLocation } from "react-router-dom";
import "../styles.css"

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);
  //console.log(pathnames);
  let breadCrumbPath = "";

  return ( 
   <div className="breadcrumb">

    <Link to = "/">Home</Link>
    {pathnames.map((name, index) => {
        breadCrumbPath += `/${name}`
        const isLast = index === pathnames.length - 1;
        //console.log(breadCrumbPath);

        return isLast ? (
        <span key = {breadCrumbPath}> / {name}</span>
         ) : (
        <span key = {breadCrumbPath}>
        {" "} / <Link to = {breadCrumbPath}>{name}</Link>
        </span>
        );
    })}
  </div>
  )
};

export default BreadCrumb;
