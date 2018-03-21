import _ from 'lodash';
import React, { Component } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livedb: true,
      accounts: []
    };
  }

  componentDidMount() {
    fetch('/api/fetch-all-accounts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(accounts => {
        if(accounts.livedb === false) {
          this.setState({
            livedb: false
          });
        } else {
          this.setState({
            accounts: accounts
          });
        }
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      });
  }

  render() {

    const accounts = _.map(this.state.accounts, (account, index) => {
      return (
        <div className="dt-row hover-bg-lightest-silver" key={`account-${index}`}>
          <div className="dtc pv3 f4 bb b--light-silver">
            { account.name }
          </div>
          <div className="dtc pv3 f4 gray bb b--light-silver">
            <a href={ account.website }>{ account.website }</a>
          </div>
          <div className="dtc pv3 f4 gray bb b--light-silver">
            { account.billingcity }
          </div>
          <div className="dtc pv3 f4 gray bb b--light-silver">
            <Link to={`/accounts/${ account.id }`}>Show</Link>
          </div>
          <div className="dtc pv3 f4 gray bb b--light-silver">
            <Link to={`/accounts/${ account.id }/edit`}>Edit</Link>
          </div>
        </div>
      );
    });

    let livedbMessage = '';

    if(this.state.livedb === false) {
      livedbMessage = (
        <div className="mb3 has-focus sortable-chosen">
          <div className="bt bb pa2 bg-lightest-red red b--light-red white">
            <div className="f4 b">
              A database doesn't exist yet.
            </div>
          </div>
        </div>);
    }

    return (
      <div>
        <header className="bg-gradient-primary h5">
          <div className="tc">
            <div className="washed-blue heading">Account List</div>
          </div>
        </header>
        <div>
          <div className="tc">
            <div className="purple subheading">Listing Accounts from Salesforce Org</div>
          </div>
        </div>
        <div>
          { livedbMessage }
        </div>
        <div>
          <Link to="/accounts/new">Create New Account</Link>
        </div>
        <div>
          <div className="dt w-100 mb3 has-focus hk-hide-bb-last-row sortable-chosen">
            <div className="dtc pv3 b bb b--light-silver dark-gray f5">
              Account Name
            </div>
            <div className="dtc pv3 b bb b--light-silver dark-gray f5">
              Website
            </div>
            <div className="dtc pv3 b bb b--light-silver dark-gray f5">
              City
            </div>
            <div className="dtc pv3 b bb b--light-silver dark-gray f5">
            </div>
            <div className="dtc pv3 b bb b--light-silver dark-gray f5">
            </div>
            { accounts }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
