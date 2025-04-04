function hideErrorTypes(errorType) {
    if (errorType != null && errorType != '') {
        var invalidErrorTypeElements = document.querySelectorAll('[section-errortype]');
		var totalElementsHideForErrorType = 0;
		var onmoErrorBlockElement = invalidErrorTypeElements[0];
		
        if (invalidErrorTypeElements.length != 0) {
            for (let i = 0; i < invalidErrorTypeElements.length; i++) {
                const elementToHide = invalidErrorTypeElements[i];

                var attributeValue = elementToHide.getAttribute('section-errortype');

                if (!attributeValue.includes(errorType)) {
                    elementToHide.style.display = "none";
					totalElementsHideForErrorType+=1;
                }
				if(attributeValue.includes('ALL')){
					onmoErrorBlockElement = invalidErrorTypeElements[i];
				}
            }
        }
		
		if(totalElementsHideForErrorType===invalidErrorTypeElements.length){
			/// Always display 'ALL' block element if incoming errorType not found in DOM and if 'ALL' not found then go with first block
			onmoErrorBlockElement.style.display = "block"
		}
    }
}
