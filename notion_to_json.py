import requests
import json

NOTION_TOKEN = "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"
DATABASE_ID = "20730f74873f80d991e6fafc7d14d420"


output = []

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

url = f"https://api.notion.com/v1/databases/{DATABASE_ID}/query"

response = requests.post(url, headers=headers)
data = response.json()

# 💾 Save raw Notion response to a file
with open("notion_raw.json", "w") as f:
    json.dump(data, f, indent=2)

print("📄 Saved raw Notion response to notion_raw.json")

# 🔍 Show raw keys from first item if there are any
if "results" in data and len(data["results"]) > 0:
    print("✅ Results found. Sample keys:")
    print(data["results"][0].get("properties", {}).keys())
else:
    print("⚠️ No results returned.")