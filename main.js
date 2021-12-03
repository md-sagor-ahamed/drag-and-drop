

const UI = {
    loadSelector(){
        const dropArea = document.querySelector(".drag-area");
        const browsFile = document.querySelector(".brows");
        const dropAreaTitle = document.querySelector(".heading");
        const hiddenFile = document.querySelector(".hiddenFile");
        return {
            dropArea,
            browsFile,
            dropAreaTitle,
            hiddenFile
        }
    },
    dragOverThePicture(){
        const {dropArea, dropAreaTitle} = this.loadSelector();
        dropArea.addEventListener("dragover", (e)=>{
            e.preventDefault();
            dropAreaTitle.textContent = "Please Drop The File";
            dropArea.classList.add("active")
        })
    },
    dragOutThePicture(){
        const {dropArea, dropAreaTitle} = this.loadSelector();
        dropArea.addEventListener("dragleave", ()=>{
            dropAreaTitle.textContent = "Drag and drop the upload file"
            dropArea.classList.remove("active")
        })
    },
    dropTheFileInArea(){
        const {dropArea, dropAreaTitle} = this.loadSelector();
        dropArea.addEventListener("drop", (e)=>{
            e.preventDefault();
            dropArea.classList.remove("active")
            let file = e.dataTransfer.files[0]
            if(file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"){
                this.validateTheFile(file);   
            }else{
                alert("Your provided file not match the condition")
            }
        })
    },
    validateTheFile(file){
        const {dropArea} = this.loadSelector();
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            const fileURL = fileReader.result;
            const fileImage = `<img class="dropedImage" src="${fileURL}" alt="">`
            dropArea.innerHTML = fileImage
        }
        fileReader.readAsDataURL(file)
    },
    loadFileByClicking(){
        const {browsFile, hiddenFile} = this.loadSelector();
        browsFile.addEventListener("click", ()=>{
            hiddenFile.click();
        })
    },
    shoingFileByClicking(){
        const {hiddenFile} = this.loadSelector();
        hiddenFile.addEventListener("change", ()=>{
            let file = hiddenFile.files[0]
            if(file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"){
                this.validateTheFile(file);   
            }else{
                alert("Your provided file not match the condition")
            }
        })
    },
    init(){
        this.dragOverThePicture();
        this.dragOutThePicture();
        this.dropTheFileInArea();
        this.loadFileByClicking();
        this.shoingFileByClicking();
    }
}

UI.init();




