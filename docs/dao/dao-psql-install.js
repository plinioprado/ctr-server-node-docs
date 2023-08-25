const queryReset = `
CREATE TABLE IF NOT EXISTS ctr.country (
  cod VARCHAR(3) PRIMARY KEY,
  "name" VARCHAR(30) NOT NULL,
  descr VARCHAR(60) DEFAULT '',
  active BOOLEAN DEFAULT TRUE
);

INSERT INTO ctr.country (cod, "name")
VALUES ('CAN','Canada');
`;

module.exports = {
  queryReset
}
