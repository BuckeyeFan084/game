
import './styles.css';
import { ready } from './util';
import { runApp } from './app';

function doIt() {
    console.log('ready to party');
}

ready(runApp);
