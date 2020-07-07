import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  InputGroup,
  Button,
  FormControl,
} from 'react-bootstrap';
import {
  searchTextAction,
  getAstroidAction,
  submitBtnAction,
  randomBtnAction,
} from '../store/actionCreators';
import { isEmpty } from 'lodash';

const Controller = (props) => {
  useEffect(() => {
    props.getAstroidAction();
  }, []);

  useEffect(() => {
    if (!isEmpty(props.selectedAstroid)) {
      props.history.push(`/${props.selectedAstroid.id}`);
    }
  }, [props.selectedAstroid]);

  const handleSearchText = (value) => {
    props.searchTextAction(value);
  };

  const handleSubmitBtn = () => {
    props.submitBtnAction();
  };

  const handleRandomBtn = () => {
    props.randomBtnAction();
  };

  console.log('props', props);

  return (
    <div>
      <Container style={{ width: '500px', marginTop: '20%' }}>
        <Card>
          <InputGroup>
            <FormControl
              placeholder="Enter Astriod ID"
              value={props.searchText}
              onChange={(e) => handleSearchText(e.target.value)}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                disabled={!props.searchText}
                onClick={handleSubmitBtn}
              >
                Submit
              </Button>
              <Button
                variant="outline-secondary"
                style={{ color: 'white', backgroundColor: 'blue' }}
                onClick={handleRandomBtn}
              >
                Random
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    astroidList: state.astroidList,
    loader: state.loader,
    searchText: state.searchText,
    selectedAstroid: state.selectedAstroid,
  };
};

const mapDispatchToProps = {
  searchTextAction,
  getAstroidAction,
  submitBtnAction,
  randomBtnAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
