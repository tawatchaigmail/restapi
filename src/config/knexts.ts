
import oracledb from "oracledb" ;
import knex from "knex";

oracledb.initOracleClient({ libDir: "C:\\Oracle\\instantclient_19_18x64" });

interface KnexConfig {
    [key: string]: object;
};

const knexConfig: KnexConfig = {
    local: {
    client: "oracledb",
    connection: {
        user: "pintf",
        password: "pintf",
        connectString: "(DESCRIPTION =  (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.77)(PORT = 1521))) (CONNECT_DATA = (SERVICE_NAME = PDBPLAN) ) )",
        requestTimeout: 100
    },
    fetchAsString: ["number", "clob"]
    },

    development: {
        // defaults,
    },

    production: {
        // defaults
    }
};

let key: string = 'local';

var knexorm : any = knex(knexConfig[key]);

export default knexorm;