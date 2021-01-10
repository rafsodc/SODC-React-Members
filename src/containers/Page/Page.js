import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Container, Col, Row} from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

class Page extends Component {

  state = {
    page: null
  }
  componentDidMount() {
    axios.get(this.props.api)
      .then(response => {
        this.setState({page: response.data});
      }
    );
  }

  render () {

    if(this.state.page !== null) {
      // This could be its own component
      return (
        <Container className={"h-100 mt-2"}>
          <Helmet>
            <title>{this.state.page.title + " | SODC"}</title>
          </Helmet>
          <ReactMarkdown source={this.state.page.contentMd} />
        </Container>
      );
    }

    return (<Loading />);



  }
}

export default Page;