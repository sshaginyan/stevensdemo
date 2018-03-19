import _ from 'lodash';
import React, { Component } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

class ShowAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: {}
    };
  }

  componentDidMount() {
    const id = _.get(this.props, 'match.params.id');
    fetch(`/api/fetch-account/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(account => {
        this.setState({
          account
        });
      }).catch(e => {
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
          <div className="dt w-100 mb3 has-focus hk-hide-bb-last-row sortable-chosen">
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Name:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.name }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Phone Number:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.phone }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Website:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.website }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Steet Address:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.billingstreet }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                City:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.billingcity }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                State:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.billingstate }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Postal Code:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.billingpostalcode }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Country:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.billingcountry }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Description:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.description }
              </div>
            </div>
            <div className="dt-row hover-bg-lightest-silver">
              <div className="dtc pv3 f4 gray bb b--light-silver">
                Last Modified:
              </div>
              <div className="dtc pv3 f4 bb b--light-silver">
                { account.lastmodifieddate }
              </div>
            </div>
          </div>
        </div>
        <Link to={`/accounts/${this.state.account.id}/edit`}>Edit</Link> |
        <Link to="/">List All Accounts</Link>
      </div>
    );
  }
}

export default ShowAccount;
