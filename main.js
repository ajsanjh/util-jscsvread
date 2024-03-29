window.onload=function(){
    function uploadDealcsv () {}; 

    /*------ Method for read uploded csv file ------*/
    uploadDealcsv.prototype.getCsv = function(e) {
        
        let input = document.getElementById('dealCsv');
        input.addEventListener('change', function() {

            if (this.files && this.files[0]) {

                var myFile = this.files[0];
                var reader = new FileReader();
                
                reader.addEventListener('load', function (e) {
                    
                    let csvdata = e.target.result; 
                    parseCsv.getParsecsvdata(csvdata); // calling function for parse csv data 
                });
                
                reader.readAsBinaryString(myFile);
            }
        });
    }

/*------- Method for parse csv data and display --------------*/
    uploadDealcsv.prototype.getParsecsvdata = function(data) {

        let parsedata = [];

        let newLinebrk = data.split("\n");
        for(let i = 0; i < newLinebrk.length; i++) {

            parsedata.push(newLinebrk[i].split(","))
        }

        console.table(parsedata);
        
        format(parsedata);
    }
    var parseCsv = new uploadDealcsv();
    parseCsv.getCsv();

    let format = function(data) {
        let nl = '<br>';
        let displayEl = document.getElementById('out');
        let out = '';
        for(let i = 1; i < data.length; i++){
            out += 
            `
            <p>
            *************************${nl}
            ${data[i][0]}${nl}
            *************************${nl}
            ${data[i][1]}${nl}
            *************************${nl}
            ${data[i][2]}${nl}
            *************************${nl}
            ${data[i][3]}${nl}
            *************************${nl}
            </p>
            <hr>${nl}
            `;
        }
        displayEl.innerHTML = out;
    }
}