import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensiondetailsService } from 'src/app/pensiondetails.service';

@Component({
  selector: 'app-pensiondisburse',
  templateUrl: './pensiondisburse.component.html',
  styleUrls: ['./pensiondisburse.component.css']
})
export class PensiondisburseComponent implements OnInit {

  processpensiondata={
    aadhaarNumber:'',
    transactionAmount:Number,
    accountNumber:'',
    timestamp:''

  }
  msg='';
  isdisplayed: boolean =false;
  count:number=0;
  error = false;
  errorMessage = '';

  constructor(private _pensiondetails:PensiondetailsService,private route:Router) { }

  ngOnInit(): void {
    this.getTransactionDetails();
  }
  private getTransactionDetails(){
    this._pensiondetails.getPensionDisbureDetails().subscribe(
        data=>{
        if(data.transactionAmount=='0'){
          this.error = true;
          this.errorMessage='Pension cant be disbursed! Try with Valid Aadhar Card';
        }else{
        this.processpensiondata=data;
        this.processpensiondata.timestamp=''+ (new Date().toLocaleString());
        this.error = false;
        if(this.count==0){
          this.isdisplayed = true;
          this.count++;
        }
      
        this.msg='Congratulations!!! Pension Disburse has been successfully completed. Pension Amount  ₹' + data.transactionAmount  + '  will be credited into account in 24 hours';
        }
      },
    );
  
    }
  navigateBack(){
      this.route.navigateByUrl("home");
  }

}
