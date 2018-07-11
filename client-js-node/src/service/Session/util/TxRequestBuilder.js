const messages = require("../autogenerated/SessionMessages");
const ConceptsBaseType = require("../../../concept/methods/Concept");

const UNIT_MESSAGE = {};

// Helper functions

function RunConceptMethodRequest(conceptId, conceptMethod) {
  const idMessage = new messages.ConceptId();
  idMessage.setValue(conceptId);
  const TxRequest = new messages.TxRequest();
  const runConceptMethodRequest = new messages.RunConceptMethod();
  runConceptMethodRequest.setId(idMessage);
  runConceptMethodRequest.setConceptmethod(conceptMethod);
  TxRequest.setRunconceptmethod(runConceptMethodRequest);
  return TxRequest;
}

function convertBaseType(baseType) {
  switch (baseType) {
    case ConceptsBaseType.ATTRIBUTE: return messages.BaseType.ATTRIBUTE;
    case ConceptsBaseType.ATTRIBUTE_TYPE: return messages.BaseType.ATTRIBUTE_TYPE;
    case ConceptsBaseType.ENTITY: return messages.BaseType.ENTITY;
    case ConceptsBaseType.ENTITY_TYPE: return messages.BaseType.ENTITY_TYPE;
    case ConceptsBaseType.RELATIONSHIP: return messages.BaseType.RELATIONSHIP;
    case ConceptsBaseType.RELATIONSHIP_TYPE: return messages.BaseType.RELATIONSHIP_TYPE;
    case ConceptsBaseType.ROLE: return messages.BaseType.ROLE;
    case ConceptsBaseType.RULE: return messages.BaseType.RULE;
    case ConceptsBaseType.META_TYPE: return messages.BaseType.META_TYPE;
  }
}

function toGrpcConcept(conceptObject) {
  if (!conceptObject.id) throw new Error("Provided Concept without Id field.");
  if (!conceptObject.baseType) throw new Error("Provided Concept without baseType field.");

  const conceptMessage = new messages.Concept();
  const conceptIdMessage = new messages.ConceptId();
  conceptIdMessage.setValue(conceptObject.id);
  conceptMessage.setId(conceptIdMessage);
  conceptMessage.setBasetype(convertBaseType(conceptObject.baseType));
  return conceptMessage;
}

function setAttributeValue(attributeValue, dataType, value) {
  if (dataType == null) throw new Error('Datatype of AttributeType not specified.');
  switch (dataType) {
    case 0: attributeValue.setString(value); break;
    case 1: attributeValue.setBoolean(value); break;
    case 2: attributeValue.setInteger(value); break;
    case 3: attributeValue.setLong(value); break;
    case 4: attributeValue.setFloat(value); break;
    case 5: attributeValue.setDouble(value); break;
    case 6: attributeValue.setDate(value); break;
    default: throw new Error('DataType of attribute not recognised.');
  }
};

const methods = {
  // Concept
  deleteConcept: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setDelete(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Schema concept
  getLabel: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetlabel(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  setLabel: function (conceptId, labelValue) {
    const conceptMethod = new messages.ConceptMethod();
    const labelMessage = new messages.Label();
    labelMessage.setValue(labelValue);
    conceptMethod.setSetlabel(labelMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  isImplicit: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setIsimplicit(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getSubConcepts: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetsubconcepts(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getSuperConcepts: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetsuperconcepts(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getDirectSuperConcept: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetdirectsuperconcept(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  setDirectSuperConcept: function (conceptId, superConcept) {
    const conceptMethod = new messages.ConceptMethod();
    const grpcConcept = toGrpcConcept(superConcept);
    conceptMethod.setSetdirectsuperconcept(grpcConcept);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Rule
  getWhen: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetwhen(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getThen: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetthen(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Role
  getRelationshipTypesThatRelateRole: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetrelationshiptypesthatrelaterole(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getTypesThatPlayRole: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGettypesthatplayrole(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Type
  getInstances: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetinstances(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getAttributeTypes: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetattributetypes(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setAttributeType: function (conceptId, type) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetattributetype(toGrpcConcept(type));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  unsetAttributeType: function (conceptId, type) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setUnsetattributetype(toGrpcConcept(type));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getKeyTypes: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetkeytypes(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setKeyType: function (conceptId, keyType) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetkeytype(toGrpcConcept(keyType));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  unsetKeyType: function (conceptId, keyType) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setUnsetkeytype(toGrpcConcept(keyType));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  isAbstract: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setIsabstract(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setAbstract: function (conceptId, bool) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetabstract(bool);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getRolesPlayedByType: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetrolesplayedbytype(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setRolePlayedByType: function (conceptId, role) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetroleplayedbytype(toGrpcConcept(role));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  unsetRolePlayedByType: function (conceptId, role) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setUnsetroleplayedbytype(toGrpcConcept(role));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Entity Type
  addEntity: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setAddentity(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Relationship Type
  addRelationship: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setAddrelationship(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getRelatedRoles: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetrelatedroles(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  setRelatedRole: function (conceptId, role) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetrelatedrole(toGrpcConcept(role));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  unsetRelatedRole: function (conceptId, role) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setUnsetrelatedrole(toGrpcConcept(role));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Attribute type
  putAttribute: function (conceptId, dataType, value) {
    const conceptMethod = new messages.ConceptMethod();
    const attributeValue = new messages.AttributeValue();
    setAttributeValue(attributeValue, dataType, value);
    conceptMethod.setPutattribute(attributeValue);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getAttribute: function (conceptId, dataType, value) {
    const conceptMethod = new messages.ConceptMethod();
    const attributeValue = new messages.AttributeValue();
    setAttributeValue(attributeValue, dataType, value);
    conceptMethod.setGetattribute(attributeValue);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getDataTypeOfType: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetdatatypeoftype(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getRegex: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetregex(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setRegex: function (conceptId, regex) {
    const conceptMethod = new messages.ConceptMethod();
    const regexMessage = new messages.OptionalRegex();
    regexMessage.setPresent(regex);
    conceptMethod.setSetregex(regexMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Thing 

  isInferred: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setIsinferred(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getDirectType: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetdirecttype(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getRelationships: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetrelationships(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getRelationshipsByRoles: function (conceptId, roles) {
    const conceptsMessage = new messages.Concepts();
    const conceptMethod = new messages.ConceptMethod();
    const grpcConcepts = roles.map(role => toGrpcConcept(role))
    conceptsMessage.setConceptList(grpcConcepts);
    conceptMethod.setGetrelationshipsbyroles(conceptsMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getRolesPlayedByThing: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetrolesplayedbything(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getAttributes: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetattributes(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  getAttributesByTypes: function (conceptId, types) {
    const conceptMethod = new messages.ConceptMethod();
    const conceptsMessage = new messages.Concepts();
    const grpcConcepts = types.map(type => toGrpcConcept(type))
    conceptsMessage.setConceptList(grpcConcepts);
    conceptMethod.setGetattributesbytypes(conceptsMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getKeys: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetkeys(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getKeysByTypes: function (conceptId, types) {
    const conceptMethod = new messages.ConceptMethod();
    const conceptsMessage = new messages.Concepts();
    const grpcConcepts = types.map(type => toGrpcConcept(type))
    conceptsMessage.setConceptList(grpcConcepts);
    conceptMethod.setGetkeysbytypes(conceptsMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setAttribute: function (conceptId, attribute) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setSetattribute(toGrpcConcept(attribute));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  unsetAttribute: function (conceptId, attribute) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setUnsetattribute(toGrpcConcept(attribute));
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  // Relationship
  getRolePlayers: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetroleplayers(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getRolePlayersByRoles: function (conceptId, roles) {
    const conceptMethod = new messages.ConceptMethod();
    const conceptsMessage = new messages.Concepts();
    const grpcConcepts = roles.map(role => toGrpcConcept(role))
    conceptsMessage.setConceptList(grpcConcepts);
    conceptMethod.setGetroleplayersbyroles(conceptsMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  setRolePlayer: function (conceptId, role, thing) {
    const conceptMethod = new messages.ConceptMethod();
    const rolePlayerMessage = new messages.RolePlayer();
    rolePlayerMessage.setRole(toGrpcConcept(role));
    rolePlayerMessage.setPlayer(toGrpcConcept(thing));
    conceptMethod.setSetroleplayer(rolePlayerMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  unsetRolePlayer: function (conceptId, role, thing) {
    const conceptMethod = new messages.ConceptMethod();
    const rolePlayerMessage = new messages.RolePlayer();
    rolePlayerMessage.setRole(toGrpcConcept(role));
    rolePlayerMessage.setPlayer(toGrpcConcept(thing));
    conceptMethod.setUnsetroleplayer(rolePlayerMessage);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  //Attribute
  getValue: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetvalue(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getOwners: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetowners(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },
  getDataTypeOfAttribute: function (conceptId) {
    const conceptMethod = new messages.ConceptMethod();
    conceptMethod.setGetdatatypeofattribute(UNIT_MESSAGE);
    return RunConceptMethodRequest(conceptId, conceptMethod);
  },

  //GraknTx methods
  getConcept: function (conceptId) {
    const txRequest = new messages.TxRequest();
    const conceptIdMessage = new messages.ConceptId();
    conceptIdMessage.setValue(conceptId);
    txRequest.setGetconcept(conceptIdMessage);
    return txRequest;
  },
  getSchemaConcept: function (label) {
    const txRequest = new messages.TxRequest();
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    txRequest.setGetschemaconcept(labelMessage);
    return txRequest;
  },
  putEntityType: function (label) {
    const txRequest = new messages.TxRequest();
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    txRequest.setPutentitytype(labelMessage);
    return txRequest;
  },
  putRelationshipType: function (label) {
    const txRequest = new messages.TxRequest();
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    txRequest.setPutrelationshiptype(labelMessage);
    return txRequest;
  },
  putRole: function (label) {
    const txRequest = new messages.TxRequest();
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    txRequest.setPutrole(labelMessage);
    return txRequest;
  },
  putRule: function (label, when, then) {
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    const whenMessage = new messages.Pattern();
    const thenMessage = new messages.Pattern();
    whenMessage.setValue(when);
    thenMessage.setValue(then);
    const putMessage = new messages.PutRule();
    putMessage.setLabel(labelMessage);
    putMessage.setWhen(whenMessage);
    putMessage.setThen(thenMessage);
    const txRequest = new messages.TxRequest();
    txRequest.setPutrule(putMessage);
    return txRequest;
  },
  putAttributeType: function (label, dataType) {
    if (dataType == null) throw new Error('Datatype of AttributeType not specified.');
    const txRequest = new messages.TxRequest();
    const putMessage = new messages.PutAttributeType();
    const labelMessage = new messages.Label();
    labelMessage.setValue(label);
    putMessage.setLabel(labelMessage);
    putMessage.setDatatype(dataType);
    txRequest.setPutattributetype(putMessage);
    return txRequest;
  },
  getAttributesByValue: function (value, dataType) {
    if (dataType == null) throw new Error('Datatype of AttributeType not specified.');
    const txRequest = new messages.TxRequest();
    const attributeValue = new messages.AttributeValue();
    setAttributeValue(attributeValue, dataType, value)
    txRequest.setGetattributesbyvalue(attributeValue);
    return txRequest;
  },
  openTx: function (keyspace, txType, credentials) {
    const openRequest = new messages.Open();
    const txRequest = new messages.TxRequest();
    const messageKeyspace = new messages.Keyspace();
    messageKeyspace.setValue(keyspace);
    openRequest.setKeyspace(messageKeyspace);
    openRequest.setTxtype(txType);
    if (credentials) {
      openRequest.setUsername(credentials.username);
      openRequest.setPassword(credentials.password);
    }
    txRequest.setOpen(openRequest);
    return txRequest;
  },
  commit: function () {
    const commitRequest = new messages.Commit();
    const txRequest = new messages.TxRequest();
    txRequest.setCommit(commitRequest);
    return txRequest;
  },
  executeQuery: function (query) {
    const txRequest = new messages.TxRequest();
    const executeQuery = new messages.ExecQuery();
    const queryRequest = new messages.Query();
    queryRequest.setValue(query);
    executeQuery.setQuery(queryRequest);
    txRequest.setExecquery(executeQuery);
    return txRequest;
  },
  next: function (iteratorId) {
    const nextMessage = new messages.Next();
    nextMessage.setIteratorid(iteratorId);
    const txRequest = new messages.TxRequest();
    txRequest.setNext(nextMessage);
    return txRequest;
  }

};

module.exports = methods;
