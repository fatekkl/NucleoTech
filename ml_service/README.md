---

### 📄 `README.md`

```markdown
# Predição de Alta vs Internação com BioBERT

Este projeto utiliza modelos de linguagem baseados em BioBERT treinados em português para prever se um paciente será **internado** ou receberá **alta** com base em textos clínicos (em `.pdf` ou `.txt`). O objetivo é auxiliar no processo de triagem e tomada de decisão em ambientes hospitalares veterinários.

---

## 🧠 Modelo

- 🔍 **Modelo base**: [`pucpr/biobertpt-all`](https://huggingface.co/pucpr/biobertpt-all)
- 🧾 **Tokenizador**: BioBERT tokenizer em português
- 🎯 **Tarefa**: Classificação binária (`Internação`, `Alta`)
- ⚙️ **Frameworks**: PyTorch + Hugging Face Transformers

---

## 📁 Estrutura de Pastas

```
data/
├── raw/
│   ├── paciente_001/
│   │   ├── exame.pdf
│   │   └── resumo.txt
│   └── paciente_002/
│       └── prontuario.pdf
```

- Cada pasta dentro de `data/raw` representa um paciente.
- Arquivos `.pdf` e `.txt` são lidos e concatenados para a predição.

---

## 🚀 Como Executar

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

2. **Instale as dependências**:

```bash
pip install -r requirements.txt
```

> ⚠️ Certifique-se de ter o `PyMuPDF` instalado para leitura de PDFs:
>
> ```bash
> pip install PyMuPDF
> ```

3. **Execute a predição**:

```bash
python main.py
```

---

## 🖥️ Exemplo de Saída

```
==================================================
 Análise do paciente: paciente_001 
==================================================
Trecho do texto extraído:
"Paciente foi admitido apresentando vômitos persistentes e apatia. Exames revelaram alterações no hemograma..."
Predição final: Internação
Probabilidades:
  Internação: 85.32% | Alta: 14.68%
Estimativa de dias de internação: 6
```

---

## 📌 Requisitos

- Python 3.8+
- PyTorch
- Transformers (Hugging Face)
- PyMuPDF (`fitz`)
- NumPy

---

## 🧪 Testes

Você pode testar diferentes documentos colocando-os em subpastas dentro de `data/raw`, com arquivos `.pdf` e `.txt`. O script vai processar todos os pacientes automaticamente.

---

## 🤖 Estimativa de Dias

A função `estimate_days()` estima a duração da internação com base na probabilidade da classe `Internação`.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✍️ Autor

Desenvolvido por **Matheus de Oliveira**  
🔗 GitHub: [github.com/fatekkl](https://github.com/fatekkl)

```

---