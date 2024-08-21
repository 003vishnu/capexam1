
module.exports = cds.service.impl(async function () {

    const { EmployeeSet } = this.entities;


    this.before('CREATE', 'EmployeeSet', async (req) => {
        const { salaryAmount, Currency_code } = req.data;
        if (salaryAmount >= 50000  ) {
            req.error(400, 'Employee’s salary must be less than 50000 USD and currency must be in USD');
        }
        if(Currency_code !== 'USD')
            {
                req.error(400, 'Employee’s salary currency must be in USD');
        }
        else{
            console.log('Created successfully');
        }
    });

    this.after('CREATE', 'EmployeeSet', async (data, req) => {
        console.log('Create operation successful');
    });

    //update
    this.before('UPDATE', EmployeeSet, async(req) => {
       
        var salaryAmount = parseInt(req.data.salaryAmount);
        let Currency_code = req.data.Currency_code;
        let id=req.data.ID;
        let nameFirst=req.data.nameFirst;
        let loginName=req.data.loginName;
        const oldData = await SELECT.from(EmployeeSet).columns('nameFirst','loginName').where ({ID:id})
        if(salaryAmount>50000 || Currency_code!=='USD'){
            req.error(500,"Employees salary must be less than 50000 USD");
         }else if(nameFirst != oldData[0].nameFirst || loginName!==oldData[0].loginName){
            req.error(500,"Operation not allowed");
        }
    });
 
    this.after('UPDATE',EmployeeSet, async (req) => {
        console.log('Update Operation Successful');
    });
 
 
    //delete
    this.before('DELETE', EmployeeSet, async(req)=>{
        let id=req.data.ID;
        const oldData = await SELECT.from(EmployeeSet).columns('nameFirst').where ({ID:id});
        console.log(oldData[0].nameFirst[0]);
        if(oldData[0].nameFirst[0]=='S'){
            req.error(500,'Operation Not Possible');
        }
    });
   
    this.after('DELETE',EmployeeSet, async (req) => {
        console.log('Delete Operation Successful');
    });
})  