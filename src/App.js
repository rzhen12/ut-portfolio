import './App.scss';

function App() {
    return (
        <div className="App" id="portfolio" className="page-layout simple full-width">
            <div className="header p-16 p-sm-24">

                <div className="hero-text mb-16">
                    <h1>Model Portfolio</h1>
                </div>

                <div className="portfolio-top mat-elevation-z7">
                    <table style={{width: "100%", height: "50%"}}>
                        <tr>
                            <td className="color-red">
                                2.4%
                            </td>
                            <td className="color-green">
                                $133,197
                            </td>
                            <td className="color-red">
                                $34,000
                            </td>
                            <td className="color-green">
                                86%
                            </td>
                        </tr>
                        <tr className="subtitle">
                            <td>TODAY'S RETURN</td>
                            <td>MARKET VALUE</td>
                            <td>TOTAL COST</td>
                            <td>OVERALL RETURN</td>
                        </tr>
                        <tr>
                            <td className="color-blue" colSpan="4" height="400px">
                                CHART HERE
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="hero-text mb-16">
                    <h1>Positions</h1>
                </div>

                <div className="portfolio-bottom mat-elevation-z7">
                    <table>
                        <tr className="table-header">
                            <th>SYMBOL</th>
                            <th>NAME</th>
                            <th>SIZE</th>
                            <th>AVERAGE PRICE</th>
                            <th>TOTAL COST</th>
                            <th>CURRENT PRICE</th>
                            <th>MARKET VALUE</th>
                            <th>UNREALIZED PnL</th>
                            <th>UNREALIZED PnL %</th>
                        </tr>
                        <tr className="portfolio-positions">
                            <td className="symbol">AAPL</td>
                            <td>Apple Inc.</td>
                            <td className="color-green">500</td>
                            <td>$113.00</td>
                            <td className="color-green">$56,500</td>
                            <td>$128.23</td>
                            <td className="color-green">$64,115</td>
                            <td className="color-green">$7,615</td>
                            <td className="color-green">13.48%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
