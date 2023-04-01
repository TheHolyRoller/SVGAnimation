


const svg = document.getElementById('triangles'); 


svg.onClick = (e) => {
    
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']; 
    
    const rando = () =>{
        
        colors[Math.floor(Math.random() * colors.length)];
        
        
    }
    document.documentElement.style.cssText = `
    
    --dark-color: ${rand()}; 
    --light-color: ${rand()}; 
    

    `
    
}









































