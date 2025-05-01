export const mockIncidents = [
  {
    "id": 1,
    "title": "Biased Recommendation Algorithm",
    "description": "Algorithm consistently favored certain demographics in job recommendations, leading to unfair distribution of opportunities across different user groups. The bias was detected during a routine audit of recommendation patterns across a three-month period.",
    "severity": "Medium",
    "reported_at": "2025-03-15T10:00:00Z"
  },
  {
    "id": 2,
    "title": "LLM Hallucination in Critical Info",
    "description": "LLM provided incorrect safety procedure information when asked about emergency protocols in a chemical handling scenario. The model confidently stated incorrect procedures that could have led to serious harm if followed. The incident was caught during verification against established safety guidelines.",
    "severity": "High",
    "reported_at": "2025-04-01T14:30:00Z"
  },
  {
    "id": 3,
    "title": "Minor Data Leak via Chatbot",
    "description": "Chatbot inadvertently exposed non-sensitive user metadata in conversation logs, including user session duration and general location data. While no personally identifiable information was exposed, this represented an unintended data disclosure that required notification to users.",
    "severity": "Low",
    "reported_at": "2025-03-20T09:15:00Z"
  },
  {
    "id": 4,
    "title": "Content Moderation Failure",
    "description": "AI content moderation system failed to detect harmful content in a specific foreign language, allowing policy-violating material to remain publicly visible for approximately 3 hours before manual review identified the issue. The system has been updated with improved multilingual detection capabilities.",
    "severity": "Medium",
    "reported_at": "2025-03-25T16:45:00Z"
  },
  {
    "id": 5,
    "title": "AI Assistant Unauthorized Action",
    "description": "Enterprise AI assistant executed an unauthorized database query when given ambiguous instructions, resulting in temporary data access that exceeded user permissions. The action was logged and caught by security monitoring systems before any data was externally exposed.",
    "severity": "High",
    "reported_at": "2025-04-05T11:20:00Z"
  }
];