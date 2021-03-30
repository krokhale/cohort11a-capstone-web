import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./dashboard";

import React, {useEffect, useState} from "react";

import { Button, List, Collapse, Breadcrumb, Row, Col } from 'antd';
const { Panel } = Collapse;



function Auth () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const onSignIn = async () => {

    };

    const onSignUp = async () => {

    };

    return (
        <div>
            <form onSubmit={onSignIn}>
                <Row type={'flex'} align={'center'} className={'mt-5'}>
                    <Col span={24}>
                        <input type="email" value={email} onChange={(ev) => setEmail(ev.currentTarget.value)} required className={'border w-full rounded'} placeholder={'Email address'}/>
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={password} onChange={(ev) => setPassword(ev.currentTarget.value)} required className={'border w-full rounded'} placeholder={'Password'}/>
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <Button htmlType={'submit'} className={'border-0 bg-edorble-yellow-500 hover:bg-edorble-yellow-600 hover:text-black w-full rounded font-bold'}>Submit</Button>
                    </Col>
                </Row>
            </form>

            <form onSubmit={onSignUp}>
                <Row type={'flex'} align={'center'} className={'mt-5'}>
                    <Col span={24}>
                        <input type="email" value={email} onChange={(ev) => setEmail(ev.currentTarget.value)} required className={'border w-full rounded'} placeholder={'Email address'}/>
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={password} onChange={(ev) => setPassword(ev.currentTarget.value)} required className={'border w-full rounded'} placeholder={'Password'}/>
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={retypePassword} onChange={(ev) => setRetypePassword(ev.currentTarget.value)} required className={'border-0 w-full rounded'} placeholder={'Retype Password'}/>
                        {(password != retypePassword) && <small className={'text-red-500 font-bold'}>Passwords don't match</small>}
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <Button  htmlType={'submit'} disabled={password != retypePassword} className={'border-0 bg-edorble-yellow-500 hover:bg-edorble-yellow-600 hover:text-black w-full rounded font-bold'}>Submit</Button>
                        {/*<Button loading={loading} disabled={password != retypePassword} type="primary" htmlType={'submit'} className={'border-0 w-full rounded font-bold'}>Submit</Button>*/}
                    </Col>
                </Row>
            </form>

        </div>
    )
}

function App() {


  return (
      <Router>
          <div>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/dashboard">
                      <Dashboard />
                  </Route>
                  <Route path="/">
                      <Auth />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
