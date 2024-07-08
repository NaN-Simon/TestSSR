export async function feedbackSubmit(form: HTMLFormElement, data: any) {
    const testUrl = 'https://formspree.io/f/mrgnvnrn'
    fetch(testUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            const answerElement = form.querySelector('span[id="answer"]');
            if (answerElement) {
                answerElement.textContent = "Thank you for submitting the form";
            }
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    const answerElement = form.querySelector('span[id="answer"]');
                    if (answerElement) {
                        answerElement.textContent = data.errors.map((error: any) => error.message).join(", ");
                    }
                } else {
                    const answerElement = form.querySelector('span[id="answer"]');
                    if (answerElement) {
                        answerElement.textContent = "Что-то пошло не так, попробуйте отправить еще раз"
                    }
                }
            })
        }
    }).catch(_ => {
        const answerElement = form.querySelector('span[id="answer"]');
        if (answerElement) {
            answerElement.textContent = "Что-то пошло не так, попробуйте отправить еще раз"
        }
    });
}