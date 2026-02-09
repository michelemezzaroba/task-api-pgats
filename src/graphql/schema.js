const { gql } = require("apollo-server-express");

module.exports = gql`
  type Task {
    id: ID
    title: String
    done: Boolean
  }

  type Query {
    tasks: [Task]
  }
`;
