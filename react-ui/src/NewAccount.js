import _ from 'lodash';
import React, { Component } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

class NewAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: {}
    };

    this.submit = _.bind(this.submit, this);
    this.inputOnChange = _.bind(this.inputOnChange, this);
  }

  inputOnChange(event) {
    const newState = _.cloneDeep(this.state);
    newState.account[event.target.id] = event.target.value;
    this.setState(newState);
  }

  submit(event) {
    event.preventDefault();
    fetch('/api/upsert-account', {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.account)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }

        this.props.history.push('/');
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      });
  }

  render() {
    const { account } = this.state;

    return (
      <div>
        <header className="bg-gradient-primary h5">
          <div className="tc">
            <div className="washed-blue heading">Account List</div>
          </div>
        </header>
        <div>
          <form onSubmit={this.submit}>
          <div className="dt w-100 mb3 has-focus hk-hide-bb-last-row sortable-chosen">
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Name:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="name" value={account.name || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Phone Number:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="phone" value={account.phone || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Website:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="website" value={account.website || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Steet Address:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="billingstreet" value={account.billingstreet || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                City:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="billingcity" value={account.billingcity || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                State:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="billingstate" value={account.billingstate || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Postal Code:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="billingpostalcode" value={account.billingpostalcode || ''} onChange={this.inputOnChange} />
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Country:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                <input className="hk-input" id="billingcountry" value={account.billingcountry || ''} onChange={this.inputOnChange} />
              </div>
            </div>
          </div>
          <button className="hk-button--primary">Save</button>
          </form>
        </div>
        <Link to="/">List All Accounts</Link>
      </div>
    );
  }
}

export default NewAccount;
