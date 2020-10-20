/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Dashboard js
 */

!function ($) {
    "use strict";

    var Dashboard = function () {
    };


    //creates area chart
    Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 4,
            lineWidth: 2,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            resize: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: lineColors
        });
    },
        //creates Bar chart
        Dashboard.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                gridLineColor: '#eee',
                barSizeRatio: 0.4,
                resize: true,
                hideHover: 'auto',
                barColors: lineColors
            });
        },

        //creates Donut chart
        Dashboard.prototype.createDonutChart = function (element, data, colors) {
            Morris.Donut({
                element: element,
                data: data,
                resize: true,
                colors: colors,
            });
        },

        Dashboard.prototype.init = function () {

            //creating area chart
            var $areaData = [
                {y: '2009', a: 10, b: 20},
                {y: '2010', a: 75, b: 65},
                {y: '2011', a: 50, b: 40},
                {y: '2012', a: 75, b: 65},
                {y: '2013', a: 50, b: 40},
                {y: '2014', a: 75, b: 65},
                {y: '2015', a: 90, b: 60},
                {y: '2016', a: 90, b: 75}
            ];
            this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#ca6364', '#eb7475']);

            //creating bar chart
            var $barData = [
                {y: '2009', a: 100, b: 90},
                {y: '2010', a: 75, b: 65},
                {y: '2011', a: 50, b: 40},
                {y: '2012', a: 75, b: 65},
                {y: '2013', a: 50, b: 40},
                {y: '2014', a: 75, b: 65},
                {y: '2015', a: 100, b: 90},
                {y: '2016', a: 90, b: 75}
            ];
            this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#ca6364', '#eb7475']);

            //creating donut chart
            var $donutData = [
                {label: "Bitcoin", value: 12},
                {label: "Ethereum", value: 42},
                {label: "Cardano", value: 20}
            ];
            this.createDonutChart('morris-donut-example', $donutData, ['#f0f1f4', '#eb7475', '#ca6364']);

        },
        //init
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.Dashboard.init();
    }(window.jQuery);