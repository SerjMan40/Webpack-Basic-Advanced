import * as $ from 'jquery';
import '@css/style.css';
import Post from './model/post';
import json from '@assets/data';
import logo from '@assets/webpack_plain_logo_icon_146297.png';
import xml from '@assets/data.xml';
import csv from '@assets/data.csv';

const post = new Post('Webpack Post Title!', logo);

$('pre').html(post.toString());

console.log('xml', xml);
console.log('csv', csv);
