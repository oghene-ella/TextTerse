# TextTerse

TextTerse is a simple text summarization application that utilizes the Hugging Face API and the BART model for summarizing long texts into concise summaries. This project allows users to send text data to the API and retrieve summarized text as a response.

## Features

- **Text Summarization:** Uses the BART model from Hugging Face for text summarization.
- **API Integration:** The app integrates with Hugging Face's inference API.
- **Environment Configuration:** Securely integrates API tokens using environment variables.

## Tech Stack

- **Backend:** Node.js
- **API:** Hugging Face API (BART model)
- **HTTP Requests:**  `fetch` (built-in JavaScript method)
- **Environment Variables:** `dotenv` for API token configuration

## Installation

To get started with TextTerse, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/oghene-ella/TextTerse.git
