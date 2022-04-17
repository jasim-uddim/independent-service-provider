import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="px-5">
        01. Difference between authorization and authentication ?
      </h1>
      <p className="px-5">
        Ans:- Simply put, authentication is the process of verifying who someone
        is, whereas authorization is the process of verifying what specific
        applications, files, and data a user has access to. The situation is
        like that of an airline that needs to determine which people can come on
        board. The first step is to confirm the identity of a passenger to make
        sure they are who they say they are. Once a passenger’s identity has
        been determined, the second step is verifying any special services the
        passenger has access to, whether it’s flying first-class or visiting the
        VIP lounge. In the digital world, authentication and authorization
        accomplish these same goals. Authentication is used to verify that users
        really are who they represent themselves to be. Once this has been
        confirmed, authorization is then used to grant the user permission to
        access different levels of information and perform specific functions,
        depending on the rules established for different types of users.
      </p>
      <h1 className="px-5">02. Why are you using firebase?</h1>
      <p className="px-5">
        Ans:- Google’s Firebase is a mobile platform that lets you develop
        mobile apps. It is especially geared towards business apps, with the
        intention of helping businesses grow their user bases and increase their
        profits through their mobile apps. The screenshot from Google Firebase
        below shows just some of the features that are a part of Firebase,
        again, with the intention of developing, growing and earning.
      </p>
      <h1 className="px-5">
        03.What other services does firebase provide other than authentication?
      </h1>
      <p className="px-5">
        Ans:- Most apps need to know the identity of a user. Knowing a user's
        identity allows an app to securely save user data in the cloud and
        provide the same personalized experience across all of the user's
        devices. Firebase Authentication provides backend services, easy-to-use
        SDKs, and ready-made UI libraries to authenticate users to your app. It
        supports authentication using passwords, phone numbers, popular
        federated identity providers like Google, Facebook and Twitter, and
        more. Firebase Authentication integrates tightly with other Firebase
        services, and it leverages industry standards like OAuth 2.0 and OpenID
        Connect, so it can be easily integrated with your custom backend.
      </p>
    </div>
  );
};

export default Blogs;
