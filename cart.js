console.log('it is working')
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzas', () => ({
        smallCount: 0,
        medCount: 0,
        largeCount: 0,
        smallPrice: 49.99,
        medPrice: 89.99,
        largePrice: 129.99,
        tendered: '',
        addSmall(){
            this.smallCount++
        },
        addMed(){
            this.medCount++
        },
        addLarge(){
            this.largeCount++
        },
        removeSmall(){
            this.smallCount--
        },

        removeMed(){
            this.medCount--
        },

        removeLarge(){
            this.largeCount--
        },


        getSmallTotal(){
            let total = this.smallCount * this.smallPrice
            return total
        },
        getMedTotal(){
            let total = this.medCount * this.medPrice
            return total
        },
        getLargeTotal(){
            let total = this.largeCount * this.largePrice
            return total
        },

        getTotal(){
            let total = this.getSmallTotal() + this.getMedTotal() + this.getLargeTotal()
            return total
        },

        feedbackText(){
            if(this.getTotal() > parseFloat(this.tendered)){
                //const change=this.getTotal - parseFloat
               // message.innerHTML = "Enjoy your Pizza! your change is R" + change.toFixed(2);
                return 'Funds too low' 
            }else if(this.getTotal() <= parseFloat(this.tendered)){
                return 'Funds are sufficient'
           
            }
        },

        checkout(){
            if(this.feedbackText() == 'Funds too low'){
                window.alert('Declined! Insufficient funds.')
            }else if(this.tendered === ''){
                window.alert('You did not put in any amount')
                
            }else{
                
                this.smallCount = 0
                this.medCount = 0
                this.largeCount = 0
                this.tendered = ''
                window.alert("Approved! Enjoy your Pizza!")
            }
            
        }
    }))
})