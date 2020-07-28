function ids(a,b) {  
    const inpFile = document.getElementById(a.id);
    const previewContainer = document.getElementById(b);
    const previewImage = previewContainer.querySelector(".imagePreviewImage");
    const previewDefaultText = previewContainer.querySelector(".imagePreviewDefaultText");
    
    inpFile.addEventListener("change", function() {
        const file = this.files[0];
        
        if(file) {
            const reader = new FileReader();
            
            previewDefaultText.style.display = "none";
            previewImage.style.display = "block";
            
            reader.addEventListener("load", function() {
                // console.log(this);
                previewImage.setAttribute("src", this.result);
            });
            
            reader.readAsDataURL(file);
        } else {
            previewDefaultText.style.display = null;
            previewImage.style.display = null;
            previewImage.setAttribute("src", "");
        }
    })
}
    