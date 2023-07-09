import React from 'react'
import { CATEGORY_BG } from './colors'

const Screen = () => {
  return (
    <div className="row my-3">
      <div className="col-sm-3 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body" style={{backgroundColor:CATEGORY_BG["Revnue"]}}>
            <h5 className="card-title">Total Revenus</h5>
            <p className="card-text">$2,129,430</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body" style={{backgroundColor:CATEGORY_BG["Transaction"]}}>
            <h5 className="card-title">Total Transactions</h5>
            <p className="card-text">1,520</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body" style={{backgroundColor:CATEGORY_BG["Likes"]}}>
            <h5 className="card-title">Total Likes</h5>
            <p className="card-text">9,721</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body" style={{backgroundColor:CATEGORY_BG["Users"]}}>
            <h5 className="card-title">Total Users</h5>
            <p className="card-text">892</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen
