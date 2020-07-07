import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  submitBtnAction,
  searchTextAction,
  getAstroidAction,
  resetBtnAction,
} from '../store/actionCreators';
import { Container, Card, Button } from 'react-bootstrap';

const DisplayAstroid = (props) => {
  useEffect(() => {
    props.getAstroidAction();
    props.searchTextAction(`${props.match.params.id}`);
    if (props.astroidList.length) {
      props.submitBtnAction();
    }
  }, [props.astroidList.length]);

  console.log('props', props);
  return (
    <div>
      {props.loader ? (
        <h2>Loading...</h2>
      ) : (
        <Container style={{ marginTop: '20%', width: '250px' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>ID : {props.selectedAstroid.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.selectedAstroid.name}
              </Card.Subtitle>
              <Card.Text>
                {props.selectedAstroid.is_potentially_hazardous_asteroid ? (
                  <div>Hazardous</div>
                ) : (
                  <div>Not Hazardous</div>
                )}
              </Card.Text>
              <Card.Link href={props.selectedAstroid.nasa_jpl_url}>
                Go TO MORE DETAILS
              </Card.Link>
              <br />
            </Card.Body>
            <Button
              onClick={() => {
                props.resetBtnAction();
                props.history.push(`/`);
              }}
            >
              Back
            </Button>
          </Card>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    searchText: state.searchText,
    astroidList: state.astroidList,
    selectedAstroid: state.selectedAstroid,
  };
};

const mapDispatchToProps = {
  searchTextAction,
  submitBtnAction,
  getAstroidAction,
  resetBtnAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAstroid);
