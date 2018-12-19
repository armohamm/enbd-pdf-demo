import React, { Component } from 'react';
import styled,  { css, createGlobalStyle } from 'styled-components';
import D3Node from 'd3-node';
import logo from './images/logo.PNG';
import cover from './images/cover.PNG';
import emirateLogo from './images/emirateLogo.PNG';
import appleStoreIcon from './images/download-on-the-app-store-apple.svg';
import googlePlayIcon from './images/google-play-badge.svg';
import responses from './responses/future-protect1.json';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Arial", "Helvetica Neue", sans-serif;
  }
`;

const Cover = (props) => {
  const CoverLogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: #1D99D3;
    font-size: 30px;
    font-weight: bold;
  `;

  const CoverLogo = styled.img`
    padding-right: 10px;
    height: 40px;
  `;

  const CoverText = styled.span`
    padding: 0 20px;
    font-size: 22px;
  `;

  const CoverImage = styled.img`
    width: 100%;
  `;

  const CoverContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  `;

  const CoverContentTitle = styled.div`
    font-size: 18px;
  `;

  const CoverContentBody = styled.div`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  `;

  const CoverContentImg = styled.img`
    height: 45px;
  `;

  const CoverFooter = styled.p`
    margin: 50px 30px 20px;
    font-size: 14px;
  `;

  return (
    <div>
      <CoverLogoContainer>
        <CoverLogo src={props.logo} alt="logo"/>
        <span>|</span>
        <CoverText>For Protection and Investment</CoverText>
      </CoverLogoContainer>
      <CoverImage src={props.cover} alt="policy illustration" />
      <CoverContent>
        <div>
            <CoverContentTitle>Personalized summary illustration for:</CoverContentTitle>
            <CoverContentBody>{props.prospectTitle} {props.prospectFirstName} {props.prospectLastName}</CoverContentBody>
            <CoverContentBody></CoverContentBody>
        </div>
        <div>
            <CoverContentTitle>Presented by:</CoverContentTitle>
            <CoverContentBody>{props.agentTitle} {props.agentFirstName} {props.agentLastName}</CoverContentBody>
        </div>
      </CoverContent>
      <CoverContent>
        <CoverContentBody>Navigating life together</CoverContentBody>
        <CoverContentImg src={props.emirateLogo} alt="Emirates" />
      </CoverContent>
      <CoverFooter>This illustration is only for illustrative purposes and is subject to standard financial and medical underwriting.</CoverFooter>
    </div>
  );
}

const Header = (props) => {
  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const HeaderImg = styled.img`
    height: 40px;
  `;

  return (
    <HeaderContainer>
      <HeaderImg src={props.logo} alt="logo" />
      <div>Navigating life together</div>
    </HeaderContainer>
  );
}

const OwnerInformation = (props) => {
  const OwnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const OwnerContent = styled.div`
    padding: 10px 30px;
    background-color: #EFEFF0;
    border-radius: 10px;
  `;

  const OwnerContentText = styled.span`
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
  `;

  return (
    <OwnerContainer id="header">
      <h2>Future Protect</h2>
      <OwnerContent>
        <OwnerContentText>Name: {props.firstName} {props.lastName}</OwnerContentText>
        <OwnerContentText>Age: {props.age}</OwnerContentText>
        <OwnerContentText>Gender: {props.gender}</OwnerContentText>
      </OwnerContent>
    </OwnerContainer>
  );
}

const Footer = (props) => {
  const FooterSignature = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 15px 0 0;
    font-size: 12px;
  `;

  const FooterSignatureInput = styled.input`
    min-height: 20px; 
    max-width: 100px;
    margin-left: 5px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  `;

  const FooterPageNumber = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  `;

  const FooterText = styled.p`
    font-size: 12px;
  `;

  const FooterGradient = styled.div`
    display: flex;
    min-height: 20px;
  `;

  const FooterGradientBlue = styled.span`
    width: 60%;
    background-color: #009cdc;
  `;

  const FooterGradientDark = styled.span`
    width: 10%;
    background-color: #0066a6;
  `;

  const FooterGradientGreen = styled.span`
    width: 20%;
    background-color: #a5cf4f;
  `;
  
  return (
    <div id="footer">
      <FooterSignature>
        <div>
          <span>{props.signature}: </span>
          <FooterSignatureInput type="text"/>
        </div>
        <FooterPageNumber>{props.pageNumber} of 6</FooterPageNumber>
      </FooterSignature>
      <FooterText>This is an illustrative proposal - Not a contract. Your policy will contain the terms and conditions, limitations and exclusions of your coverage.</FooterText>
      <FooterGradient>
        <FooterGradientBlue />
        <FooterGradientDark />
        <FooterGradientGreen />
        <FooterGradientDark />
      </FooterGradient>
    </div>
  );
}

const Product = () => {
  const ProductContainer = styled.div`
    display: flex;
  `;
  
  const ProductInfo =  styled.div`
    flex-basis: 30%;
  `;
  
  const ProductInfoDetail = styled.p`
    background-color: #E6E7E8;
    padding: 20px 10px;
    border-radius: 15px;
    line-height: 24px;
  `;
  
  const ProductDescription = styled.div`
    flex-basis: 70%;
    padding: 0 10px 0 50px;
  `;
  
  const ProductDescriptionTitle = styled.h3`
    margin: 10px 0;
    color: #1D99D3;
  `;
  
  const ProductDescriptionList = styled.ul`
    margin: 0;
  `;
  
  const ProductDescriptionListItem = styled.li`
    margin-bottom: 5px;
  `;

  return (
    <ProductContainer>
      <ProductInfo>
        <ProductInfoDetail>Future Protect is a life insurance plan with an investment opportunity to maximize wealth.</ProductInfoDetail>
      </ProductInfo>
      <ProductDescription>
        <ProductDescriptionTitle>Key features and benefits</ProductDescriptionTitle>
        <ProductDescriptionList>
          <ProductDescriptionListItem>Life insurance cover</ProductDescriptionListItem>
          <ProductDescriptionListItem>Investment opportunity with a choice of three investment strategies</ProductDescriptionListItem>
          <ProductDescriptionListItem>Unlimited option to switch funds or change your investment strategy for FREE</ProductDescriptionListItem>
          <ProductDescriptionListItem>Flexibility to complement the plan with optional protection benefits</ProductDescriptionListItem>
        </ProductDescriptionList>
      </ProductDescription>
    </ProductContainer>
  );
}

const Download = (props) => {
  const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 15px;
    background-color: #D1D3D4;
  `;
  
  const DownloadImg = styled.img`
    padding-left: 20px;
    height: 30px;
  `;

  return (
    <DownloadContainer>
      <p>Free access to myMetLife, our online engagement platform Download the <strong>myMetLife mobile app</strong> for iPhone and Android.</p>
      <DownloadImg src={props.appleStoreIcon} alt="Download on the Apple Store"/>
      <DownloadImg src={props.googlePlayIcon} alt="Get it on Google Play"/>
    </DownloadContainer>
  );
}

const Glossary = () => {
  const GrlossaryContent = styled.div`
    display: flex;
    font-size: 14px;
    font-size: 14px;
  `;
  
  const GrlossaryListItem =styled.li`
    margin-bottom: 10px;
  `;

  return (
    <div>
      <h2>Glossary</h2>
      <GrlossaryContent>
        <div>
          <ul>
            <GrlossaryListItem><strong>Accident Death Benefit</strong> - The lump sum benefit will be paid if the covered individual(s) dies due to accident before age 75 and after commencement of Accident Death Benefit coverage. This lump sum benefit will be an additional payment to the death benefit under the policy.</GrlossaryListItem>
            <GrlossaryListItem><strong>Rider 2</strong> - The lump sum benefit will be paid if the covered individual(s) is(are) diagnosed before age 95, after commencement of Accelerated Critical Illness coverage, to have suffered for the first time from any 32 Dread Disease/Conditions covered under this rider. The Face Amount will be reduced by this lump sum benefit amount once paid.</GrlossaryListItem>
            <GrlossaryListItem><strong>Rider 3</strong> - The lump sum benefit will be paid if the covered individual(s) is(are) diagnosed before age 95, after commencement of Accelerated Critical Illness coverage, to have suffered for the first time from any 32 Dread Disease/Conditions covered under this rider. The Face Amount will be reduced by this lump sum benefit amount once paid.</GrlossaryListItem>
          </ul>
        </div>
        <div>
          <ul>
            <li><strong>Rider 4</strong> - The lump sum benefit will be paid if the covered individual(s) is(are) diagnosed before age 95, after commencement of Accelerated Critical Illness coverage, to have suffered for the first time from any 32 Dread Disease/Conditions covered under this rider. The Face Amount will be reduced by this lump sum benefit amount once paid.</li>
            <li><strong>Rider 5</strong> - The lump sum benefit will be paid if the covered individual(s) is(are) diagnosed before age 95, after commencement of Accelerated Critical Illness coverage, to have suffered for the first time from any 32 Dread Disease/Conditions covered under this rider. The Face Amount will be reduced by this lump sum benefit amount once paid.</li>
            <li><strong>Rider 6</strong> - The lump sum benefit will be paid if the covered individual(s) is(are) diagnosed before age 95, after commencement of Accelerated Critical Illness coverage, to have suffered for the first time from any 32 Dread Disease/Conditions covered under this rider. The Face Amount will be reduced by this lump sum benefit amount once paid.</li>
          </ul>
        </div>
      </GrlossaryContent>
    </div>
  );
}

const ApplicantNotes = () => {
  const styles = css`
    font-size: 14px;
    line-height: 14px
  `;

  const ApplicantNotesContent = styled.p`${styles}`;
  const ApplicantNotesList = styled.ul`${styles}`;

  const ApplicantNotesListItem = styled.li`
    margin-bottom: 10px;
  `;
  
  return (
    <div>
      <h2>Applicant's Undertaking</h2>
      <ApplicantNotesContent>If you are happy to proceed based on the contents of this document, please sign and date in the spaces provided below. Should you have any problems, queries or require further information please don’t hesitate to contact your Bank representative.</ApplicantNotesContent>
      <ApplicantNotesList>
        <ApplicantNotesListItem>The values shown in the illustration are valid, only if the age mentioned in the application matches with the age on this illustration.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I hereby apply for this Policy based on my application number ______________________________________ with indicated Supplementary Contracts (if applicable).</ApplicantNotesListItem>
        <ApplicantNotesListItem>I acknowledge and agree that this document is only for illustration purposes and does not constitute a final insurance Policy or contract. If my application for insurance coverage is approved and confirmed by MetLife, then I shall be eligible to the insurance covera ge under the Policy.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I represent and warrant to MetLife that I am not a citizen, a Green Card Holder or resident of United States of America or any state, territory or possession thereof.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I further acknowledge that the figures included in this document are estimates based on the information I have supplied and they are not firm quotes or offers. The actual premium will be based on complete underwriting along with other factors and may differ from the quotes indicated in this document. Insurance coverage will not begin until the Policy has been approved, issued and all necessary outstanding requirements including premium payment have been received.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I hereby understand that the assumed Growth Rates shown are purely for illustrative purposes and are not guaranteed in any way by MetLife. My final return will be based on the actual fund performance, along with a number of other factors such as prevailing foreign exchange rates, charges and fees and may be lower than the illustrated figures.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I understand that Future Protect is an investment plan and surrender or withdrawal of the plan before completion of premium paying term can result in penalties in the form of surrender charges/fees.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I understand that Future Protect is underwritten by MetLife and the insurance coverage that this Plan provides shall at all times be subject to the terms and conditions of the policy contract issued by MetLife. Emirates NBD as a distributor shall not be responsible for MetLife’s actions or decisions nor shall Emirates NBD be liable regarding payment of claims under the policy contract issued by MetLife.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I understand that in case of surrender of my Plan, variations in market conditions and the applicability of fees and charges may mean that the prices shown in the illustration do not necessarily reflect realizable values.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I undertake to maintain sufficient credit balances in my Emirates NBD account to meet the premium payment schedule as per terms of the product chosen. In case I fail to maintain sufficient credit balance in my account, I authorize Emirates NBD to debit my account for the pending premium amounts in case, funds available.</ApplicantNotesListItem>
        <ApplicantNotesListItem>I confirm having read all pages of this illustration and understood the information provided in this illustration.</ApplicantNotesListItem>
      </ApplicantNotesList>
      <h2>Basic Requirements</h2>
      <ApplicantNotesContent>Once you have accepted this illustration MetLife will require the below documents to complete your registration and provide your confirmation of insurance. Please provide these to your Bank representative.</ApplicantNotesContent>
    </div> 
  );
}

class D3Chart extends React.Component {
  countDigits(n) {
      let count = 0;
      if (n >= 1) ++count;

      while (n / 10 >= 1) {
    n /= 10;
    ++count;
      }

      return count;
  }

  draw(d3n, svg) {
      const data = this.props.accountValues;

      const margin = { top: 30, right: 20, bottom: 50, left: 50 };
      const width = 700 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3n.d3.scaleLinear().rangeRound([0, width]);
      const y = d3n.d3.scaleLinear().rangeRound([height, 0]);
      x.domain(d3n.d3.extent(data, (d) => { return d.age; }));
      y.domain([0, d3n.d3.max(data, (d) => { return d.annualPremium; })]).nice();

      const make_x_grid_lines = () => d3n.d3.axisBottom(x).ticks(10);
      const make_y_gridlines = () => d3n.d3.axisLeft(y).ticks(10);

  // add the X gridlines
      g.append('g')
  .attr('class', 'grid')
  .attr('transform', `translate(0,${height})`)
  .call(make_x_grid_lines()
    .tickSize(-height)
    .tickFormat(''));

  // add the Y gridlines
      g.append('g')
  .attr('class', 'grid')
  .call(make_y_gridlines()
    .tickSize(-width)
    .tickFormat(''));

      let annualPremium = [],
          receiveValue = [];
      data.forEach((value) => {
          annualPremium.push(value.annualPremium);
          receiveValue.push(value.receiveValue);
      });

  // Merge two arrays
      const chartdata = annualPremium.reduce((arr, v, i) => {
          return arr.concat(v, receiveValue[i]);
      }, []);

  // Round up the maximum bar charts value
      const maxChartsValue = d3n.d3.max(chartdata),
      digits = this.countDigits(maxChartsValue) - 1,
      factor = Math.pow(10, digits);

      const yScale = d3n.d3.scaleLinear()
        .domain([0, Math.round(maxChartsValue / factor) * factor])
    .rangeRound([0, height]);
      const xScale = d3n.d3.scaleBand()
        .domain(d3n.d3.range(0, chartdata.length))
    .rangeRound([0, width])
    .padding(0.2);

  // Bar Chart
      let chartContainer = g.append('g').attr('class', 'barChart1'),
          color = '';
      chartdata.forEach((value, index) => {
          index % 2 === 0 ? color = '#a4ce4e' : color = '#0061a0';
          chartContainer.append('rect')
    .attr('x', xScale(index))
    .attr('y', height - yScale(value))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale(value))
    .attr('fill', color);
      });

  // Line Chart
      const lineChart = d3n.d3.line()
    .x((d) => { return x(d.age); })
    .y((d) => { return y(d.accountvalue); });

  // plot the x axis
      g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', `translate(0,${height})`)
    .call(d3n.d3.axisBottom(x));
  // plot the y axis
      g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3n.d3.axisLeft(y))
  // plot the color legend
  .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .style('text-anchor', 'center')
    .style('font-size', '12');
  // plot x axis title
      g.append('g')
    .attr('class', 'legend')
  .append('text')
    .attr('y', -10)
    .attr('x', 20)
    .style('font-size', '14')
    .text('At 7.7% assumed growth rate');

  // plot the x axis legend
      svg.append('g')
    .attr('class', 'legend')
  .append('text')
    .attr('transform', 'translate(120, 490)')
    .text('Premiums you paid');
      svg.append('g')
    .append('rect')
      .attr('y', 475)
      .attr('x', 100)
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', '#a4ce4e');
      svg.append('g')
    .attr('class', 'legend')
  .append('text')
    .attr('transform', 'translate(320, 490)')
    .text('Your death benefit');
      svg.append('g')
    .append('rect')
      .attr('y', 475)
      .attr('x', 300)
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', '#0061a0');

      svg.append('g')
    .attr('class', 'legend')
  .append('text')
    .attr('transform', 'translate(520, 490)')
    .text('Cash surrender value');
      svg.append('g')
    .append('rect')
      .attr('y', 475)
      .attr('x', 500)
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', '#0090da');

      g.append('path')
    .datum(data)
    .attr('class', 'lineUsers')
    .attr('d', lineChart);
      g.selectAll('dot')
    .data(data)
    .enter().append('circle')
    .attr('fill', '#0090da')
    .attr('r', 3.5)
    .attr('cx', (d) => { return x(d.age); })
        .attr('cy', (d) => { return y(d.accountvalue); });
  }

  render() {
      const d3n = new D3Node();      // initializes D3 with container element
      const svg = d3n.createSVG(700, 500); // create SVG w/ 'g' tag and width/height
      this.draw(d3n, svg);
      return (
          <div dangerouslySetInnerHTML={{ __html: d3n.svgString() }} />
      );
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      agent: responses.agent,
      prospect: responses.data.attrs.person,
      firstInsured: responses.data.children.mainplan.children.futureProtect.attrs.person,
      secondInsured: responses.data.children.mainplan.children.futureProtect.attrs.JointLife,
      funds : responses.data.children.mainplan.children.futureProtect.attrs.funds,
      planSummary : responses.data.children.mainplan.children.futureProtect.attrs.data,
      ...responses.quoteSummary
    }
  } 

  formatCurrency = function (number) {
    if (number === undefined || number === null)  return;
    return '$' + number.toLocaleString();
  }

  render() {
    const MainContainer = styled.div`  
      margin: 0 auto;
      width: 800px;
    `;

    const TableWrapper = styled.div`
      width: 100%;
      margin-bottom: 15px;
    `;

    const TableColumnsWrapper = styled(TableWrapper)`
      flex-basis: 48%;
    `;

    const TableContainer = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    const TableTitle = styled.span`
      display: inline-block;
      margin-left: 2px;
      padding: 5px 20px;
      width: 150px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      background-color: #1D99D3;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    `;

    const TableTitleLong = styled(TableTitle)`
      width: auto;
    `;

    const Table = styled.table`
      width: 100%;
      font-size: 12px;
      text-align: center;

      tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
      }

      tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
      }
    `;

    const TableHeaderCell = styled.th`
      padding: 5px;
    `; 

    const TableBodyCellS = styled.td`
      padding: 10px;
      background-color: #EFEFF0;
    `;

    const TableBodyCellXS = styled(TableBodyCellS)`
      padding: 5px;
    `;

    const TableBodyCellM = styled(TableBodyCellS)`
      padding: 5px 10px;
      :first-child {
        text-align: left;
      }
      :nth-child(3),
      :nth-child(4) {
        text-align: right;
      }
    `;

    const TableBodyCellL = styled(TableBodyCellS)`
      padding: 10px 5px;
      :nth-child(odd) {
        background-color: #D1D3D4; 
      }
      :nth-child(even) {
        background-color: #EFEFF0;
      }
    `;

    const TableBodyCellLeftBold = styled(TableBodyCellS)`
      text-align: left;
      font-weight: bold;
    `;

    const TableBodyCellFont = styled(TableBodyCellS)`
      font-size: 12px;
    `;

    const TableRow = styled.tr``;

    const TableRowGreen = styled.tr`
      background-color: #A5CF4F;
    `;

    const TableRowGray = styled.tr`
      background-color: #D1D3D4;

      td {
        background-color: #D1D3D4;
      }
    `;
  
    const TableRowGrayWhite = styled.tr`
      background-color: #A8A8AA;
      color: #ffffff;
    `;

    const TableRowGrayDark = styled.tr`
      th {
        padding: 10px 15px;
        text-align: left;
        line-height: 14px;
        font-weight: 400;
        background-color: #E6E7E8;
      }
    `;

    const TableNotesTitle = styled.h5`
      margin: 0;
    `;

    const TableNotesText = styled.tr`
      font-size: 12px;
    `;

    const TableNotesListXS = styled.ul`
      margin: 0;
      padding: 0 0 0 20px;
      text-align: left;
    `;

    const TableNotesListS = styled.ul`
      padding-left: 20px;
      font-size: 11px;
      line-height: 14px;
    `;
  
    const TableNotesListM = styled.ul`
      margin: 0;
      padding-left: 25px;
      font-size: 12px;
      line-height: 12px;
      text-align: left;

      li {
        margin-bottom: 5px;
      }
    `;

    console.log(this.state);
    /* Create Dynamic Tables */
    const benefitsPremium = Object.keys(this.state.supplementPremium.coverages).map( (benefit, key) => {
      const premiumDetail = this.state.supplementPremium.coverages[benefit];
      return (
        <TableRow key={key}>
          <TableBodyCellM>{benefit}</TableBodyCellM>
          <TableBodyCellM>
            {(() => {
              if (premiumDetail.coverageAmounts.insured) {
                return "Insured"
              }
            })()}
            <br/>
            {(() => {
              if (premiumDetail.coverageAmounts.jointLifeAmount) {
                return "Joint Life"
              }
            })()}
          </TableBodyCellM>
          <TableBodyCellM>
            {(() => {
              if (premiumDetail.coverageAmounts.insured) {
                return this.formatCurrency(premiumDetail.coverageAmounts.insured)
              }
            })()}
            <br/>
            {(() => {
              if (premiumDetail.coverageAmounts.jointLifeAmount) {
                return this.formatCurrency(premiumDetail.coverageAmounts.jointLifeAmount)
              }
            })()}
          </TableBodyCellM>
          <TableBodyCellM>
            {(() => {
              if (premiumDetail.premiumAmounts.insured) {
                return this.formatCurrency(premiumDetail.premiumAmounts.insured)
              }
            })()}
            <br/>
            {(() => {
              if (premiumDetail.premiumAmounts.jointLifeAmount) {
                return this.formatCurrency(premiumDetail.premiumAmounts.jointLifeAmount)
              }
            })()}
          </TableBodyCellM>
        </TableRow>
      );
    });

    const projectedValue = this.state.accountValues.map( (investment, key) => {
      return (
        <TableRow key={key}>
          <TableBodyCellXS>{investment.age}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(investment.annualPremium)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(investment.accountvalue)}</TableBodyCellXS>
          <TableBodyCellXS>Death Benefit</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(investment.receiveValue)}</TableBodyCellXS>
        </TableRow>
      );
    });

    const fluctuationGrowthRates = this.state.fluctuationOfInvestments.map( (rate, key) => {
      return (
        <TableRow key={key}>
          <TableBodyCellXS>{rate.age}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(rate.p0)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(rate.p2)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(rate.p5)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(rate.p7)}</TableBodyCellXS>
        </TableRow>
      );
    });

    const premiumAgeElements = this.state.premuimScenarios.reduce( (acc, value) => {      
      if (value.age === null) {
        value.age = value.year + this.state.prospect.age;
      }
      acc.push(value.age);
      return acc;
    }, []).map( (age, key) => {
      return (
        <TableHeaderCell key={key}>{age}</TableHeaderCell>
      );
    });

    const premiumAmountElements = this.state.premuimScenarios.reduce( (acc, value) => {      
      acc.push(value.premium);
      return acc;
    }, []).map( (premium, key) => {
      return (
        <TableBodyCellS key={key}>{this.formatCurrency(premium)}</TableBodyCellS>
      );
    });

    const pensionBenefits = this.state.pensionBenefits.map( (benefit, key) => {
      return (
        <TableRow key={key}>
          <TableBodyCellXS>{benefit.age}</TableBodyCellXS>
          <TableBodyCellXS>Account Value</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(benefit.p5Y)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(benefit.p10YPL)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(benefit.p20YPL)}</TableBodyCellXS>
          <TableBodyCellXS>{this.formatCurrency(benefit.pWL)}</TableBodyCellXS>
        </TableRow>
      );
    }); 

    return (
      <MainContainer>
        <GlobalStyle/>
        <Cover 
          agentTitle={this.state.agent.name.title} 
          agentFirstName={this.state.agent.name.firstName}
          agentLastName={this.state.agent.name.lastName}
          prospectTitle={this.state.prospect.name.title} 
          prospectFirstName={this.state.prospect.name.firstName}
          prospectLastName={this.state.prospect.name.lastName} 
          logo={logo} 
          cover={cover} 
          emirateLogo={emirateLogo} 
        />
        <Header logo={logo}/>
        <Product />
        <TableWrapper>
          <TableTitle>Client Details</TableTitle>
          <Table>
              <TableRow>
                <TableBodyCellL>1st Life</TableBodyCellL>
                <TableBodyCellL>{this.state.firstInsured.name.title} {this.state.firstInsured.name.firstName} {this.state.firstInsured.name.lastName}</TableBodyCellL>
                <TableBodyCellL>Age</TableBodyCellL>
                <TableBodyCellL>{this.state.firstInsured.age}</TableBodyCellL>
                <TableBodyCellL>Gender</TableBodyCellL>
                <TableBodyCellL>{this.state.firstInsured.gender}</TableBodyCellL>
                <TableBodyCellL>Smoking Status</TableBodyCellL>
                <TableBodyCellL>NA</TableBodyCellL>
              </TableRow>
              {(() => {
                if (this.state.secondInsured) {
                  return (
                    <TableRow>
                      <TableBodyCellL>2nd Life</TableBodyCellL>
                      <TableBodyCellL>{this.state.secondInsured.group_7aAXRLq_l.jlTitle} {this.state.secondInsured.group_7aAXRLq_l.jlFirstName} {this.state.secondInsured.group_7aAXRLq_l.jlLastName}</TableBodyCellL>
                      <TableBodyCellL>Age</TableBodyCellL>
                      <TableBodyCellL>{this.state.secondInsured.age}</TableBodyCellL>
                      <TableBodyCellL>Gender</TableBodyCellL>
                      <TableBodyCellL>{this.state.secondInsured.jlGender}</TableBodyCellL>
                      <TableBodyCellL>Smoking Status</TableBodyCellL>
                      <TableBodyCellL>NA</TableBodyCellL>
                    </TableRow>
                  );
                }
              })()}
              <TableRow>
                <TableBodyCellL>Policy Owner</TableBodyCellL>
                <TableBodyCellL>{this.state.prospect.name.title} {this.state.prospect.name.firstName} {this.state.prospect.name.lastName}</TableBodyCellL>
                <TableBodyCellL>Age</TableBodyCellL>
                <TableBodyCellL>{this.state.prospect.age}</TableBodyCellL>
                <TableBodyCellL>Gender</TableBodyCellL>
                <TableBodyCellL>{this.state.prospect.gender}</TableBodyCellL>
                <TableBodyCellL>Smoking Status</TableBodyCellL>
                <TableBodyCellL>NA</TableBodyCellL>
              </TableRow>
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableTitle>Plan summary</TableTitle>
          <Table>
            <TableRowGreen>
              <TableHeaderCell>Annual planned premium</TableHeaderCell>
              <TableHeaderCell>Premium payment term</TableHeaderCell>
              <TableHeaderCell>Initial payment period</TableHeaderCell>
              <TableHeaderCell>Coverage type</TableHeaderCell>
            </TableRowGreen>
            <TableRow>
              <TableBodyCellS>USD {(this.state.premiumSummary.annualy).toLocaleString()}</TableBodyCellS>
              <TableBodyCellS>{this.state.planSummary.premiumPaymentTerm}</TableBodyCellS>
              <TableBodyCellS>{this.state.planSummary.planType}</TableBodyCellS>
              <TableBodyCellS>Joint life first death</TableBodyCellS>
            </TableRow>
          </Table>
        </TableWrapper>
        <TableContainer>
          <TableColumnsWrapper>
            <TableTitle>Life insurance</TableTitle>
            <Table>
              <TableRow>
                <TableBodyCellLeftBold>Coverage 1st Life</TableBodyCellLeftBold>
                <TableBodyCellS>USD {(this.state.basicPlanPremium.coverages.FPPBASECOV.coverageAmounts.insured).toLocaleString()}</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellLeftBold>Coverage 2nd Life</TableBodyCellLeftBold>
                <TableBodyCellS>USD {(this.state.basicPlanPremium.coverages.FPPBASECOV.coverageAmounts.jointLifeAmount).toLocaleString()}</TableBodyCellS>
              </TableRow>
            </Table>
          </TableColumnsWrapper>
          <TableColumnsWrapper>
            <TableTitle>Investment</TableTitle>
            <Table>              
              <TableRow>
                <TableBodyCellLeftBold>Projected cash value at age</TableBodyCellLeftBold>
                <TableBodyCellS>65 years</TableBodyCellS>
                <TableBodyCellS>USD 93,952*</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellLeftBold colSpan="2">Assumed growth rate</TableBodyCellLeftBold>
                <TableBodyCellS>7.7%</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellFont colSpan="3">*Based on fund performance, account value and premiums paid.</TableBodyCellFont>
              </TableRow>
            </Table>
          </TableColumnsWrapper>
        </TableContainer>
        <TableWrapper>
          <TableTitle>Investment strategy</TableTitle>
          <Table>
            <TableRowGreen>
              <TableHeaderCell>The Conservative Strategy</TableHeaderCell>
              <TableHeaderCell>The Balanced strategy</TableHeaderCell>
              <TableHeaderCell>The Agressive strategy</TableHeaderCell>
            </TableRowGreen>
            <TableNotesText>
              <TableBodyCellS>Investment strategy focused on minimizing losses, without significant investment risks</TableBodyCellS>
              <TableBodyCellS>Investment strategy focused on capital preservation/modest capital growth with a medium level of investment risk</TableBodyCellS>
              <TableBodyCellS>Investment strategy focused on capital growth with a higher level of investment risk</TableBodyCellS>
            </TableNotesText>
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableTitle>Fund allocation</TableTitle>
          <Table>
            <TableRowGray>
              {Object.keys(this.state.funds).map( (fund, key) => {
                if (this.state.funds[fund].totalGroupPercentage) {
                  return <TableHeaderCell key={key}>{fund.charAt(0).toUpperCase() + fund.slice(1)}</TableHeaderCell>
                } else {
                  return null;
                }
              })}
            </TableRowGray>
            <TableRow>
              {Object.keys(this.state.funds).map( (fund, key) => {
                if (this.state.funds[fund].totalGroupPercentage) {
                  return <TableBodyCellS key={key}>{this.state.funds[fund].totalGroupPercentage + "%"}</TableBodyCellS>
                } else {
                  return null;
                }
              })}
            </TableRow>
          </Table>
        </TableWrapper>
        <Download appleStoreIcon={appleStoreIcon} googlePlayIcon={googlePlayIcon} />
        <Footer signature="Initials" pageNumber="2"/>
        <OwnerInformation 
          firstName={this.state.prospect.name.firstName}
          lastName={this.state.prospect.name.lastName}
          age={this.state.prospect.age}
          gender={this.state.prospect.gender}
        />
        <TableWrapper>
          <TableTitleLong>Detailed summary of benefits and premiums</TableTitleLong>
          <Table>
            <TableRowGreen>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Covered</TableHeaderCell>
              <TableHeaderCell>Coverage Amount</TableHeaderCell>
              <TableHeaderCell>Premium</TableHeaderCell>
            </TableRowGreen>
            {benefitsPremium}
            <TableRowGray>
              <TableBodyCellM colSpan="3">Total Annual Planned Premium</TableBodyCellM>
              <TableBodyCellM>{this.formatCurrency(this.state.totalPremiumAmount)}</TableBodyCellM>
            </TableRowGray>
            <TableRowGray>
              <TableBodyCellM colSpan="3">Total Planned Premium Payable Monthly</TableBodyCellM>
              <TableBodyCellM>{this.formatCurrency(this.state.premiumSummary.monthly)}</TableBodyCellM>
            </TableRowGray>
            <TableRow>
              <TableBodyCellM colSpan="4">
                <TableNotesTitle>Important notes to read:</TableNotesTitle>
                <TableNotesListS>
                  <li>Starting 1st January 2018, MetLife will charge VAT on all UAE policies which are subject to value added tax (“VAT”) in accordance with the provisions of UAE Federal Law No. (8) of 2017 on VAT. The Above Premiums are inclusive of VAT (where applicable).For further details, please login to www.mymetlife.net</li>
                  <li>Premiums are based on standard risk.</li>
                </TableNotesListS>
              </TableBodyCellM>
            </TableRow>
          </Table>
        </TableWrapper>
        <TableTitle>Projected Value</TableTitle>
        <D3Chart accountValues={this.state.accountValues} />
        <Footer signature="Initials" pageNumber="3"/>
        <OwnerInformation 
          firstName={this.state.prospect.name.firstName}
          lastName={this.state.prospect.name.lastName}
          age={this.state.prospect.age}
          gender={this.state.prospect.gender}
        />
        <TableWrapper>
          <TableTitleLong>Projected investment values</TableTitleLong>
          <Table>
            <TableRowGrayWhite>
              <TableHeaderCell colSpan="5">Projected values with assumed growth rate 7.7%</TableHeaderCell>
            </TableRowGrayWhite>
            <TableRowGreen>
              <TableHeaderCell colSpan="5">20 years premium paid</TableHeaderCell>
            </TableRowGreen>
            <TableRowGray>
              <TableHeaderCell>Attained Age</TableHeaderCell>
              <TableHeaderCell>Base planned premium</TableHeaderCell>
              <TableHeaderCell>Account value</TableHeaderCell>
              <TableHeaderCell>Death benefit</TableHeaderCell>
              <TableHeaderCell>Cash surrender value</TableHeaderCell>
            </TableRowGray>
            {projectedValue}
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableTitleLong>Fluctuation of growth rate</TableTitleLong>
          <Table>
            <TableRowGreen>
              <TableHeaderCell colSpan="5">Comparison of projected cash surrender values at different durations and assumed growth rates</TableHeaderCell>
            </TableRowGreen>
            <TableRowGray>
              <TableHeaderCell>Attained Age</TableHeaderCell>
              <TableHeaderCell>0.00%</TableHeaderCell>
              <TableHeaderCell>2.00%</TableHeaderCell>
              <TableHeaderCell>5.00%</TableHeaderCell>
              <TableHeaderCell>7.00%</TableHeaderCell>
            </TableRowGray>
            {fluctuationGrowthRates}
          </Table>
        </TableWrapper>
        <Footer signature="Initials" pageNumber="4"/>
        <OwnerInformation 
          firstName={this.state.prospect.name.firstName}
          lastName={this.state.prospect.name.lastName}
          age={this.state.prospect.age}
          gender={this.state.prospect.gender}
        />
        <TableWrapper>
          <TableTitle>Premium Scenarios</TableTitle>
          <Table>
            <TableRowGrayDark>
              <TableHeaderCell colSpan="5">Based on Assumed Growth Rate of 7.7% (the one chosen for base plan), you need to pay the following premium to keep the projected coverage:</TableHeaderCell>
            </TableRowGrayDark>
            <TableRowGreen>
              <TableHeaderCell>Scenario Type</TableHeaderCell>
              <TableHeaderCell colSpan="2">Coverage</TableHeaderCell>
              <TableHeaderCell>Endowment</TableHeaderCell>
            </TableRowGreen>
            <TableRowGray>
              <TableHeaderCell>Up to age</TableHeaderCell>
              {premiumAgeElements}
            </TableRowGray>
            <TableRow>
              <TableBodyCellS>Annual Premium</TableBodyCellS>
              {premiumAmountElements}
            </TableRow>
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableTitleLong>Pension benefit option</TableTitleLong>
          <Table>
            <TableRowGrayDark>
              <TableHeaderCell colSpan="6">The following table shows the projected pension amounts per year commencing from various ages calculated based on the cash surrender values at the respective ages. The pension is paid quarterly. Below pension amounts are not guaranteed and are for illustrative purpose only. Actual pension amounts will be based on the rates available at the time of pension purchase.</TableHeaderCell>
            </TableRowGrayDark>
            <TableRowGreen>
              <TableHeaderCell>Pension age</TableHeaderCell>
              <TableHeaderCell>Cash surrender value</TableHeaderCell>
              <TableHeaderCell>5 years</TableHeaderCell>
              <TableHeaderCell>10 years plus Life</TableHeaderCell>
              <TableHeaderCell>20 years plus Life</TableHeaderCell>
              <TableHeaderCell>Whole Life</TableHeaderCell>
            </TableRowGreen>
            {pensionBenefits}
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableTitleLong>Important notes to read</TableTitleLong>
          <Table>
            <TableRow>
              <TableBodyCellS>
                <TableNotesListM>
                  <li>The product offers investment strategies that are based upon investment in mutual funds. Such strategies are subject to MetLife’s ability to invest in international mutual funds without restrictions in the local territory within they are sold.</li>
                  <li>All amounts that you allocate to the Investment Strategies are invested by MetLife. Your relationship is with MetLife. In turn, MetLife makes investments in line with the strategies you have chosen, and your Policy Account Values will reflect the performance of the strategies you select.</li>
                  <li>This illustration is based on the allocation that you have selected. The actual investment mix will be based on what is indicated in the application form. You may change this investment mix, with potential impact to future performance.</li>
                  <li>The Investment Account earnings may fluctuate up or down and principal and investment returns are not guaranteed. So if the Investment returns increase, your account value will be higher. If the Investment Yield falls, more Contributions may be required to achieve your savings goal.</li>
                  <li>The projected values include all charges. For all charges related to your Policy, please refer to Policy Terms and Conditions.</li>
                </TableNotesListM>
              </TableBodyCellS>
            </TableRow>
          </Table>
        </TableWrapper>
        <ApplicantNotes />
        <TableWrapper>
          <Table>
            <TableRowGreen>
              <TableHeaderCell>Insured</TableHeaderCell>
              <TableHeaderCell>Joint Insured</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
            </TableRowGreen>
            <TableRow>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Proof of Age / Passport Copy</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Proof of Age / Passport Copy</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Proof of Age / Passport Copy</li>
                </TableNotesListXS>
              </TableBodyCellS>
            </TableRow>
            <TableRow>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Residence Visa</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Residence Visa</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Residence Visa</li>
                </TableNotesListXS>
              </TableBodyCellS>
            </TableRow>
            <TableRow>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Contribution Allocation Form</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Contribution Allocation Form</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>Contribution Allocation Form</li>
                </TableNotesListXS>
              </TableBodyCellS>
            </TableRow>
            <TableRow>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>The Underwriting Department reserves the right to obtain additional requirements or reduce sum assured if required</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>The Underwriting Department reserves the right to obtain additional requirements or reduce sum assured if required</li>
                </TableNotesListXS>
              </TableBodyCellS>
              <TableBodyCellS>
                <TableNotesListXS>
                  <li>The Underwriting Department reserves the right to obtain additional requirements or reduce sum assured if required</li>
                </TableNotesListXS>
              </TableBodyCellS>
            </TableRow>
          </Table>
        </TableWrapper>
        <TableWrapper>
            <TableTitle>Substandard details</TableTitle>
            <Table>
              <TableRowGray>
                <TableHeaderCell>Benefit</TableHeaderCell>
                <TableHeaderCell>Party type</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>Rate type</TableHeaderCell>
                <TableHeaderCell>Rate Amount</TableHeaderCell>
              </TableRowGray>
              <TableRow>
                <TableBodyCellS>Life insurance</TableBodyCellS>
                <TableBodyCellS>Insured</TableBodyCellS>
                <TableBodyCellS>Travel Risk</TableBodyCellS>
                <TableBodyCellS>Table Driven</TableBodyCellS>
                <TableBodyCellS>Class E</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellS>Accidental Death Benefit</TableBodyCellS>
                <TableBodyCellS>Insured</TableBodyCellS>
                <TableBodyCellS>Medical Risk</TableBodyCellS>
                <TableBodyCellS>Table Driven</TableBodyCellS>
                <TableBodyCellS>Class F</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellS>Permanent and Total Disability</TableBodyCellS>
                <TableBodyCellS>Insured</TableBodyCellS>
                <TableBodyCellS>Medical Risk</TableBodyCellS>
                <TableBodyCellS>Table Driven</TableBodyCellS>
                <TableBodyCellS>Class C</TableBodyCellS>
              </TableRow>
              <TableRow>
                <TableBodyCellS>Accelerated Critical Illness</TableBodyCellS>
                <TableBodyCellS>Insured</TableBodyCellS>
                <TableBodyCellS>Medical Risk</TableBodyCellS>
                <TableBodyCellS>Table Driven</TableBodyCellS>
                <TableBodyCellS>Class B</TableBodyCellS>
              </TableRow>
            </Table>
          </TableWrapper>
        <Glossary />
        <Footer signature="Applicant's Signature" pageNumber="6"/>
      </MainContainer>
    );
  }
}

export default App;
