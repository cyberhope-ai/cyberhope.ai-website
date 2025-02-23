# Project Guide for Claude 3.5 Sonet in Cursor: 11labs_Outbound (ElevenLabs + Twilio Voice AI)

**Project Goal:**  Build an "Outbound Caller for ElevenLabs Conversational AI Agents" using Node.js, Twilio API, and ElevenLabs Conversational AI API on Windows with PowerShell. This project aims to enable real-time, human-like AI voice conversations during phone calls (outbound and eventually inbound).

**Environment:** Windows 10/11, PowerShell, Cursor IDE. **Strictly NO Linux commands.**

**AI Assistant:** Claude 3.5 Sonet

**Project Context & State:**

* We have a basic Node.js server setup using Express that can initiate outbound calls and connect to an ElevenLabs agent.
* `.env` file is configured with necessary Twilio and ElevenLabs credentials.
* Current focus is on **testing and refining the outbound call integration**, specifically debugging issues related to WebSocket connection errors, lack of activity in the ElevenLabs dashboard, and Twilio errors.
* We need to ensure the AI agent responds appropriately and handle edge cases (no speech from callee, connection drops).
* Future steps include setting up inbound call handling and improving system robustness, error handling, conversational logic, call recording, and documentation.

**Key Tech & APIs:**

* **Node.js with Express:**  For the server handling call events and API interactions.
* **Twilio API:** For phone call control (initiating calls, receiving webhooks, call status).
* **ElevenLabs Conversational AI API:** For the AI agent voice and dialogue via WebSockets.
* **npm:** Package manager for Node.js dependencies.
* **Potentially:** `dotenv` for environment variable management, audio processing libraries (if needed later).
* **GitHub:** For version control (project is already on GitHub).

**Engineer's Debugging Guidance (Summary from Email):**

The engineer's email focuses on debugging issues with the ElevenLabs + Twilio integration, specifically highlighting:

* **WebSocket Connection Issue (Code 1008):**
    * **Possible Cause:** Policy violation due to incorrect audio format or malformed initial configuration message (`start` message).
    * **Action Items:**
        * **Verify Audio Format:** Must be μ-law encoding, 8kHz sample rate, Mono channel, 16-bit depth.
        * **Check `start` Message Structure:** Ensure all required fields are present, correctly formatted (JSON), and no typos. Pay attention to `voice_id`, `model_id`, `text`, `voice_settings`, and `conversation_settings`.
* **No Activity in ElevenLabs Dashboard:**
    * **Possible Cause:** Webhook calls from Twilio not reaching ElevenLabs.
    * **Action Items:**
        * **Webhook URL Verification:** Check Twilio Voice URL and Status URL settings point to the correct ElevenLabs endpoints (`https://api.elevenlabs.io/v1/twilio/inbound_call?agent_id=[AGENT_ID]` and `https://api.elevenlabs.io/v1/twilio/status?agent_id=[AGENT_ID]`). Ensure method is POST.
        * **Headers Verification:** Confirm `Content-Type: application/json` and `xi-api-key: [Your API Key]` headers are included in webhook calls.
        * **Test Webhook URLs:** Use tools like Postman or `curl` (PowerShell version) to test webhook URLs directly.
* **Twilio Errors (15003 and 11200):**
    * **Error 15003 (Callback URL Warning):**  Check if callback URLs are publicly accessible and correctly formatted.
    * **Error 11200 (HTTP Retrieval Failure):**  Network issues or incorrect URLs preventing Twilio from reaching ElevenLabs.
    * **Action Items:**
        * **Verify Callback URLs:** Ensure they are correct and your server is reachable by Twilio.
        * **Check Network:** Investigate potential network problems between Twilio and your server/ElevenLabs.

**Debugging Tools (Recommended by Engineer):**

* **Twilio Logs (Request Inspector):** Essential for viewing detailed webhook requests and responses within Twilio.
* **Ngrok:** Useful if testing locally to expose your local server to the internet for Twilio webhooks (if needed, but project is intended for direct server deployment, so prioritize direct webhook testing first).
* **ElevenLabs Dashboard:** Confirm agent configuration and activity.

**Ground Rules for Claude 3.5 Sonet (CRITICAL & REITERATED):**

1. **WINDOWS POWERSHELL COMMANDS ONLY:**  **Absolutely NO Linux commands are allowed.**  All instructions for commands, scripts, and file paths must be Windows/PowerShell compatible. Examples:
    * Use `Get-ChildItem` instead of `ls`.
    * Use `npm install` (cross-platform) instead of `apt-get install`.
    * Use backslashes `C:\path\to\file` in file paths.
    * Use PowerShell syntax for scripting (e.g., `$variable`, `if ($condition) {}`).
    * When suggesting `curl` commands, provide the PowerShell `Invoke-WebRequest` equivalent.

2. **Context Persistence & Project Awareness:** Remember all project details provided, including the project goal, tech stack, current state, and engineer's debugging guidance. Refer back to this document and previous conversation history.  Do not start from scratch on each interaction.

3. **Task-Focused & Goal-Oriented:**  Keep suggestions and code relevant to the immediate project goals:
    * **Priority 1 (Current):** Fix outbound call issues and achieve a working outbound call flow with AI voice.
    * **Priority 2 (Next):** Set up inbound call handling with AI voice.
    * **Priority 3 (Later):** Polish and improve the overall system (robustness, documentation, etc.).

4. **Project Code and Conventions Consistency:** When generating code, adhere to the existing code style and patterns in the project. If the project uses `async/await`, use that. Maintain consistent logging and error handling approaches.

5. **Confirmation and Safety First:** Before suggesting any potentially destructive actions (e.g., making actual Twilio calls in a live environment, deleting files, significant code changes), **always ask for confirmation** and **briefly explain the reasoning** behind the suggestion.  This promotes trust and understanding.

6. **No Unnecessary Linux Commands (RE-EMPHASIZED):**  This is crucial. Double-check every command suggestion to ensure it is PowerShell compatible.  If unsure, ask for clarification in PowerShell terms.

**Project Tasks & Steps - Phase 1: Outbound Call Verification & Debugging (Current Focus)**

* **Task 1.1: Debugging WebSocket Connection Error 1008**

    * **Step 1.1.1: Verify Audio Format Configuration:**
        * **Claude, can you help me review the code that sends audio to the ElevenLabs WebSocket?**  Let's identify where the audio encoding, sample rate, channels, and bit depth are configured.
        * **Claude, based on the engineer's email, the required audio format is:** μ-law encoding, 8kHz sample rate, Mono channel, 16-bit depth. **Can you help me confirm that our audio encoding setup in the code matches these requirements?** If not, what PowerShell (or Node.js code snippets if applicable) can we use to convert or ensure the correct format?

    * **Step 1.1.2: Examine the `start` Message Structure:**
        * **Claude, let's look at the code that constructs the `start` message sent to the ElevenLabs WebSocket.** Can you show me the code section responsible for creating this message?
        * **Claude, compare our `start` message code with the example provided in the engineer's email:**

        ```javascript
          {
            type: "start",
            voice_id: "MF3mGyEYCl7XYWbV9V6O",
            model_id: "eleven_monolingual_v1",
            text: "Hi, I'm from Hope Training Academy...",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
              style: 0.35,
              use_speaker_boost: true
            },
            conversation_settings: {
              enable_turn_taking: true,
              interruption_threshold: 0.5,
              language: "en-US",
              mode: "streaming",
              context: {
                agent_name: "Math Tutor",
                caller_name: "Hope Training Academy",
                subject: "Math Tutoring",
                purpose: "Discuss tutoring approach"
              }
            }
          }
        ```

        **Claude, can you identify any discrepancies, missing fields, typos, or formatting issues in our `start` message code compared to this example?**  Let's focus on `type`, `voice_id`, `model_id`, `text`, `voice_settings`, and `conversation_settings` fields.

    * **Step 1.1.3: Test with a Minimal `start` Message:**
        * **Claude, could we try simplifying the `start` message to the most basic required fields to rule out any issues with complex configurations?**  What is the absolute minimum `start` message structure required to initiate a connection? Let's try sending that minimal message and see if the 1008 error persists.

* **Task 1.2: Debugging No Activity in ElevenLabs Dashboard**

    * **Step 1.2.1: Verify Webhook URLs in Twilio:**
        * **Claude, can you remind me where I configured the Twilio webhook URLs?** (Assuming user knows, if not, Claude can guide to Twilio console).
        * **Claude, let's double-check the configured Voice URL and Status URL in Twilio against the engineer's provided URLs:**
            * Voice URL: `https://api.elevenlabs.io/v1/twilio/inbound_call?agent_id=[AGENT_ID]`
            * Status URL: `https://api.elevenlabs.io/v1/twilio/status?agent_id=[AGENT_ID]`
        * **Claude, are these URLs correctly formatted?**  Are we using the correct `[AGENT_ID]`? Is the method set to POST in Twilio?

    * **Step 1.2.2: Verify Webhook Headers:**
        * **Claude, where in our code (or server configuration) are we setting the headers for the webhook calls to ElevenLabs?** Let's find the code responsible for adding headers.
        * **Claude, confirm that we are including the following headers:**
            * `Content-Type: application/json`
            * `xi-api-key: [Your API Key]`
        * **Claude, is the `xi-api-key` header correctly set with our ElevenLabs API key from the `.env` file?**

    * **Step 1.2.3: Test Webhook URLs with PowerShell `Invoke-WebRequest`:**
        * **Claude, can you generate a PowerShell `Invoke-WebRequest` command to test the Voice URL:** `https://api.elevenlabs.io/v1/twilio/inbound_call?agent_id=[YOUR_AGENT_ID]`?
        * **This PowerShell command should:**
            * Use the `POST` method.
            * Include the headers `Content-Type: application/json` and `xi-api-key: [YOUR_API_KEY]`.
            * Send a minimal JSON payload (if needed for this endpoint, otherwise an empty body).
        * **Claude, after generating the command, please explain what it does step-by-step.**  Let's run this command in the PowerShell terminal within Cursor and see the response.

* **Task 1.3: Investigating Twilio Errors 15003 & 11200**

    * **Step 1.3.1: Check Twilio Callback URL Configuration:**
        * **Claude, let's re-examine the Twilio Voice and Status URLs we configured.** Are these URLs publicly accessible from the internet? (If testing locally without Ngrok, they likely are not, which could cause 15003).
        * **Claude, are there any formatting issues with these URLs?** Double-check for typos or incorrect syntax.

    * **Step 1.3.2: Investigate Potential Network Issues (for Error 11200):**
        * **Claude, are there any known network issues or firewall rules that might be preventing Twilio from reaching our server or ElevenLabs endpoints?** (This might require checking local network configuration, server logs, or contacting network admin if applicable).
        * **Claude, can we use PowerShell to perform a basic network connectivity test to `api.elevenlabs.io` from our machine?**  Suggest a PowerShell command to check if we can reach the ElevenLabs API endpoint.

    * **Step 1.3.3: Examine Twilio Request Inspector Logs:**
        * **Claude, can you guide me on how to access the "Request Inspector" in the Twilio console?** (Assuming user knows, if not, Claude to provide instructions).
        * **Claude, let's review the Twilio Request Inspector logs for calls related to our project.**  Can we filter or search for requests that resulted in errors 15003 or 11200?
        * **Claude, once we have the logs, can you help me analyze the request and response details to understand why these errors are occurring?**  Let's look for clues in the request body, headers, and the Twilio response.

**Phase 2 & 3 Tasks (To be elaborated in future iterations of this guide):**

* **Phase 2: Inbound Call Handling Setup:**  Focus on adapting the current setup to handle inbound calls, receiving calls via Twilio, and routing them to the ElevenLabs agent for conversation.
* **Phase 3: System Polishing & Refinement:**  Address error handling, improve conversational logic of the AI agent, consider call recording and transcription features, enhance documentation, and optimize performance and scalability.

**Relevant Resources (Links from your Prompt):**

* **GitHub Example for Outbound Calls:** [https://github.com/esplanadeai/11labs_Outbound]
* **YouTube Tutorial:** [https://www.youtube.com/watch?v=noCt8NsaG2Q]
* **YouTube Tutorial:** [https://www.youtube.com/watch?v=UaBzsIsVEDE]
* **ElevenLabs Conversational AI API Overview:** [https://elevenlabs.io/docs/conversational-ai/overview]

https://github.com/kimtaeyoon83/mcp-server-youtube-transcript MCP to install