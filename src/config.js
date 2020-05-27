export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "dog-ear-app-uploads"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://2vp2512ez9.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_41Cb6JZCy",
      APP_CLIENT_ID: "6vc72fa6tr18sg2kpi2bjh5gul",
      IDENTITY_POOL_ID: "us-west-2:941a687d-4139-44d9-ac87-d50cbb32530d"
    },
    STRIPE_KEY: "pk_test_DE7MEwB3KqWgFsITYvjJ2dnB001iBAoilx",
  };