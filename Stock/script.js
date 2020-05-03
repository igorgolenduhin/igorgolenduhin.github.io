function loadDoc() {
    var ticker = document.getElementById("ticker").value;
    var xhttp1 = new XMLHttpRequest();
    var xhttp2 = new XMLHttpRequest();
    var xhttp3 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionTwo(this);
            drawChartLine(this);
        }
    };
    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionThree(this);
            drawChart(this);

        }
    };

    xhttp1.open("GET", "https://financialmodelingprep.com/api/v3/company/profile/" + ticker, false);
    xhttp1.send();
    xhttp2.open("GET", "https://financialmodelingprep.com/api/v3/financials/income-statement/" + ticker, false);
    xhttp2.send();
    xhttp3.open("GET", "https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/" + ticker, false);
    xhttp3.send();

}
function myFunction(json) {
    jsonDoc = json.responseText;
    comProfile = JSON.parse(jsonDoc);
    symbol = comProfile.symbol;
    profile = comProfile.profile;
    comName = profile.companyName;
    exchange = profile.exchange;
    industry = profile.industry;
    description = profile.description;
    imageCom = profile.image;

    price = profile.price;
    dividMoney = profile.lastDiv;
    changes = profile.changes;
    changesPer = profile.changesPercentage;
    linkSite = profile.website;

    logo = "<a href='" + linkSite + "'><img src= '" + imageCom + "' alt = 'Logo'>";
    document.getElementById("logo").innerHTML = logo;
    document.getElementById("logo").style = 'background-color: #F5F2F3';

    profileRes = "<h3 id='cName'>" + comName + " (" + symbol + ")" + "</h3>";
    profileRes += "<h3 >Биржа: " + exchange + "</h3>";
    profileRes += "<h3>Индустрия: " + industry + "</h3>";
    document.getElementById("info").innerHTML = profileRes;

    descriptionRes = "<p>" + description + "</p>";
    document.getElementById("descr").innerHTML = descriptionRes;

    if (Number(changes) >= 0) {
        changesF = "<b style ='color: #4DC731'>+$" + changes + "</b>";
        changesPercent = "<b style ='color: #4DC731'>" + changesPer + "</b>";
    } else {
        changesF = "<b style ='color: #D63828'>$" + changes + "</b>";
        changesPercent = "<b style ='color: #D63828'>" + changesPer + "</b>";
    }
    dataRes = "<h4>Цена: $" + price + " " + changesF + " " + changesPercent + "</h4>"
    dataRes += "<h4>Дивиденды: " + dividMoney + "</h4>";
    document.getElementById("data").innerHTML = dataRes;
}
function myFunctionTwo(json) {
    jsonDoc = json.responseText;
    comProfile = JSON.parse(jsonDoc);
    epsC = comProfile.financials[0].EPS;
    dataEps = "<h4>EPS: " + epsC + "</h4>";
    percentDiv = Number(dividMoney) / Number(epsC) * 100;
    if (Number(dividMoney) == 0) {
        dataEps += "<p>Дивидендов нет вообще. С одной стороны это хорошо, ведь они все заработанное пускают на что-то еще (надеюсь на развитие), но с другой стороны есть шанс застрять в них и не получать ничего";
    }
    else if (Number(dividMoney) > 0 && Number(dividMoney) < Number(epsC)) {
        dataEps += "<p>EPS больше дивидендов, значит компания не все заработанное пускает на дивы. Тратят примерно: " + "<b style = 'color: #4DC731'>" + percentDiv + "%</b>" + "</p>";
    } else {
        dataEps += "<p>Дивиденды больше EPS, значит компания берет какой-то кредит на выплаты. Стоит быть аккуратными тут. Тратят они примерно: " + "<b style = 'color: #D63828'>" + percentDiv + "%</b>" + "</p>";
    }
    document.getElementById("EPS").innerHTML = dataEps;

    incomeSt = "<h4>Чистая прибыль (в млн)</h4>";
    incomeSt += "<table border='1'> <tr><td>" + comProfile.financials[0].date + "</td> <td>" + comProfile.financials[1].date + "</td><td>" + comProfile.financials[2].date + "</td><td>" + comProfile.financials[3].date + "</td> </tr>";
    for (i = 0; i < 4; i++) {
        for (key in comProfile.financials[i]) {
            if (key == "Net Income") {
                incomeF = comProfile.financials[i][key];
                incomeSt += "<td> $" + (incomeF / 1000000) + "</td>";
            }
        }
    }

    document.getElementById("incomeSt").innerHTML = incomeSt;
}

function drawChartLine(json) {
    jsonDoc = json.responseText;
    comProfile = JSON.parse(jsonDoc);

    keyIncome = 'Net Income';

    var dataLine = new google.visualization.DataTable();
    dataLine.addColumn('string', 'Дата');
    dataLine.addColumn('number', 'Чистая прибыль');

    dataLine.addRows([
        [comProfile.financials[6].date, comProfile.financials[6][keyIncome]/1000000],
        [comProfile.financials[5].date, comProfile.financials[5][keyIncome]/1000000],
        [comProfile.financials[4].date, comProfile.financials[4][keyIncome]/1000000],
        [comProfile.financials[3].date, comProfile.financials[3][keyIncome]/1000000],
        [comProfile.financials[2].date, comProfile.financials[2][keyIncome]/1000000],
        [comProfile.financials[1].date, comProfile.financials[1][keyIncome]/1000000],
        [comProfile.financials[0].date, comProfile.financials[0][keyIncome]/1000000]
    ]);

    var optionsLine = {
        width: 850,
        hAxis: {
          title: 'Дата'
        },
        vAxis: {
          title: 'Чистая прибыль (млн)'
        }
      };

    var chart = new google.visualization.LineChart(document.getElementById('incomeDiagram'));
    chart.draw(dataLine, optionsLine);
}

function myFunctionThree(json) {
    jsonDoc = json.responseText;
    comProfile = JSON.parse(jsonDoc);

    balanceSheet = "<h4>Баланс: основные данные (в млн)</h4>";
    balanceSheet += "<table border='1'> <tr> <td>Параметр</td> <td>" + comProfile.financials[0].date + "</td> <td>" + comProfile.financials[1].date + "</td><td>" + comProfile.financials[2].date + "</td><td>" + comProfile.financials[3].date + "</td> </tr>";
    balanceSheet += "<tr><td>Всего активов</td>";
    for (i = 0; i < 4; i++) {
        for (key in comProfile.financials[i]) {
            if (key == "Total assets") {
                balanceAssets = comProfile.financials[i][key];
                balanceSheet += "<td> $" + (balanceAssets / 1000000) + "</td>";
            }
        }
    }
    balanceSheet += "</tr><tr><td>Всего обязательств</td>";
    for (i = 0; i < 4; i++) {
        for (key in comProfile.financials[i]) {
            if (key == "Total liabilities") {
                balanceLiabilities = comProfile.financials[i][key];
                balanceSheet += "<td> $" + (balanceLiabilities / 1000000) + "</td>";
            }
        }
    }
    balanceSheet += "</tr><td>Акционерный капитал</td>";
    for (i = 0; i < 4; i++) {
        for (key in comProfile.financials[i]) {
            if (key == "Total shareholders equity") {
                shareholdersEquity = comProfile.financials[i][key];
                balanceSheet += "<td> $" + (shareholdersEquity / 1000000) + "</td>";
            }
        }
    }
    balanceSheet += "</tr></table>";
    document.getElementById("balance").innerHTML = balanceSheet;
}

function drawChart(json) {
    jsonDoc = json.responseText;
    comProfile = JSON.parse(jsonDoc);

    key = 'Total assets';
    balanceAssets0 = comProfile.financials[0][key] / 1000000;
    balanceAssets1 = comProfile.financials[1][key] / 1000000;
    balanceAssets2 = comProfile.financials[2][key] / 1000000;
    balanceAssets3 = comProfile.financials[3][key] / 1000000;
    balanceAssets4 = comProfile.financials[4][key] / 1000000;
    balanceAssets5 = comProfile.financials[5][key] / 1000000;
    balanceAssets6 = comProfile.financials[6][key] / 1000000;

    keyLia = 'Total liabilities';
    balanceLiabilities0 = comProfile.financials[0][keyLia] / 1000000;
    balanceLiabilities1 = comProfile.financials[1][keyLia] / 1000000;
    balanceLiabilities2 = comProfile.financials[2][keyLia] / 1000000;
    balanceLiabilities3 = comProfile.financials[3][keyLia] / 1000000;
    balanceLiabilities4 = comProfile.financials[4][keyLia] / 1000000;
    balanceLiabilities5 = comProfile.financials[5][keyLia] / 1000000;
    balanceLiabilities6 = comProfile.financials[6][keyLia] / 1000000;


    keyShareholders = 'Total shareholders equity';
    balanceShareholders0 = comProfile.financials[0][keyShareholders] / 1000000;
    balanceShareholders1 = comProfile.financials[1][keyShareholders] / 1000000;
    balanceShareholders2 = comProfile.financials[2][keyShareholders] / 1000000;
    balanceShareholders3 = comProfile.financials[3][keyShareholders] / 1000000;
    balanceShareholders4 = comProfile.financials[4][keyShareholders] / 1000000;
    balanceShareholders5 = comProfile.financials[5][keyShareholders] / 1000000;
    balanceShareholders6 = comProfile.financials[6][keyShareholders] / 1000000;

    var data = google.visualization.arrayToDataTable([
        ['Год', 'Активы', 'Обязательства', 'Акционерный капитал'],
        [comProfile.financials[6].date, balanceAssets6, balanceLiabilities6, balanceShareholders6],
        [comProfile.financials[5].date, balanceAssets5, balanceLiabilities5, balanceShareholders5],
        [comProfile.financials[4].date, balanceAssets4, balanceLiabilities4, balanceShareholders4],
        [comProfile.financials[3].date, balanceAssets3, balanceLiabilities3, balanceShareholders3],
        [comProfile.financials[2].date, balanceAssets2, balanceLiabilities2, balanceShareholders2],
        [comProfile.financials[1].date, balanceAssets1, balanceLiabilities1, balanceShareholders1],
        [comProfile.financials[0].date, balanceAssets0, balanceLiabilities0, balanceShareholders0]
    ]);
    var options = {
        width: 850,
        title: 'Баланс компании',
        hAxis: { title: 'Год' },
        vAxis: { title: 'Млн $' }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('balanceDiagram'));
    chart.draw(data, options);
}