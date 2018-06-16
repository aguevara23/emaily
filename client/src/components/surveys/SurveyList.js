import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

// SurveyList renders a list of all user-created surveys
class SurveyList extends Component {
  // fetches the user-created surveys from database
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    // maps through array of fetched surveys and renders a card
    // TODO: create and use a custom card component
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-gray darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
