# PROMPTS.md

# Week 7 – AI Prompt Log

## AI Feature
Sentiment Analysis with Google Gemini API

---

## Prompt Variation 1

### Prompt

```text
Analyze the following customer review and classify it as positive, negative, or neutral.
Also provide one short improvement suggestion.

Review:
{user_review}
```

### Example Input

```text
The room was clean and the staff were very helpful.
```

### Example Output

```json
{
  "sentiment": "positive",
  "improvement": "Continue providing excellent customer service."
}
```

---

## Prompt Variation 2

### Prompt

```text
You are an expert sentiment analysis assistant.

Read the customer review carefully.

Return ONLY valid JSON in the following format:

{
  "sentiment":"positive/negative/neutral",
  "improvement":"one short suggestion"
}

Review:
{user_review}
```

### Example Input

```text
The hotel was dirty and the food was terrible.
```

### Example Output

```json
{
  "sentiment": "negative",
  "improvement": "Improve cleanliness and food quality."
}
```

---

## Prompt Variation 3 (Best Prompt)

### Prompt

```text
You are a sentiment analysis assistant.

Analyze the following customer review.

Return ONLY valid JSON in this format:

{
  "sentiment":"positive/negative/neutral",
  "improvement":"one short suggestion"
}

Review:
{user_review}
```

### Example Input

```text
The rooms were nice but the WiFi was slow.
```

### Example Output

```json
{
  "sentiment": "neutral",
  "improvement": "Upgrade the WiFi speed."
}
```

---

# Best Prompt

Prompt Variation 3 produced the most reliable results because it instructed Gemini to return only valid JSON in a fixed format. This made it easy for the backend to parse the response using `JSON.parse()` without additional processing. It also generated consistent sentiment labels and concise improvement suggestions, making it suitable for direct storage in MongoDB and display in the frontend.

---

# System Prompt Used

```text
You are a sentiment analysis assistant.

Analyze the following customer review.

Return ONLY valid JSON in this format:

{
  "sentiment":"positive/negative/neutral",
  "improvement":"one short suggestion"
}
```
