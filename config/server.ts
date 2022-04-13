// TERCEROS
import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// DATABASE
import dbConnection from './database';

// UTILS
// import { rootPath } from "../app";

export default class Server {
	private app: Express = express();

	public port: number = (process.env.PORT || 8080) as number;

	constructor() {
		this.middlewares();
		this.routes();
		dbConnection();
	}
	// ROUTES
	routes(){

	}

	// MIDDLEWARES
	middlewares() {
		// CORS
		this.app.use(cors());

		// JSON
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		// HELMET
		this.app.use(helmet());

		// MORGAN
		this.app.use(morgan('dev'));

		// HTML
		this.app.use(express.static(`${process.env.PWD}/public`));
	}

	// LISTEN
	listen() {
		this.app.listen(this.port, () => {
			console.log('App Listening in port:', this.port);
		});
	}
}
