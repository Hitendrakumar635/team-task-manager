function Profile() {

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <h1>
        User Profile
      </h1>

      <div
        style={{
          marginTop: "20px",
          background: "#f3f4f6",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >

        <p>
          <strong>Name:</strong>
          {" "}
          User
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          user@gmail.com
        </p>

        <p>
          <strong>Role:</strong>
          {" "}
          Team Member
        </p>

      </div>

    </div>
  );
}

export default Profile;
