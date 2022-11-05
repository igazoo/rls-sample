import "reflect-metadata";

import { UserResolver } from "./presentation/resolver/userResolver";
import express from "express";

import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { GraphQLSchema } from "graphql";
import { ApolloServer } from "apollo-server-express";

const app = express();
const serve = async () => {
	await createConnection();

	const schema = await buildSchema({
		resolvers: [UserResolver],
	});
	const server = new ApolloServer({ schema });

	server.applyMiddleware({ app, path: "/graphql" });

	app.listen({ port: process.env.PORT });
};

serve()
	.then(() => console.debug(`Ready ${process.env.PORT}`))
	.catch(console.error);
