import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const userTypeValues = [
  { value: 'contractor', label: 'Contractor' },
  { value: 'applicant', label: 'Property owner' },
  { value: 'lender', label: 'Lender' },
];

const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#993333',
    primary75: '#c55252',
    primary50: '#d88c8c',
    primary25: '#ebc5c5',
  }
})

const GenericSignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState(userTypeValues[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    setLoading(true);
    setError('');

    const variables = {
      input: {
        fullName: name,
        email,
        password,
        userType: userType.value,
      }
    };

    try {
      const { data } = await axios({
        url: 'https://app.unety.io/graphql',
        method: 'post',
        data: {
          variables,
          query: `mutation ExternalSignUp($input: ExternalSignUpInput!) {
            externalSignUp(input: $input) {
              magicLink
            }
          }
          `
        }
      })

      window.location.href = data.data.externalSignUp.magicLink;

    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="contractor-signup-form">
      <form onSubmit={handleFormSubmit}>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Name</label>
          <input
            required
            className="contractor-signup-form__input"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={(evt) => setName(evt.target.value)}
            value={name}

          />
        </div>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Email</label>
          <input
            required
            className="contractor-signup-form__input"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={(evt) => setEmail(evt.target.value)}
            value={email}
          />
        </div>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Password</label>
          <input
            required
            className="contractor-signup-form__input"
            type="password"
            name="password"
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
          />
        </div>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Role</label>
          <Select
            required
            theme={selectTheme}
            value={userType}
            onChange={(value) => {
              console.log(value);
              setUserType(value)
            }}
            options={userTypeValues}
          />
        </div>

       {/* <button
          className="contractor-signup-form__submit"
          disabled={loading}
          type="submit"
        >
          Get Started
          </button> */}

        {error && (
          <p className="contractor-signup-form__error">
            {error}
          </p>
        )}
      </form>
    </div>
  )
};

export default GenericSignUpForm

