document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone'); 
    const subjectInput = document.getElementById('subject'); 

    // mapeamento de campos e mensagens de erro
    const fieldMap = {
        name: { input: nameInput, errorElement: document.getElementById('nameError'), label: 'Nome Completo' },
        email: { input: emailInput, errorElement: document.getElementById('emailError'), label: 'E-mail' },
        phone: { input: phoneInput, errorElement: document.getElementById('phoneError'), label: 'Telefone' }, 
        subject: { input: subjectInput, errorElement: document.getElementById('subjectError'), label: 'Assunto' } 
    };

    // --- FUNÇÃO DE MÁSCARA DE TELEFONE ---
    function applyPhoneMask() {
        // pega apenas os dígitos
        let value = phoneInput.value.replace(/\D/g, ''); 
        let formattedValue = '';

        if (value.length > 0) {
            // adiciona o DDD entre parenteses
            formattedValue = '(' + value.substring(0, 2);
        }
        if (value.length > 2) {
            // fecha parenteses
            formattedValue += ') ';
            
            // verifica se é 9 dígitos (celular) ou 8 (fixo)
            if (value.length > 6) {
                // Celular: (XX) 9XXXX-XXXX
                if (value.length > 10) { 
                    formattedValue += value.substring(2, 7) + '-' + value.substring(7, 11);
                } 
                // fixo ou celular ainda incompleto: (XX) XXXX-XXXX
                else {
                    formattedValue += value.substring(2, 6) + '-' + value.substring(6, 10);
                }
            } else {
                formattedValue += value.substring(2);
            }
        }
        
        phoneInput.value = formattedValue;
    }
    // --- FIM FUNÇÃO DE MÁSCARA ---


    // funções auxiliares para manipulação de erro
    function displayError(inputElement, errorMessage, errorContainer) {
        inputElement.classList.add('invalid');
        inputElement.setAttribute('aria-invalid', 'true');
        errorContainer.textContent = errorMessage;
    }

    function clearError(inputElement, errorContainer) {
        inputElement.classList.remove('invalid');
        inputElement.removeAttribute('aria-invalid');
        errorContainer.textContent = '';
    }

    // função principal de validação
    function validateField(fieldId) {
        const field = fieldMap[fieldId];
        const { input, errorElement, label } = field;
        
        clearError(input, errorElement); 
        
        // exceção: a validação do telefone deve ignorar a máscara (que são caracteres não-dígitos)
        const rawValue = input.id === 'phone' ? input.value.replace(/\D/g, '') : input.value;

        if (input.validity.valueMissing || rawValue.length === 0) {
            displayError(input, `O campo ${label} é obrigatório.`, errorElement);
            return false;
        }

        // validação de tamanho mínimo (para nome e assunto)
        if ((input.id === 'name' || input.id === 'subject') && input.validity.tooShort) {
            displayError(input, `O campo ${label} deve ter pelo menos ${input.minLength} caracteres.`, errorElement);
            return false;
        }

        // validação de formato de e-mail
        if (input.id === 'email' && input.validity.typeMismatch) {
            displayError(input, 'Por favor, insira um endereço de e-mail válido.', errorElement);
            return false;
        }
        
        // validação do Telefone (garante que tenha 10 ou 11 dígitos)
        if (input.id === 'phone' && (rawValue.length < 10 || rawValue.length > 11)) {
            displayError(input, 'Por favor, insira um telefone válido com DDD (10 ou 11 dígitos).', errorElement);
            return false;
        }

        return true;
    }

    // --- ASSOCIAÇÃO DA MÁSCARA E VALIDAÇÃO AOS EVENTOS ---
    
    // aplica a máscara a cada toque de tecla
    phoneInput.addEventListener('input', applyPhoneMask);
    
    // adiciona validação em tempo real (blur e input)
    Object.values(fieldMap).forEach(field => {
        field.input.addEventListener('blur', () => validateField(field.input.id));
        field.input.addEventListener('input', () => {
            // valida apenas se o campo já estiver marcado como inválido (melhora a UX)
            if (field.input.classList.contains('invalid')) {
                validateField(field.input.id);
            }
        });
    });

    // validação no envio do formulário
    form.addEventListener('submit', function (e) {
        let formIsValid = true;
        
        // Roda a validação em todos os campos
        ['name', 'email', 'phone', 'subject'].forEach(fieldId => {
            if (!validateField(fieldId)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            e.preventDefault(); 
            document.querySelector('.invalid').focus();
        } else {
            // SIMULAÇÃO DE ENVIO
            alert('Formulário enviado com sucesso!'); 
            e.preventDefault();
            form.reset(); 
        }
    });
});