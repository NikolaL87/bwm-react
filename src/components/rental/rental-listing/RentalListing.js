import React from 'react';
import {RentalList} from './RentalList';

import {connect} from 'react-redux';
import * as actions from 'actions';

function withAlert(WrappedComponent) {
  return class extends React.Component {
    alertUser() {
      alert('Testdsda!!!');
    }

    render(){
      return <WrappedComponent {...this.props} alertUser={this.alertUser} />
    }
  }
}

class RentalListing extends React.Component {

  componentWillMount() {
    this.props.alertUser();
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <RentalList rentals={this.props.rentals} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  }
}

export default withAlert( connect(mapStateToProps)(RentalListing))