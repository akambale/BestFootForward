const { Prisma } = require('./generated/prisma-client');

const prisma = new Prisma({
  debug: true,
});

prisma.Mutation.createUser(
  {
    data: {
      firstName: 'Bob',
      lastName: 'Prisma',
      email: 'bff@prisma.io',
      password: 'graphQLq',
      birthday: '1990-01',
      minAge: 27,
      maxAge: 33,
      genderIdentityMale: false,
      genderIdentityFemale: true,
      genderIdentityNonBi: false,
      genderPreferenceMale: true,
      genderPreferenceFemale: false,
      genderPreferenceNonBi: false,
    },
  },
  '{id}',
).then(res => console.log(res));
