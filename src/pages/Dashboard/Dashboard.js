import React, { Component } from 'react';

import {
  Row,
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap';

import {
  Placard,
} from '../../components/Placard';

import DataTable from '../../components/DataTable';
import Subheader from '../../components/Subheader';

let dataCards = [
  {
    'id': 1,
    'name': 'positive',
    'icon': 'biohazard',
    'label': "Tested Positive",
    'code': '<svg class="icon icon-biohazard" viewBox="0 0 576 512"><path d="M288.1 96c17.7 0 34.8 2.7 50.9 7.6 6.5-8.5 11.1-18.4 13.1-29.4-20.2-6.5-41.7-10.1-64-10.1-22.4 0-44 3.7-64.2 10.2 1.9 11 6.6 21 13.1 29.4 16.2-5 33.3-7.7 51.1-7.7zm-.1 144.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM146.1 423.6c9.7-5.6 17.2-13.6 22.6-22.7-28.5-26.4-48.2-62.2-54.4-102.4-.4 0-.8-.2-1.2-.2-10.4 0-20.7 2.9-30 7.9 7.7 46 30.4 86.9 63 117.4zm428.6-147c-13.8-40.3-41.2-74.1-77.2-95.3-12.2-7.2-25.6-12.8-40.1-16.7 3.5-13.9 5.2-27.4 5.2-40.8 0-42.2-15.1-83.2-42.4-115.5-7.3-8.6-19.7-10.9-29.7-5.2-9.7 5.6-14.1 17.4-10.6 27.9 3.7 11.3 5.5 21.5 5.5 31.1 0 54.7-43.6 99.3-97.3 99.3s-97.3-44.5-97.3-99.3c0-9.6 1.8-19.8 5.4-31 3.5-10.7-.9-22.5-10.7-28-9.8-5.6-22.2-3.5-29.6 5.2-27.4 32.3-42.5 73.3-42.5 115.5 0 13.4 1.7 26.9 5.2 40.8-14.5 4-27.9 9.6-40.1 16.7-36 21.1-63.4 55-77.2 95.3-3.7 10.6.5 22.2 10.2 28.1 9.7 5.8 22.2 3.8 29.7-4.8 7.7-8.8 15.4-15.5 23.6-20.3 22.3-13.1 48.3-16.6 73.2-9.9 25.3 6.8 46.4 23.2 59.5 46.2 26.9 47.5 10.9 108.4-35.7 135.8-8.2 4.8-17.7 8.3-29 10.7-11 2.3-18.8 12.1-18.7 23.4.1 11.2 8.1 20.9 19.1 23.1 11 2.1 22.1 3.2 33.1 3.2 30.4 0 60.4-8 86.9-23.6 12.5-7.3 24.1-16.5 34.7-27.3 10.7 10.9 22.3 20 34.7 27.3 36 21.2 78.6 28.5 119.9 20.4 11.1-2.1 18.9-11.6 19.1-23.1.1-11.3-7.8-21.1-18.7-23.4-11.4-2.4-20.8-5.9-29-10.7-46.6-27.4-62.6-88.3-35.7-135.8 13.1-23 34.2-39.4 59.5-46.2 24.9-6.7 50.9-3.2 73.2 9.9 8.2 4.8 15.9 11.4 23.6 20.3 7.5 8.6 20 10.5 29.8 4.7 9.9-5.9 14-17.4 10.4-28zm-145.1-37.8c-33.7 9-61.7 30.8-79 61.3-35.6 62.6-14.3 143 47.2 179.1.2.1.3.2.4.2-20.8-1.7-41.1-8-59.3-18.7-14.1-8.3-27-19.7-38.4-33.8L288 411.5 275.5 427c-11.4 14.1-24.3 25.5-38.4 33.8-18.2 10.7-38.5 17-59.3 18.7.1-.1.3-.2.4-.2 61.6-36.2 82.8-116.5 47.3-179.1-17.3-30.5-45.4-52.3-79.1-61.3-11-3-22.2-4.4-33.2-4.4-22.3 0-44.3 5.9-64.1 17.4C61 234.4 76.5 219.7 94.7 209c13.9-8.1 29.2-13.6 46.9-16.7l18.5-3.2-6.1-17.8c-5.7-16.7-8.6-32.2-8.6-47.5 0-21.1 4.6-41.9 13.3-60.9.4 72 58.2 130.5 129.3 130.5 71 0 128.9-58.5 129.3-130.5 8.7 19 13.3 39.8 13.3 60.9 0 15.2-2.8 30.7-8.5 47.5L416 189l18.5 3.2c17.7 3.1 33 8.5 46.9 16.7 18.2 10.7 33.7 25.4 45.6 42.9-29.7-17.2-64.3-21.9-97.4-13zm32.3 59.8c-6.2 40.2-25.9 76-54.5 102.5 5.5 9.1 12.9 17.1 22.5 22.8 32.7-30.5 55.4-71.4 63.1-117.4-9.4-5.1-19.7-8-30.2-8-.3 0-.6.1-.9.1z"/></svg>',
    'viewBox': '0 0 576 512',
    'path': 'M288.1 96c17.7 0 34.8 2.7 50.9 7.6 6.5-8.5 11.1-18.4 13.1-29.4-20.2-6.5-41.7-10.1-64-10.1-22.4 0-44 3.7-64.2 10.2 1.9 11 6.6 21 13.1 29.4 16.2-5 33.3-7.7 51.1-7.7zm-.1 144.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM146.1 423.6c9.7-5.6 17.2-13.6 22.6-22.7-28.5-26.4-48.2-62.2-54.4-102.4-.4 0-.8-.2-1.2-.2-10.4 0-20.7 2.9-30 7.9 7.7 46 30.4 86.9 63 117.4zm428.6-147c-13.8-40.3-41.2-74.1-77.2-95.3-12.2-7.2-25.6-12.8-40.1-16.7 3.5-13.9 5.2-27.4 5.2-40.8 0-42.2-15.1-83.2-42.4-115.5-7.3-8.6-19.7-10.9-29.7-5.2-9.7 5.6-14.1 17.4-10.6 27.9 3.7 11.3 5.5 21.5 5.5 31.1 0 54.7-43.6 99.3-97.3 99.3s-97.3-44.5-97.3-99.3c0-9.6 1.8-19.8 5.4-31 3.5-10.7-.9-22.5-10.7-28-9.8-5.6-22.2-3.5-29.6 5.2-27.4 32.3-42.5 73.3-42.5 115.5 0 13.4 1.7 26.9 5.2 40.8-14.5 4-27.9 9.6-40.1 16.7-36 21.1-63.4 55-77.2 95.3-3.7 10.6.5 22.2 10.2 28.1 9.7 5.8 22.2 3.8 29.7-4.8 7.7-8.8 15.4-15.5 23.6-20.3 22.3-13.1 48.3-16.6 73.2-9.9 25.3 6.8 46.4 23.2 59.5 46.2 26.9 47.5 10.9 108.4-35.7 135.8-8.2 4.8-17.7 8.3-29 10.7-11 2.3-18.8 12.1-18.7 23.4.1 11.2 8.1 20.9 19.1 23.1 11 2.1 22.1 3.2 33.1 3.2 30.4 0 60.4-8 86.9-23.6 12.5-7.3 24.1-16.5 34.7-27.3 10.7 10.9 22.3 20 34.7 27.3 36 21.2 78.6 28.5 119.9 20.4 11.1-2.1 18.9-11.6 19.1-23.1.1-11.3-7.8-21.1-18.7-23.4-11.4-2.4-20.8-5.9-29-10.7-46.6-27.4-62.6-88.3-35.7-135.8 13.1-23 34.2-39.4 59.5-46.2 24.9-6.7 50.9-3.2 73.2 9.9 8.2 4.8 15.9 11.4 23.6 20.3 7.5 8.6 20 10.5 29.8 4.7 9.9-5.9 14-17.4 10.4-28zm-145.1-37.8c-33.7 9-61.7 30.8-79 61.3-35.6 62.6-14.3 143 47.2 179.1.2.1.3.2.4.2-20.8-1.7-41.1-8-59.3-18.7-14.1-8.3-27-19.7-38.4-33.8L288 411.5 275.5 427c-11.4 14.1-24.3 25.5-38.4 33.8-18.2 10.7-38.5 17-59.3 18.7.1-.1.3-.2.4-.2 61.6-36.2 82.8-116.5 47.3-179.1-17.3-30.5-45.4-52.3-79.1-61.3-11-3-22.2-4.4-33.2-4.4-22.3 0-44.3 5.9-64.1 17.4C61 234.4 76.5 219.7 94.7 209c13.9-8.1 29.2-13.6 46.9-16.7l18.5-3.2-6.1-17.8c-5.7-16.7-8.6-32.2-8.6-47.5 0-21.1 4.6-41.9 13.3-60.9.4 72 58.2 130.5 129.3 130.5 71 0 128.9-58.5 129.3-130.5 8.7 19 13.3 39.8 13.3 60.9 0 15.2-2.8 30.7-8.5 47.5L416 189l18.5 3.2c17.7 3.1 33 8.5 46.9 16.7 18.2 10.7 33.7 25.4 45.6 42.9-29.7-17.2-64.3-21.9-97.4-13zm32.3 59.8c-6.2 40.2-25.9 76-54.5 102.5 5.5 9.1 12.9 17.1 22.5 22.8 32.7-30.5 55.4-71.4 63.1-117.4-9.4-5.1-19.7-8-30.2-8-.3 0-.6.1-.9.1z"/>',
  }, {
    'id': 2,
    'name': 'negative',
    'icon': 'thumbsUp',
    'label': "Tested Negative",
    'code': '<svg class="icon icon-thumbs-up" viewBox="0 0 512 512"><path d="M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"/></svg>',
    'viewBox': '0 0 512 512',
    'path': 'M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"/>',
  }, {
    'id': 3,
    'name': 'pending',
    'icon': 'clock',
    'label': "Test Pending",
    'code': '<svg class="icon icon-clock" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>',
    'viewBox': '0 0 512 512',
    'path': 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"/>',
  }, {
    'id': 4,
    'name': 'hospitalizedCurrently',
    'icon': 'hospital',
    'label': "In Hospital",
    'code': '<svg class="icon icon-hospital" viewBox="0 0 448 512"><path d="M180 352h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm88 0h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-128-96h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm128 0h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 256H0v-20c0-6.627 5.373-12 12-12h20V85c0-11.598 10.745-21 24-21h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88c13.255 0 24 9.402 24 21v395h20c6.627 0 12 5.373 12 12v20zM64 480h128v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84h128V96h-80v40c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24V96H64v384zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"/></svg>',
    'viewBox': '0 0 448 512',
    'path': 'M180 352h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm88 0h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-128-96h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm128 0h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 256H0v-20c0-6.627 5.373-12 12-12h20V85c0-11.598 10.745-21 24-21h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88c13.255 0 24 9.402 24 21v395h20c6.627 0 12 5.373 12 12v20zM64 480h128v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84h128V96h-80v40c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24V96H64v384zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"/>',
  }, {
    'id': 5,
    'name': 'hospitalizedCumulative',
    'icon': 'hospitalAlt',
    'label': "In Hospital (cumulative)",
    'code': '<svg class="icon icon-hospital-alt" viewBox="0 0 576 512"><path d="M468 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM308 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM148 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm182-144h-26V86c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v26h-26c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h26v26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26h26c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6zm198 16H416V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v328c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V176c0-8.8 7.2-16 16-16h144V48c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v112h144c8.8 0 16 7.2 16 16v328c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V176c0-26.5-21.5-48-48-48z"/></svg>',
    'viewBox': '0 0 576 512',
    'path': 'M468 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM308 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM148 384h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-128h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm182-144h-26V86c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v26h-26c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h26v26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26h26c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6zm198 16H416V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v328c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V176c0-8.8 7.2-16 16-16h144V48c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v112h144c8.8 0 16 7.2 16 16v328c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V176c0-26.5-21.5-48-48-48z"/>',
  }, {
    'id': 6,
    'name': 'inIcuCurrently',
    'icon': 'procedures',
    'label': "In ICU",
    'code': '<svg class="icon icon-procedures" viewBox="0 0 640 512"><path d="M144 384c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm384-32H272c-8.8 0-16 7.2-16 16v176H32V136c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h576v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V336c0-61.9-50.1-112-112-112zm80 192H288V256h240c44.2 0 80 35.8 80 80v80zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>',
    'viewBox': '0 0 640 512',
    'path': 'M144 384c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm384-32H272c-8.8 0-16 7.2-16 16v176H32V136c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h576v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V336c0-61.9-50.1-112-112-112zm80 192H288V256h240c44.2 0 80 35.8 80 80v80zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/>',
  }, {
    'id': 7,
    'name': 'inIcuCumulative',
    'icon': 'bed',
    'label': "In ICU (cumulative)",
    'code': '<svg class="icon icon-bed" viewBox="0 0 640 512"><path d="M144 320c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm0-128c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48zm384-32H272c-8.84 0-16 7.16-16 16v176H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v368c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h576v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V272c0-61.86-50.14-112-112-112zm80 192H288V192h240c44.11 0 80 35.89 80 80v80z"/></svg>',
    'viewBox': '0 0 640 512',
    'path': 'M144 320c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm0-128c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48zm384-32H272c-8.84 0-16 7.16-16 16v176H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v368c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h576v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V272c0-61.86-50.14-112-112-112zm80 192H288V192h240c44.11 0 80 35.89 80 80v80z"/>',
  }, {
    'id': 8,
    'name': 'onVentilatorCurrently',
    'icon': 'lungsVirus',
    'label': "On Ventilator",
    'code': '<svg class="icon icon-lungs-virus" viewBox="0 0 640 512"><path d="M421.83,421.83a16,16,0,0,0,0-22.62l-8.57-8.58C393.1,370.47,407.38,336,435.88,336H448a16,16,0,0,0,0-32H435.88c-28.5,0-42.78-34.47-22.62-54.63l8.57-8.57a16,16,0,0,0-22.62-22.63l-8.58,8.58a31.31,31.31,0,0,1-22.39,9.44c-16.45,0-32.23-12.78-32.23-32.07V192a16,16,0,0,0-32,0v12.12c0,19.29-15.78,32.07-32.23,32.07a31.35,31.35,0,0,1-22.4-9.44l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H192a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.58a16,16,0,1,0,22.63,22.62l8.57-8.58a31.38,31.38,0,0,1,22.4-9.43c16.45,0,32.23,12.77,32.23,32.06V448a16,16,0,0,0,32,0V435.88c0-19.29,15.78-32.06,32.23-32.06a31.31,31.31,0,0,1,22.39,9.43l8.58,8.58a16,16,0,0,0,22.62,0Zm-45.07-78.32A64,64,0,0,0,372,371.93c-1.24-.08-2.48-.11-3.73-.11A64.15,64.15,0,0,0,320,393.62a64.17,64.17,0,0,0-48.23-21.8c-1.25,0-2.5,0-3.74.11A64.33,64.33,0,0,0,246.52,320,64.33,64.33,0,0,0,268,268.08c1.24.07,2.49.11,3.74.11A64.2,64.2,0,0,0,320,246.39a64.18,64.18,0,0,0,48.23,21.8c1.25,0,2.49,0,3.73-.11A64.38,64.38,0,0,0,393.5,320,64.11,64.11,0,0,0,376.76,343.51ZM304,288a16,16,0,1,0,16,16A16,16,0,0,0,304,288Zm32,32a16,16,0,1,0,16,16A16,16,0,0,0,336,320ZM204.13,272l-.15-.15-.23.15ZM336,147V8a8,8,0,0,0-8-8H312a8,8,0,0,0-8,8V147a44.88,44.88,0,0,1,32,0ZM201.16,449.07a67.76,67.76,0,0,1-24.57,12.48C112.18,478.8,110.54,480,98.12,480,61.69,480,32,453,32,419.8a83.14,83.14,0,0,1,2.82-21.39,788.37,788.37,0,0,1,98.12-222C160.76,132.45,165.09,128,186.07,128s38.08,15.1,38.08,33.7V182a43.15,43.15,0,0,1,32,7.56V161.7c0-36.28-31.38-65.7-70.11-65.7-44,0-58,28.56-80.09,63.12a820.64,820.64,0,0,0-102.08,231A114.64,114.64,0,0,0,0,419.8C0,472.11,45.66,512,98.12,512c18.11,0,24.47-2.88,86.75-19.55a98.18,98.18,0,0,0,52.57-34.71,45.76,45.76,0,0,1-36.28-8.67Zm434.93-58.91A820.61,820.61,0,0,0,534,159.12C511.88,124.56,497.93,96,453.91,96c-38.72,0-70.11,29.42-70.11,65.7v27.91a47.62,47.62,0,0,1,26.72-8.12,46.57,46.57,0,0,1,5.31.52V161.7c0-18.58,17.08-33.7,38.08-33.7s25.31,4.44,53.12,48.37a789.06,789.06,0,0,1,98.13,222A101.48,101.48,0,0,1,608,419.78C608,453,578.3,480,541.86,480c-12.42,0-14.06-1.2-78.45-18.45a67.76,67.76,0,0,1-24.56-12.46,45.79,45.79,0,0,1-36.29,8.67,98.15,98.15,0,0,0,52.57,34.71C517.39,509.12,523.77,512,541.86,512c52.47,0,98.14-39.89,98.14-92.2A115.09,115.09,0,0,0,636.09,390.16ZM435.88,272h.36l-.21-.14Z"/></svg>',
    'viewBox': '0 0 640 512',
    'path': 'M421.83,421.83a16,16,0,0,0,0-22.62l-8.57-8.58C393.1,370.47,407.38,336,435.88,336H448a16,16,0,0,0,0-32H435.88c-28.5,0-42.78-34.47-22.62-54.63l8.57-8.57a16,16,0,0,0-22.62-22.63l-8.58,8.58a31.31,31.31,0,0,1-22.39,9.44c-16.45,0-32.23-12.78-32.23-32.07V192a16,16,0,0,0-32,0v12.12c0,19.29-15.78,32.07-32.23,32.07a31.35,31.35,0,0,1-22.4-9.44l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H192a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.58a16,16,0,1,0,22.63,22.62l8.57-8.58a31.38,31.38,0,0,1,22.4-9.43c16.45,0,32.23,12.77,32.23,32.06V448a16,16,0,0,0,32,0V435.88c0-19.29,15.78-32.06,32.23-32.06a31.31,31.31,0,0,1,22.39,9.43l8.58,8.58a16,16,0,0,0,22.62,0Zm-45.07-78.32A64,64,0,0,0,372,371.93c-1.24-.08-2.48-.11-3.73-.11A64.15,64.15,0,0,0,320,393.62a64.17,64.17,0,0,0-48.23-21.8c-1.25,0-2.5,0-3.74.11A64.33,64.33,0,0,0,246.52,320,64.33,64.33,0,0,0,268,268.08c1.24.07,2.49.11,3.74.11A64.2,64.2,0,0,0,320,246.39a64.18,64.18,0,0,0,48.23,21.8c1.25,0,2.49,0,3.73-.11A64.38,64.38,0,0,0,393.5,320,64.11,64.11,0,0,0,376.76,343.51ZM304,288a16,16,0,1,0,16,16A16,16,0,0,0,304,288Zm32,32a16,16,0,1,0,16,16A16,16,0,0,0,336,320ZM204.13,272l-.15-.15-.23.15ZM336,147V8a8,8,0,0,0-8-8H312a8,8,0,0,0-8,8V147a44.88,44.88,0,0,1,32,0ZM201.16,449.07a67.76,67.76,0,0,1-24.57,12.48C112.18,478.8,110.54,480,98.12,480,61.69,480,32,453,32,419.8a83.14,83.14,0,0,1,2.82-21.39,788.37,788.37,0,0,1,98.12-222C160.76,132.45,165.09,128,186.07,128s38.08,15.1,38.08,33.7V182a43.15,43.15,0,0,1,32,7.56V161.7c0-36.28-31.38-65.7-70.11-65.7-44,0-58,28.56-80.09,63.12a820.64,820.64,0,0,0-102.08,231A114.64,114.64,0,0,0,0,419.8C0,472.11,45.66,512,98.12,512c18.11,0,24.47-2.88,86.75-19.55a98.18,98.18,0,0,0,52.57-34.71,45.76,45.76,0,0,1-36.28-8.67Zm434.93-58.91A820.61,820.61,0,0,0,534,159.12C511.88,124.56,497.93,96,453.91,96c-38.72,0-70.11,29.42-70.11,65.7v27.91a47.62,47.62,0,0,1,26.72-8.12,46.57,46.57,0,0,1,5.31.52V161.7c0-18.58,17.08-33.7,38.08-33.7s25.31,4.44,53.12,48.37a789.06,789.06,0,0,1,98.13,222A101.48,101.48,0,0,1,608,419.78C608,453,578.3,480,541.86,480c-12.42,0-14.06-1.2-78.45-18.45a67.76,67.76,0,0,1-24.56-12.46,45.79,45.79,0,0,1-36.29,8.67,98.15,98.15,0,0,0,52.57,34.71C517.39,509.12,523.77,512,541.86,512c52.47,0,98.14-39.89,98.14-92.2A115.09,115.09,0,0,0,636.09,390.16ZM435.88,272h.36l-.21-.14Z"/>',
  }, {
    'id': 9,
    'name': 'onVentilatorCumulative',
    'icon': 'lungs',
    'label': "On Ventilator (cumulative)",
    'code': '<svg class="icon icon-lungs" viewBox="0 0 640 512"><path d="M636.11 390.15c-21.68-81.3-56.08-159.15-102.08-231.02C511.89 124.56 497.93 96 453.92 96c-38.72 0-70.1 29.42-70.1 65.71v75.36l-47.81-31.85V8c0-4.42-3.59-8-8.01-8h-16.01c-4.42 0-8.01 3.58-8.01 8v197.22l-47.81 31.85v-75.36c0-36.29-31.38-65.71-70.1-65.71-44.01 0-57.97 28.56-80.1 63.13-46 71.87-80.4 149.72-102.08 231.02C1.3 399.84 0 409.79 0 419.79 0 472.11 45.66 512 98.13 512c18.1 0 24.47-2.87 86.74-19.55 42.21-11.3 71.31-47.47 71.31-88.61v-89.87l-32.02 21.33v68.54c0 26.47-19.56 50.2-47.57 57.7C112.18 478.79 110.55 480 98.13 480c-36.45 0-66.11-27.01-66.11-60.21 0-7.2.95-14.4 2.81-21.39 20.85-78.18 53.86-152.87 98.12-222.01 27.82-43.94 32.14-48.38 53.13-48.38 21 0 38.08 15.12 38.08 33.71v96.69l-98.51 65.63c-3.68 2.45-4.67 7.42-2.22 11.1l8.88 13.31c2.45 3.68 7.42 4.67 11.1 2.22L320 233.01l176.59 117.65c3.68 2.45 8.65 1.46 11.1-2.22l8.88-13.31a8.006 8.006 0 0 0-2.22-11.1l-98.51-65.63v-96.69c0-18.59 17.08-33.71 38.08-33.71 20.99 0 25.31 4.44 53.13 48.38 44.25 69.14 77.27 143.84 98.12 222.01a83.248 83.248 0 0 1 2.81 21.39c0 33.2-29.66 60.21-66.11 60.21-12.42 0-14.05-1.21-78.45-18.46-28.01-7.5-47.57-31.23-47.57-57.7V335.3l-32.02-21.33v89.87c0 41.15 29.1 77.31 71.31 88.61 62.27 16.68 68.64 19.55 86.74 19.55 52.47 0 98.13-39.89 98.13-92.21-.01-10-1.31-19.95-3.9-29.64z"/></svg>',
    'viewBox': '0 0 640 512',
    'path': 'M636.11 390.15c-21.68-81.3-56.08-159.15-102.08-231.02C511.89 124.56 497.93 96 453.92 96c-38.72 0-70.1 29.42-70.1 65.71v75.36l-47.81-31.85V8c0-4.42-3.59-8-8.01-8h-16.01c-4.42 0-8.01 3.58-8.01 8v197.22l-47.81 31.85v-75.36c0-36.29-31.38-65.71-70.1-65.71-44.01 0-57.97 28.56-80.1 63.13-46 71.87-80.4 149.72-102.08 231.02C1.3 399.84 0 409.79 0 419.79 0 472.11 45.66 512 98.13 512c18.1 0 24.47-2.87 86.74-19.55 42.21-11.3 71.31-47.47 71.31-88.61v-89.87l-32.02 21.33v68.54c0 26.47-19.56 50.2-47.57 57.7C112.18 478.79 110.55 480 98.13 480c-36.45 0-66.11-27.01-66.11-60.21 0-7.2.95-14.4 2.81-21.39 20.85-78.18 53.86-152.87 98.12-222.01 27.82-43.94 32.14-48.38 53.13-48.38 21 0 38.08 15.12 38.08 33.71v96.69l-98.51 65.63c-3.68 2.45-4.67 7.42-2.22 11.1l8.88 13.31c2.45 3.68 7.42 4.67 11.1 2.22L320 233.01l176.59 117.65c3.68 2.45 8.65 1.46 11.1-2.22l8.88-13.31a8.006 8.006 0 0 0-2.22-11.1l-98.51-65.63v-96.69c0-18.59 17.08-33.71 38.08-33.71 20.99 0 25.31 4.44 53.13 48.38 44.25 69.14 77.27 143.84 98.12 222.01a83.248 83.248 0 0 1 2.81 21.39c0 33.2-29.66 60.21-66.11 60.21-12.42 0-14.05-1.21-78.45-18.46-28.01-7.5-47.57-31.23-47.57-57.7V335.3l-32.02-21.33v89.87c0 41.15 29.1 77.31 71.31 88.61 62.27 16.68 68.64 19.55 86.74 19.55 52.47 0 98.13-39.89 98.13-92.21-.01-10-1.31-19.95-3.9-29.64z"/>',
  }, {
    'id': 10,
    'name': 'recovered',
    'icon': 'clipboardCheck',
    'label': "Recovered",
    'code': '<svg class="icon icon-clipboard-check" viewBox="0 0 384 512"><path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352zm-58.9-236.4c-4.7-4.7-12.3-4.7-17-.1L158.4 344.3 108 293.7c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17l67.4 67.6c4.7 4.7 12.3 4.7 17 0l134.8-133.7c4.7-4.7 4.7-12.3.1-17l-8.7-8.5z"/></svg>',
    'viewBox': '0 0 384 512',
    'path': 'M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352zm-58.9-236.4c-4.7-4.7-12.3-4.7-17-.1L158.4 344.3 108 293.7c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17l67.4 67.6c4.7 4.7 12.3 4.7 17 0l134.8-133.7c4.7-4.7 4.7-12.3.1-17l-8.7-8.5z"/>',
  }, {
    'id': 11,
    'name': 'death',
    'icon': 'tombstone',
    'label': "Deaths",
    'code': '<svg class="icon icon-tombstone" viewBox="0 0 512 512"><path d="M496 416h-48V200.05C448 94.92 366.99 3.24 261.9.09 153.17-3.17 64 84 64 192v224H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM96 192c0-88.22 71.78-160 160-160s160 71.78 160 160v224H96V192zm383.95 288H32.01l.04-32h447.94l-.04 32zM336.02 144h-32v-32c0-8.84-7.16-16-16-16h-64.01c-8.85 0-16 7.16-16 16v32h-32c-8.85 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h32v96c0 8.84 7.16 16 16 16h64.01c8.85 0 16-7.16 16-16v-96h32c8.85 0 16-7.16 16-16v-64c0-8.84-7.15-16-16-16zm-16 64h-48.01v112h-32V208H192v-32h48.01v-48h32v48h48.01v32z"/></svg>',
    'viewBox': '0 0 512 512',
    'path': 'M496 416h-48V200.05C448 94.92 366.99 3.24 261.9.09 153.17-3.17 64 84 64 192v224H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM96 192c0-88.22 71.78-160 160-160s160 71.78 160 160v224H96V192zm383.95 288H32.01l.04-32h447.94l-.04 32zM336.02 144h-32v-32c0-8.84-7.16-16-16-16h-64.01c-8.85 0-16 7.16-16 16v32h-32c-8.85 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h32v96c0 8.84 7.16 16 16 16h64.01c8.85 0 16-7.16 16-16v-96h32c8.85 0 16-7.16 16-16v-64c0-8.84-7.15-16-16-16zm-16 64h-48.01v112h-32V208H192v-32h48.01v-48h32v48h48.01v32z"/>',
  }, {
    'id': 12,
    'name': 'hospitalized',
    'icon': 'hospitalUser',
    'label': "Hospitalized",
    'code': '<svg class="icon icon-hospital-user" viewBox="0 0 640 512"><path d="M148 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm96-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm-52-256h26a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6h-26V70a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm288 192a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm0-160a64 64 0 1 1-64 64 64.07 64.07 0 0 1 64-64zm143.69 221.13C606.44 355.5 577 342 546.79 342 519 342 512 352 480 352s-38.95-10-66.79-10c-30.23 0-59.65 13.48-76.9 39.11A95.5 95.5 0 0 0 320 434.67V472a40 40 0 0 0 40 40h240a40 40 0 0 0 40-40v-37.33a95.5 95.5 0 0 0-16.31-53.54zM608 472a8 8 0 0 1-8 8H360a8 8 0 0 1-8-8v-37.33A63.61 63.61 0 0 1 362.85 399c10.53-15.64 29.35-25 50.36-25 21.8 0 30 10 66.79 10s45-10 66.79-10c21 0 39.83 9.34 50.36 25A63.61 63.61 0 0 1 608 434.67zM320 128v222.31a119.48 119.48 0 0 1 32-25V128a32 32 0 0 0-32-32h-16V32a32 32 0 0 0-32-32H80a32 32 0 0 0-32 32v64H32a32 32 0 0 0-32 32v376a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V128h48V32h192v96z"/></svg>',
    'viewBox': '0 0 640 512',
    'path': 'M148 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm96-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm-52-256h26a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6h-26V70a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm288 192a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm0-160a64 64 0 1 1-64 64 64.07 64.07 0 0 1 64-64zm143.69 221.13C606.44 355.5 577 342 546.79 342 519 342 512 352 480 352s-38.95-10-66.79-10c-30.23 0-59.65 13.48-76.9 39.11A95.5 95.5 0 0 0 320 434.67V472a40 40 0 0 0 40 40h240a40 40 0 0 0 40-40v-37.33a95.5 95.5 0 0 0-16.31-53.54zM608 472a8 8 0 0 1-8 8H360a8 8 0 0 1-8-8v-37.33A63.61 63.61 0 0 1 362.85 399c10.53-15.64 29.35-25 50.36-25 21.8 0 30 10 66.79 10s45-10 66.79-10c21 0 39.83 9.34 50.36 25A63.61 63.61 0 0 1 608 434.67zM320 128v222.31a119.48 119.48 0 0 1 32-25V128a32 32 0 0 0-32-32h-16V32a32 32 0 0 0-32-32H80a32 32 0 0 0-32 32v64H32a32 32 0 0 0-32 32v376a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V128h48V32h192v96z"/>',
  }, {
    'id': 13,
    'name': 'total',
    'icon': 'sigma',
    'label': "Total",
    'code': '<svg class="icon icon-sigma" viewBox="0 0 320 512"><path d="M296 160h16c4.42 0 8-3.58 8-8V96c0-17.67-14.32-32-31.99-32H33.39C22.2 64 11.2 69.12 5.19 78.56c-7.69 12.08-6.76 26.87 2.8 38.5L138.09 256 7.3 395.73c-8.81 10.77-9.82 25.69-2.07 37.78C11.3 442.96 22.38 448 33.61 448h254.4c17.67 0 31.99-14.33 31.99-32v-56c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v56l-256.65.81 130.07-138.92c11.53-12.28 11.53-31.5.03-43.77L32.05 96h255.96v56c0 4.42 3.58 8 7.99 8z"/></svg>',
    'viewBox': '0 0 320 512',
    'path': 'M296 160h16c4.42 0 8-3.58 8-8V96c0-17.67-14.32-32-31.99-32H33.39C22.2 64 11.2 69.12 5.19 78.56c-7.69 12.08-6.76 26.87 2.8 38.5L138.09 256 7.3 395.73c-8.81 10.77-9.82 25.69-2.07 37.78C11.3 442.96 22.38 448 33.61 448h254.4c17.67 0 31.99-14.33 31.99-32v-56c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v56l-256.65.81 130.07-138.92c11.53-12.28 11.53-31.5.03-43.77L32.05 96h255.96v56c0 4.42 3.58 8 7.99 8z"/>',
  }, {
    'id': 14,
    'name': 'totalTestResults',
    'icon': 'filesMedical',
    'label': "Total Tests",
    'code': '<svg class="icon icon-files-medical" viewBox="0 0 448 512"><path d="M433.94 65.94l-51.88-51.88A48 48 0 0 0 348.12 0H176a48 48 0 0 0-48 48v48H48a48 48 0 0 0-48 48v320a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-48h80a48 48 0 0 0 48-48V99.88a48 48 0 0 0-14.06-33.94zM352 32.49a15.88 15.88 0 0 1 7.43 4.2l51.88 51.88a16 16 0 0 1 4.2 7.43H352zM288 464a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h80v240a48 48 0 0 0 48 48h112zm128-96a16 16 0 0 1-16 16H176a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144v72a24.07 24.07 0 0 0 24 24h72zM314.67 182.67A6.67 6.67 0 0 0 308 176h-40a6.67 6.67 0 0 0-6.67 6.67v46.66h-46.66A6.67 6.67 0 0 0 208 236v40a6.67 6.67 0 0 0 6.67 6.67h46.66v46.66A6.67 6.67 0 0 0 268 336h40a6.67 6.67 0 0 0 6.67-6.67v-46.66h46.66A6.67 6.67 0 0 0 368 276v-40a6.67 6.67 0 0 0-6.67-6.67h-46.66z"/></svg>',
    'viewBox': '0 0 448 512',
    'path': 'M433.94 65.94l-51.88-51.88A48 48 0 0 0 348.12 0H176a48 48 0 0 0-48 48v48H48a48 48 0 0 0-48 48v320a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-48h80a48 48 0 0 0 48-48V99.88a48 48 0 0 0-14.06-33.94zM352 32.49a15.88 15.88 0 0 1 7.43 4.2l51.88 51.88a16 16 0 0 1 4.2 7.43H352zM288 464a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h80v240a48 48 0 0 0 48 48h112zm128-96a16 16 0 0 1-16 16H176a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144v72a24.07 24.07 0 0 0 24 24h72zM314.67 182.67A6.67 6.67 0 0 0 308 176h-40a6.67 6.67 0 0 0-6.67 6.67v46.66h-46.66A6.67 6.67 0 0 0 208 236v40a6.67 6.67 0 0 0 6.67 6.67h46.66v46.66A6.67 6.67 0 0 0 268 336h40a6.67 6.67 0 0 0 6.67-6.67v-46.66h46.66A6.67 6.67 0 0 0 368 276v-40a6.67 6.67 0 0 0-6.67-6.67h-46.66z"/>',
  }, 
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ isLoading: true });
    // US Current
    fetch(`https://covidtracking.com/api/v1/us/current.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({
          isLoading: false,
          data: data[0],  // cards
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error
        });
      });
  }

  render() {
    const { error, isLoading, data } = this.state;
    // const keys = Object.keys(data);
    // const vals = Object.values(data);
    if (error) {
      return (
        <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>
              Failed to load data
            </ToastHeader>
            <ToastBody>
              {error}
            </ToastBody>
          </Toast>
        </div>
      );
    } 
    if (isLoading) {
      return (
        <Spinner type="grow" color="primary" />
      );
    }
    // console.log(data);
    return (
      <> 
        <Subheader heading="Current" subheading="United States" />
        <Row className="d-sm-flex align-items-stretch justify-content-between mb-4">
          {dataCards.map((card, i) => (
            <Placard key={i}
              icon={card.icon}
              label={card.label}
              value={isNaN(data[card.name]) ? data[card.name] : data[card.name].toLocaleString()} 
              // label={item.title}
              // value={item.value} 
            />
          ))}
        </Row>
        <DataTable />
      </>
    );  
  }
}

export default Dashboard;