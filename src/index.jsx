import * as $ from 'jquery';
import Post from './model/post';
import '@model/lodash';
import json from '@assets/data';
import logo from '@assets/webpack_plain_logo_icon_146297.png';
import xml from '@assets/data.xml';
import csv from '@assets/data.csv';

import '@css/style.css';
import './less/style.less';
import './sass/style.scss';
import './sass/style.sass';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

const post = new Post('Webpack Post Title!', logo);

$('pre').addClass('code').html(post.toString());

console.log('json', json);
console.log('xml', xml);
console.log('csv', csv);

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000));
}

start().then((res) => console.log(res));

class Util {
  static id = Date.now();
}
console.log('Util Id:', Util.id);

const App = () => (
  <div className='container'>
    <h1>Webpack training</h1>
    <div className='logo' />
    <pre />
    <div className='less-demo'>
      <h2>Less</h2>
    </div>
    <div className='scss-demo'>
      <h2>Scss</h2>
    </div>
    <div className='sass-demo'>
      <h2>Sass</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

setTimeout(() => {
  $('pre').addClass('code').html(post.toString());
}, 1500);
