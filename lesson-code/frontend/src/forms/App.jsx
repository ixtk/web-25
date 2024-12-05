import "./App.css";

export const ProfileControlledInputs = () => {
  return (
    <div className="container">
      <form>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input type="url" />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea />
          </div>
          <div className="button-container">
            <button>Save profile</button>
            <button>Reset all</button>
          </div>
        </fieldset>
      </form>
      <div className="user-card">
        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
        <h1></h1>
        <p></p>
      </div>
    </div>
  );
};
