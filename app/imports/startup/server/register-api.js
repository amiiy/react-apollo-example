import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import resolutionSchema from '../../api/resolutions/resolutions.graphql';

const testSchema = `
type Query {
  hi: String
}
`;

const typeDefs = [testSchema, resolutionSchema];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Level Up';
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
