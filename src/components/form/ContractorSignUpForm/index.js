import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

const GRAPHQL_URL = 'https://app.unety.io/graphql';

const ContractorSignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      }
    }

    try {
      const { data } = await axios({
        url: GRAPHQL_URL,
        method: 'post',
        data: {
          variables,
          query: `mutation ContractorSignUp($input: ApplicantSignUpInput!) {
            contractorSignUp(input: $input) {
              magicLink
              errors {
                detail
              }
            }
          }
          `
        }
      })

      window.location.href = data.data.contractorSignUp.magicLink;

    } catch(e) {
      setLoading(false);
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
            onChange={(evt) => setName(evt.target.value) }
            value={name}
          />
        </div>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Email</label>
          <input
            required
            autoComplete="username"
            className="contractor-signup-form__input"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={(evt) => setEmail(evt.target.value) }
            value={email}
          />
        </div>
        <div className="contractor-signup-form__field">
          <label className="contractor-signup-form__label">Create a password</label>
          <input
            required
            autoComplete="new-password"
            className="contractor-signup-form__input"
            type="password"
            name="password"
            onChange={(evt) => setPassword(evt.target.value) }
            value={password}
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
            It looks like you already created an account.
          </p>
        )}
      </form>
      <div className={styles.signIn}>Already have an account? <a href="https://app.unety.io">Sign in</a></div>
    </div>
  )
};

export default ContractorSignUpForm

