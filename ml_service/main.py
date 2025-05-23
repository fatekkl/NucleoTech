import os
import fitz  # PyMuPDF
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch.nn.functional as F
import random
import numpy as np

def set_seed(seed=42):
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    if torch.cuda.is_available():
        torch.cuda.seed_all(seed)

set_seed()

BASE_DIR = "data/raw"
MODEL_NAME = "pucpr/biobertpt-all"

# Agora com 2 classes: 0 = Internação, 1 = Alta
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME, num_labels=2)
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model.eval()

def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        doc = fitz.open(pdf_path)
        for page in doc:
            text += page.get_text()
    except Exception as e:
        print(f"Erro ao ler PDF {pdf_path}: {e}")
    return text

def extract_text_from_folder(folder_path):
    texts = []
    for root, dirs, files in os.walk(folder_path):
        for file in sorted(files):
            file_path = os.path.join(root, file)
            if file.lower().endswith(".pdf"):
                texts.append(extract_text_from_pdf(file_path))
            elif file.lower().endswith(".txt"):
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        texts.append(f.read())
                except Exception as e:
                    print(f"Erro ao ler TXT {file_path}: {e}")
    return "\n".join(texts)

def estimate_days(prob_internacao, max_days=7):
    if prob_internacao < 0.5:
        return 0
    else:
        scaled = (prob_internacao - 0.5) / 0.5
        return int(scaled * (max_days - 1)) + 1

def predict(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    probs = F.softmax(outputs.logits, dim=-1).squeeze().tolist()
    predicted_class = torch.argmax(torch.tensor(probs)).item()
    prediction = "Alta" if predicted_class == 1 else "Internação"
    days = estimate_days(probs[0])
    return prediction, probs, days

def format_probs(probs):
    return f"Internação: {probs[0]*100:.2f}% | Alta: {probs[1]*100:.2f}%"

def main():
    for folder_name in os.listdir(BASE_DIR):
        folder_path = os.path.join(BASE_DIR, folder_name)
        if os.path.isdir(folder_path):
            print("="*50)
            print(f" Análise do paciente: {folder_name} ")
            print("="*50)

            text = extract_text_from_folder(folder_path)
            if not text.strip():
                print("⚠️  Nenhum texto encontrado para análise.\n")
                continue

            trecho = text[:500].replace('\n', ' ')
            print(f"Trecho do texto extraído:\n{trecho}\n")

            prediction, probs, days = predict(text)
            print(f"Predição final: \033[1m{prediction}\033[0m")
            print(f"Probabilidades:\n  {format_probs(probs)}")
            print(f"Estimativa de dias de internação: {days}\n")

if __name__ == "__main__":
    main()
