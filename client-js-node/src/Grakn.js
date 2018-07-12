const GraknSession = require('./GraknSession');
const KeyspaceService = require('./service/Keyspace');
const messages = require("./service/Session/autogenerated/SessionMessages");

module.exports = {
    session: (uri, keyspace, credentials) => new GraknSession(uri, keyspace, credentials),
    deleteKeyspace: (keyspace) => KeyspaceService.delete(keyspace),
    retrieveKeyspaces: () => KeyspaceService.retrieve()
}

/**
 * List of available dataTypes for Grakn Attributes
 */
module.exports.dataType = {
    STRING: messages.AttributeType.DATA_TYPE.STRING,
    BOOLEAN: messages.AttributeType.DATA_TYPE.BOOLEAN,
    INTEGER: messages.AttributeType.DATA_TYPE.INTEGER,
    LONG: messages.AttributeType.DATA_TYPE.LONG,
    FLOAT: messages.AttributeType.DATA_TYPE.FLOAT,
    DOUBLE: messages.AttributeType.DATA_TYPE.DOUBLE,
    DATE: messages.AttributeType.DATA_TYPE.DATE
};

/**
 * List of available transaction types supported by Grakn
 */
module.exports.txType = {
    READ: 0,
    WRITE: 1,
    BATCH: 2
};