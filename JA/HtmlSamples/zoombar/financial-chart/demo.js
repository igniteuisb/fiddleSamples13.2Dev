$(function () {
			$("#chart").igDataChart({
				width: "100%",
				height: "300px",
				axes: [
					{
						name: "xAxis",
						type: "categoryX",
						dataSource: financialData1
					},
					{
						name: "yAxis",
						type: "numericY"
					}
				],
				series: [
					{
						name: "series1",
						dataSource: financialData1,
						title: "Price Series",
						type: "financial",
						isTransitionInEnabled: true,
						displayType: "ohlc",
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						showTooltip: true,
						closeMemberPath: "Close",
						thickness: 2,
						trendLineBrush: "rgba(68, 172, 214, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)"
					},
					{
						name: "series2",
						dataSource: financialData2,
						title: "Price Series",
						type: "financial",
						isTransitionInEnabled: true,
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						closeMemberPath: "Close",
						thickness: 2,
						showTooltip: true,
						trendLineBrush: "rgba(73, 73, 73, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)",
						displayType: "ohlc"
					}
				],
				horizontalZoomable: true,
				verticalZoomable: false,
				windowResponse: "immediate"
			});
			$("#zoom").igZoombar({
				target: "#chart"
			});
			$("#buttonset").children().button({});
		});