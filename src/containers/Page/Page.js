import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Container } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

//class Page extends Component {
const Page = (props) => {

  const [ data, setData ] = useState({
    page: null
  });

  useEffect( () => {
    axios.get(props.api)
    .then(response => {
        setData({page: response.data});
    });
  }, [props.api]);

  if(data.page !== null) {
    // This could be its own component
    return (
      <Container className={"h-100 mt-2"}>
        <Helmet>
          <title>{data.page.title + " | SODC"}</title>
        </Helmet>
        <ReactMarkdown source={data.page.contentMd}/>
      </Container>
    );
  }

  return (<Loading />);

}

export default Page;