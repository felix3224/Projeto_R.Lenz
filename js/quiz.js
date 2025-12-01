// Sistema do quiz
        document.getElementById('submit-quiz').addEventListener('click', function() {
            // Respostas corretas
            const correctAnswers = {
                q1: 'a', // Ricardo Lenz Cesar
                q2: 'd', // Linux
                q3: 'a', // Português, inglês e um pouco de alemão
                q4: 'b', // Zelda
                q5: 'a', //  mais um ano
                q6: 'a', // Preto
                q7: 'a', // Ubuntu
                q8: 'c', // Nintendo
                q9: 'a', // 2006
                q10: 'a' // 2009
            };
            
            let score = 0;
            let allAnswered = true;
            
            // Verificar se todas as perguntas foram respondidas
            for (let i = 1; i <= 10; i++) {
                const questionName = 'q' + i;
                const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
                
                if (!selectedOption) {
                    allAnswered = false;
                    break;
                }
            }
            
            if (!allAnswered) {
                alert('Por favor, responda todas as perguntas antes de verificar o resultado!');
                return;
            }
            
            // Verificar respostas e calcular pontuação
            for (let i = 1; i <= 10; i++) {
                const questionName = 'q' + i;
                const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
                
                if (selectedOption && selectedOption.value === correctAnswers[questionName]) {
                    score++;
                }
            }
            
            // Exibir resultado
            const resultDiv = document.getElementById('quiz-result');
            const scoreSpan = document.getElementById('score');
            const resultMessage = document.getElementById('result-message');
            
            scoreSpan.textContent = `${score}/10`;
            
            // Definir mensagem baseada na pontuação
            let message = '';
            
            if (score <= 3) {
                message = 'Você conhece pouco o Professor Lenz. Talvez seja hora de conhecê-lo melhor!';
                scoreSpan.className = 'score score-0-3';
            } else if (score >= 4 && score <= 6) {
                message = 'Você conhece o Professor Lenz razoavelmente bem!';
                scoreSpan.className = 'score score-4-6';
            } else if (score >= 7 && score <= 9) {
                message = 'Você sabe muito sobre o Professor Lenz! Parabéns!';
                scoreSpan.className = 'score score-7-9';
            } else if (score === 10) {
                message = 'Você É o Professor Lenz! Ou pelo menos conhece ele extremamente bem!';
                scoreSpan.className = 'score score-10';
            }
            
            resultMessage.textContent = message;
            resultDiv.style.display = 'block';
            
            // Rolar até o resultado
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
        
        // Botão para tentar o quiz novamente
        document.getElementById('retry-quiz').addEventListener('click', function() {
            document.getElementById('quiz-form').reset();
            document.getElementById('quiz-result').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });