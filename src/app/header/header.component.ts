import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHidden = false

  percentcalc = ["Discount Calculator",
    "FD Calculator",
    "PPF Calculator",
    "Rule of 72 Calculator"]

  DebtReductionCalc = [
    "Calculate Monthly Payment",
    "Calculate Dept Amount",
    "Calculate Interest Rate",
    "Calculate Repayment Period",
  ]

  RdCalc = [
    "Calculate Maturity Amount",
    "Calculate Monthly Installment",
    "Calculate Interest Rate",
    "Calculate Number of Years",
  ]

  Cagrcalc = [
    "Calculate CAGR",
    "Calculate Starting Amount",
    "Calculate Final Amount",
    "Calculate Number of Years",]

  CompoundIntCalc = [
    "Calculate Compound Interest Amount",
    "Calculate Principal Amount",
    "Calculate Interest Rate",
    "Calculate Number of Years"]

  SimpleIntCalc = [
    "Calculate Simple Interest Amount",
    "Calculate Principal Amount",
    "Calculate Interest Rate",
    "Calculate Number of Years",
  ]

  SipCalc = [
    "Calculator SIP Maturity Amount",
    "Calculate SIP Investment Period",
    "Calculate Monthly SIP Amount",
    "Calculator Advance Maturity Amount",
    "SWP Calculator",
    "STP Calculator",
  ]

  LoanEmiCalc = [
    "Calculate EMI",
    "Advance EMI Calculator",
    "Calculate Loan Amount",
    "Calculate Loan Tenure",
    "Calculate Interest Rate",
    "Compare Loan",
    "Interest Rate Converter",
    "EMI FAQs",
  ]
}
