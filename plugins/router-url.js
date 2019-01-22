import Vue from 'vue';
import routerBaseUrl from '~/router-base-url';

Vue.filter('routerUrl', function(val) {
    return routerBaseUrl + val;
});