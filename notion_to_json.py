import requests
import json

NOTION_TOKEN = "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"
DATABASE_ID = "20730f74873f80d991e6fafc7d14d420"

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

url = f"https://api.notion.com/v1/databases/{DATABASE_ID}/query"

response = requests.post(url, headers=headers)
data = response.json()
<<<<<<< HEAD
print("🔍 Raw structure preview:")
for result in data.get("results", []):
    print(result["properties"].keys())

=======
print("🔍 Raw Notion structure preview:")
if data.get("results"):
    first = data["results"][0]
    print(json.dumps(first["properties"], indent=2))
else:
    print("⚠️ No results returned.")
>>>>>>> 1bd6fff (🔁 Sync updated Notion data and script)

output = []

for result in data.get("results", []):
    props = result.get("properties", {})

    def get_title(prop, key):
        return prop.get(key, {}).get("title", [{}])[0].get("text", {}).get("content", "") if prop.get(key) else ""

    def get_text(prop, key):
        return prop.get(key, {}).get("rich_text", [{}])[0].get("text", {}).get("content", "") if prop.get(key) else ""

    def get_select(prop, key):
        return prop.get(key, {}).get("select", {}).get("name", "") if prop.get(key) else ""

    def get_multi(prop, key):
        return [t.get("name") for t in prop.get(key, {}).get("multi_select", [])] if prop.get(key) else []

    def get_url(prop, key):
        return prop.get(key, {}).get("url", "") if prop.get(key) else ""

    output.append({
        "name": get_title(props, "Destination/Event Name"),
        "dateTime": get_text(props, "Date/Time"),
<<<<<<< HEAD
        "category": get_select(props, "Category"),
=======
        "category": get_multi(props, "Category"),
>>>>>>> 1bd6fff (🔁 Sync updated Notion data and script)
        "description": get_text(props, "Description"),
        "location": get_text(props, "Location"),
        "cost": get_text(props, "Cost"),
        "tags": get_multi(props, "Tags/Vibes"),
        "maps": get_url(props, "Google Maps Link"),
        "link": get_url(props, "Event Page/Info Link")
    })

with open("data.json", "w") as f:
    json.dump(output, f, indent=2)

<<<<<<< HEAD
print("✅ data.json has been created.")
=======
print("✅ data.json has been created.")
>>>>>>> 1bd6fff (🔁 Sync updated Notion data and script)
