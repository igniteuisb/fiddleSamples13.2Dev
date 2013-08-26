$(function () {
            var dynamicModel,
                overallProfit = 0,
                MTHS = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
                MONTHS = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月",
                        "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"];
                
            // KO related functionallity starts here
            function generateData() {
                var num = 12, data = [], curr = 10, rand1, rand2, rand3;
                overallProfit = 0;
                for (var i = 0; i < num; i++) {
                    if (Math.random() > .5) {
                        curr += Math.random() * 2.0;
                    } else {
                        curr -= Math.random() * 2.0;
                    }
                    rand1 = Math.random() * 50.0;
                    rand2 = Math.random() * 40.0;
                    rand3 = rand1 - rand2;
                    overallProfit += rand3;
                    data[i] = {
                        index: ko.observable(i),
                        month: ko.observable(MTHS[i]),
                        revenue: ko.observable(rand1),
                        expenses: ko.observable(rand2),
                        profit: ko.observable(rand3)
                    };
                }
                return data;
            }

            function ViewModel(data) {
                var self = this,
                    currSelectedChartValue = $("#slider1").data("slider")
                        ? $("#slider1").slider("value")
                        : 3;
                this.data = data;
                this.chartThickness = 2;
                this.transitionDuration = 1000;
                this.chartIntervalX = 1;
                this.revenueColor = "#a4ba29";
                this.expensesColor = "#d3404b";
                this.profitColor = "#216EDD";
                this.outlineColor = "black";
                this.currentIndex = ko.observable(currSelectedChartValue);
                this.yearProfit = ko.observable(overallProfit*1000000);
                this.formatMonth = function (value) {
                    return MTHS[value];
                }
                this.currentMonth = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].month();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].month(value);
                    },
                    owner: this
                });
                this.currentRevenue = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].revenue();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].revenue(value);
                    },
                    owner: this
                });
                this.currentExpenses = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].expenses();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].expenses(value);
                    },
                    owner: this
                });
                this.currentProfit = ko.computed({
                    read: function () {
                        var currentItem = this.data[this.currentIndex()],
                            newProfit = currentItem.revenue() - currentItem.expenses(),
                            mil = 1000000;
                        this.yearProfit((this.yearProfit()/mil - currentItem.profit() + newProfit)*mil);
                        this.data[this.currentIndex()].profit(newProfit);
                        return newProfit;
                    },
                    write: function (value) {
                        var currentItem = this.data[this.currentIndex()],
                            mil = 1000000,
                            tempRevenue = currentItem.expenses() + value;
                        this.yearProfit((this.yearProfit()/mil - currentItem.profit() + value)*mil);
                        currentItem.profit(value);

                        if (tempRevenue <= 50 && tempRevenue >= 0) {
                            currentItem.revenue(tempRevenue);
                            animateChartBorder("polarSplineChartRevenue");
                        } else {
                            tempRevenue = (tempRevenue > 50) ? 50 : 0;
                            currentItem.revenue(tempRevenue);
                            currentItem.expenses(tempRevenue - value);
                            animateChartBorder("polarSplineChartExpenses");

                        }
                    },
                    owner: this
                });
            }
            dynamicModel = new ViewModel(generateData());
            ko.applyBindings(dynamicModel);
            // KO related functionallity ends here

            $(".number-container").html(MONTHS[dynamicModel.currentIndex()]);
            $("#slider1").slider({
                range: "max", min: 0, max: 11, value: dynamicModel.currentIndex(), slide: slideHandler
            });
            $("#slider2").slider({
                range: "max", min: 0, max: 11, value: dynamicModel.currentIndex(), slide: slideHandler
            });
            function slideHandler(event, ui) {
                $("#slider1").slider("value", ui.value);
                $("#slider2").slider("value", ui.value);
                $(".number-container").fadeOut(200, function () {
                    $(".number-container").html(MONTHS[ui.value]).fadeIn(200);
                });
                dynamicModel.currentIndex(ui.value);
            }
            $(".btn-refresh").click(function (e) {
                dynamicModel = new ViewModel(generateData());
                ko.applyBindings(dynamicModel);
            });
            $(".main-container").on("igtexteditortextchanged", "#ed-month", animateMonth);
            $(".main-container").on("ignumericeditortextchanged", "#ed-revenue", animateRevenue);
            $(".main-container").on("ignumericeditortextchanged", "#ed-expenses", animateExpenses);
            $(".main-container").on("ignumericeditortextchanged", "#ed-profit", animateProfit);
            function animateMonth() {
                animateChartBorder("lineChart");
                animateChartBorder("barColumnChart");
            }
            function animateRevenue() {
                animateAlways();
                animateChartBorder("polarSplineChartRevenue");
            }
            function animateExpenses() {
                animateAlways();
                animateChartBorder("polarSplineChartExpenses");
            }
            function animateProfit() {
                animateAlways();
            }
            function animateAlways() {
                animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
                animateChartBorder("polarSplineChartProfit");
            }
            function animateChartBorder(id) {
                id = "#" + id + "_chart_container";
                $(id).stop().animate({ borderColor: '#FA0000' }, 1000, function () {
                    $(id).stop().animate({ borderColor: '#B1B1B1' }, 1000);
                });
            }
        });